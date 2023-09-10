import { menuEvent } from '../tab functionality/menuevent';
import { homeEvent } from '../tab functionality/homeevent';
import { contactEvent } from '../tab functionality/contactevent';

function headerLoader() {
  const content = document.querySelector('#content');
  const header = document.createElement('header');
  const headerParagraph = document.createElement('p');
  headerParagraph.textContent = 'Macaron Delights Bistro';

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
