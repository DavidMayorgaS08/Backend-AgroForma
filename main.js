import express from 'express';
import 'dotenv/config';
import dbConexion from './database/cnxmongoose.js';
import cors from 'cors';

import login from './routes/login.js';
import analisisSuelos from './routes/analisisSuelos.js';
import compradores from './routes/compradores.js';
import controlPlagas from './routes/controlPlagas.js';
import cultivos from './routes/cultivos.js';
import elaboracionSustratos from './routes/elaboracionSustratos.js';
import facturasCompras from './routes/facturasCompras.js';
import facturasVentas from './routes/facturasVentas.js';
import fertilizantes from './routes/fertilizantes.js';
import fincas from './routes/fincas.js';
import gastos from './routes/gastos.js';
import insumos from './routes/insumos.js';
import maquinariaHerramientas from './routes/maquinariaHerramientas.js';
import nominasPagos from './routes/nominasPagos.js';
import nominasRegistroTrabajos from './routes/nominasRegistroTrabajos.js';
import nominasTicket from './routes/nominasTicket.js';
import nominasTiposLabor from './routes/nominasTiposLabor.js';
import nominasTrabajadores from './routes/nominasTrabajadores.js';
import parcelas from './routes/parcelas.js';
import PreparacionSuelos from './routes/preparacionSuelos.js';
import procesos from './routes/procesos.js';
import producciones from './routes/producciones.js';
import proveedores from './routes/proveedores.js';
import riegos from './routes/riegos.js';
import semillas from './routes/semillas.js';
import siembras from './routes/siembras.js';
import ususarios from './routes/usuarios.js';

const app = express();
app.use(cors(
    {
        origin: '*'
    }
));

app.use(express.json());

app.use('/login', login);
app.use('/analisis-suelos', analisisSuelos);
app.use('/compradores', compradores);
app.use('/control-plagas', controlPlagas);
app.use('/cultivos', cultivos);
app.use('/elaboracion-sustratos', elaboracionSustratos);
app.use('/facturas-compras', facturasCompras);
app.use('/facturas-ventas', facturasVentas);
app.use('/fertilizantes', fertilizantes);
app.use('/fincas', fincas);
app.use('/gastos', gastos);
app.use('/insumos', insumos);
app.use('/maquinaria-herramientas', maquinariaHerramientas);
app.use('/nominas-pagos', nominasPagos);
app.use('/nominas-registro-trabajos', nominasRegistroTrabajos);
app.use('/nominas-ticket', nominasTicket);
app.use('/nominas-tipos-labor', nominasTiposLabor);
app.use('/nominas-trabajadores', nominasTrabajadores);
app.use('/parcelas', parcelas);
app.use('/preparacion-suelos', PreparacionSuelos);
app.use('/procesos', procesos);
app.use('/producciones', producciones);
app.use('/proveedores', proveedores);
app.use('/riegos', riegos);
app.use('/semillas', semillas);
app.use('/siembras', siembras);
app.use('/usuarios', ususarios);

app.listen(process.env.PORT, function () {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
    dbConexion();
});