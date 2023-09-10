import './style.css';
import { headerLoader } from './static elements/header';
import { footerLoader } from './static elements/footer';
import { homePageLoader } from './tabs/hometab';
import { menuEvent } from './tab functionality/menuevent';
import { contactEvent } from './tab functionality/contactevent';
import { homeEvent } from './tab functionality/homeevent';

headerLoader();
homePageLoader();
footerLoader();

const homeButton = document.querySelector('.home-btn');
const menuButton = document.querySelector('.menu-btn');
const contactButton = document.querySelector('.contact-btn');

homeButton.addEventListener('click', () => {
  homeEvent();
});
menuButton.addEventListener('click', () => {
  menuEvent();
});
contactButton.addEventListener('click', () => {
  contactEvent();
});
