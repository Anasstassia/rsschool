import 'nouislider/dist/nouislider.css';
import './scss/style.scss';
import { init } from './range-sliders';
import { sorted } from './helpers';
import { selectShape, selectColor, selectSize, selectFavorite } from './helpers';
import ToysList from './toys-list';
const toys = new ToysList();

init(toys);
sorted(toys);

selectShape(toys);
selectColor(toys);
selectSize(toys);
selectFavorite(toys);
