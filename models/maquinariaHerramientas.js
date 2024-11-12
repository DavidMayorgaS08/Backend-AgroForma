import mongoose from 'mongoose';

const maquinariaHerramientasSchema = new mongoose.Schema({
    Id_finca: { type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true },
    Id_proveedor: { type: mongoose.Schema.Types.ObjectId, ref: 'Proveedores', required: true },
    Nombre: { type: String, required: true },
    Tipo: { type: String, required: true },
    Fecha_compra: { type: Date, required: true, default: Date.now },
    Observaciones: { type: String },
    Cantidad: { type: Number, required: true },
    Total: { type: Number, required: true },
    Mantenimiento: [
        {
            Fecha: { type: Date },
            Responsable: { type: String },
            Observaciones: { type: String },
            Precio: { type: Number }
        }
    ],
    Desinfeccion: [
        {
            Fecha: { type: Date },
            Id_insumo: { type: mongoose.Schema.Types.ObjectId, ref: 'Insumos'},
            Responsable: { type: String }
        }
    ],
    Historial_modificacion: []
});

export default mongoose.model('MaquinariaHerramientas', maquinariaHerramientasSchema);