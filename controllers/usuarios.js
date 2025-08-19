import Usuarios from "../models/usuarios.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const usuariosControllers = {
  async getUsuarios(req, res) {
    try {
      const usuarios = await Usuarios.find();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },

  async postUsuario(req, res) {
    try {
      req.body.Password = bcrypt.hashSync(req.body.Password, 10);
      const usuario = Usuarios.create(req.body);
      res.json(usuario);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },

  async getUsuario(req, res) {
    try {
      const usuarios = await Usuarios.findById(req.params.id);
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },

  async putUsuario(req, res) {
    try {
      const usuarioActual = await Usuarios.findById(req.params.id);
      if (!usuarioActual) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      if (req.body.Password && req.body.Password !== usuarioActual.Password) {
        req.body.Password = bcrypt.hashSync(req.body.Password, 10);
      } else {
        req.body.Password = usuarioActual.Password;
      }

      const usuarioActualizado = await Usuarios.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(usuarioActualizado);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },

  async enviarRecuperacion(req, res) {
    const rawEmail = req.body.email;
    const email = typeof rawEmail === "string" ? rawEmail : rawEmail.email;
    try {
      const usuario = await Usuarios.findOne({ Email: email });

      if (!usuario) {
        console.log("Correo no encontrado:", email);
        return res.status(404).json({ message: "Correo no encontrado" });
      }

      const token = jwt.sign(
        { id: usuario._id },
        process.env.SECRETORPRIVATEKEY,
        { expiresIn: "1h" }
      );
      const enlace = `http://localhost:5173/#/cambiar/contrasena?token=${token}`;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "equipodeagronomiasoftware@gmail.com",
          pass: "ouneurtkzscoxgks",
        },
      });

      await transporter.sendMail({
        from: "samuelmejiaz2005@gmail.com",
        to: usuario.Email, // CORREGIDO
        subject: "Recuperación de contraseña",
        html: `
    <p>Hola ${usuario.Nombre},</p>
    <p>Has solicitado restablecer tu contraseña. Haz clic en el siguiente enlace:</p>
    <a href="${enlace}">${enlace}</a>
    <p>Este enlace expirará en 1 hora.</p>
  `,
      });

      res.json({ message: "Correo de recuperación enviado" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async recuperarContrasena(req, res) {
    const { nuevaContrasena, token } = req.body;

    if (!token || !nuevaContrasena) {
      return res
        .status(400)
        .json({ message: "Token y nueva contraseña son requeridos" });
    }

    try {
      const decoded = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

      const usuario = await Usuarios.findById(decoded.id);
      if (!usuario) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(nuevaContrasena, salt);

      usuario.Password = hashedPassword;
      await usuario.save();

      return res
        .status(200)
        .json({ message: "Contraseña actualizada correctamente" });
    } catch (error) {
      console.error("Error al actualizar contraseña:", error);
      return res
        .status(500)
        .json({ message: "Error al actualizar la contraseña" });
    }
  },
};

export default usuariosControllers;