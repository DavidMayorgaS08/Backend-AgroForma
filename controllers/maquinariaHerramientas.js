import MaquinariaHerramientas from "../models/maquinariaHerramientas.js";

const maquinariaHerramientasControllers = {
  // Listar todas las maquinarias y herramientas
  async getMaquinariaHerramientas(req, res) {
    try {
      const maquinariaHerramientas = await MaquinariaHerramientas.find();
      res.json(maquinariaHerramientas);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
  // Listar maquinaria y herramientas por id
  async getMaquinariaHerramienta(req, res) {
    try {
      const maquinariaHerramientas = await MaquinariaHerramientas.findById(
        req.params.id
      );
      res.json(maquinariaHerramientas);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
  // Crear maquinaria y herramientas
  async postMaquinariaHerramienta(req, res) {
    try {
      const maquinariaHerramientas = MaquinariaHerramientas.create(req.body);
      res.json(maquinariaHerramientas);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
  // Actualizar maquinaria y herramientas
  async putMaquinariaHerramienta(req, res) {
    try {
      const maquinariaHerramientas =
        await MaquinariaHerramientas.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
      res.json(maquinariaHerramientas);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
  async addMantenimiento(req, res) {
    try {
      const { id } = req.params;
      const nuevoMantenimiento = req.body; 

      const maquinaria = await MaquinariaHerramientas.findByIdAndUpdate(
        id,
        { $push: { Mantenimiento: nuevoMantenimiento } },
        { new: true }
      );

      if (!maquinaria) {
        return res.status(404).json({ message: "Maquinaria no encontrada" });
      }

      res.json(maquinaria);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async addDesinfeccion(req, res) {
    try {
      const { id } = req.params;
      const nuevaDesinfeccion = req.body; 

      const maquinaria = await MaquinariaHerramientas.findByIdAndUpdate(
        id,
        { $push: { Desinfeccion: nuevaDesinfeccion } },
        { new: true }
      );

      if (!maquinaria) {
        return res.status(404).json({ message: "Maquinaria no encontrada" });
      }

      res.json(maquinaria);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default maquinariaHerramientasControllers;