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
}

export { headerLoader };
