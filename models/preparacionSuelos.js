import mongoose from "mongoose";

const preparacionSuelosSchema = new mongoose.Schema({
    Id_finca: { type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true },
    Fecha: { type: Date, required: true },
    Id_parcela: { type: mongoose.Schema.Types.ObjectId, ref: 'Parcelas', required: true },
    Responsable: { type: String, required: true },
    Productos: [{
        Ingrediente_activo: { type: String, required: true },
        Dosis: { type: String, required: true },
        Metodo_aplicacion: { type: String, required: true }
    }],
    Observaciones: { type: String },
    Estado_suelo: { type: String, enum: ['Necesita trabajo', 'Buenas condiciones'], required: true },
    Historial_modificacion: []
});

export default mongoose.model('PreparacionSuelos', preparacionSuelosSchema);