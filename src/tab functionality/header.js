import { menuEvent } from './menuevent';
import { homeEvent } from './homeevent';
import { contactEvent } from './contactevent';

function headerLoader() {
  const content = document.querySelector('#content');
  const header = document.createElement('header');
  const headerParagraph = document.createElement('p');
  headerParagraph.textContent = 'Macaron Delights Bistro';
  headerParagraph.classList.add('header-txt');

  const buttons = document.createElement('div');
  buttons.classList.add('btns');
  const homeTab = document.createElement('button');
  homeTab.classList.add('home-btn');
  const menuTab = document.createElement('button');
  menuTab.classList.add('menu-btn');
  const contactTab = document.createElement('button');
  contactTab.classList.add('contact-btn');
  homeTab.textContent = 'Home';
  menuTab.textContent = 'Menu';
  contactTab.textContent = 'Contact';
  buttons.appendChild(homeTab);
  buttons.appendChild(menuTab);
  buttons.appendChild(contactTab);

  header.appendChild(headerParagraph);
  header.appendChild(buttons);

  content.appendChild(header);

  const homeButton = document.querySelector('.home-btn');
  const menuButton = document.querySelector('.menu-btn');
  const contactButton = document.querySelector('.contact-btn');

  headerParagraph.addEventListener('click', () => {
    homeEvent();
  });
  homeButton.addEventListener('click', () => {
    homeEvent();
  });
  menuButton.addEventListener('click', () => {
    menuEvent();
  });
  contactButton.addEventListener('click', () => {
    contactEvent();
  });
}

export { headerLoader };
