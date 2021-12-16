import 'nouislider/dist/nouislider.css';
import './scss/style.scss';
import { init } from './range-sliders';
import { sorted } from './helpers';
import { selectShape, selectColor } from './helpers';
init();
sorted();

selectShape();
selectColor();
