import { GestionMecanica } from './GestionMecanica.js';
import datosTaller from './datos-taller.js';

const app = new GestionMecanica(datosTaller);
app.iniciarApp("#app");
