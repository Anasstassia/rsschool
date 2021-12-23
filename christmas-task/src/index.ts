import 'nouislider/dist/nouislider.css';
import './scss/style.scss';
import { init } from './range-sliders';
import { search, sorted } from './helpers';
import { selectShape, selectColor, selectSize, selectFavorite, reset, resetLocalStorage } from './helpers';
import ToysList from './toys-list';
import { router } from './router';
import { playAudio } from './music';
import { createSnowFlake } from './snow';
const toys = new ToysList();

const toToys = document.querySelector('.start-play');
const toToysPage = document.querySelector('.switch-toys');
const toTreePage = document.querySelector('.switch-tree');
const toTree = document.querySelector('.switch-to-tree');
const toWelcome = document.querySelector('.switch-home');
const toWelcomePage = document.querySelector('.sound-snow-btn .switch-home');
const toToysBtn = document.querySelector('.switch-to-toys');

playAudio();
createSnowFlake();

init(toys);
sorted(toys);
reset(toys);
search(toys);
selectShape(toys);
selectColor(toys);
selectSize(toys);
selectFavorite(toys);
resetLocalStorage(toys);

toToys?.addEventListener('click', () => {
    router.link('main');
});
toToysPage?.addEventListener('click', () => {
    router.link('main');
});
toToysBtn?.addEventListener('click', () => {
    router.link('main');
});
toWelcome?.addEventListener('click', () => {
    router.link('welcome');
});
toWelcomePage?.addEventListener('click', () => {
    router.link('welcome');
});
toTreePage?.addEventListener('click', () => {
    router.link('tree');
});
toTree?.addEventListener('click', () => {
    router.link('tree');
});
