const headerLoader = (() => {
  const header = document.createElement('header');
  const headerParagraph = document.createElement('p');
  headerParagraph.textContent = 'Macaron Delights Bistro';

  const buttons = document.createElement('div');
  buttons.classList.add('btns');
  const homeTab = document.createElement('button');
  const menuTab = document.createElement('button');
  const contactTab = document.createElement('button');
  homeTab.textContent = 'Home';
  menuTab.textContent = 'Menu';
  contactTab.textContent = 'Contact';
  buttons.appendChild(homeTab);
  buttons.appendChild(menuTab);
  buttons.appendChild(contactTab);

  header.appendChild(headerParagraph);
  header.appendChild(buttons);
  return { header, homeTab, menuTab, contactTab };
})();

export { headerLoader };
