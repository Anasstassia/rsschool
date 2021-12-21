import 'nouislider/dist/nouislider.css';
import './scss/style.scss';
import { init } from './range-sliders';
import { search, sorted } from './helpers';
import { selectShape, selectColor, selectSize, selectFavorite, reset, resetLocalStorage } from './helpers';
import ToysList from './toys-list';
const toys = new ToysList();

init(toys);
sorted(toys);
reset(toys);
search(toys);
selectShape(toys);
selectColor(toys);
selectSize(toys);
selectFavorite(toys);
resetLocalStorage(toys);
