import './index.css';
import { renderMainHtml } from './html-render';
import { createCar, getCars } from './api';
import { startAnimation } from './animation';

renderMainHtml();
getCars();
createCar('Car2', '#ffffff');
// updateCar();
startAnimation();
