import './style.css';
import { headerLoader } from './static elements/header';
import { footerLoader } from './static elements/footer';
import { homePageLoader } from './tabs/hometab';
import { menuPageLoader } from './tabs/menutab';
import { contactPageLoader } from './tabs/contacttab';

const contentLoader = document.querySelector('#content');
contentLoader.appendChild(headerLoader.header);

const mainContent = document.createElement('div');
mainContent.classList.add('main-content');
contentLoader.appendChild(mainContent);

contentLoader.appendChild(footerLoader.footer);

//mainContent.appendChild(homePageLoader.main);
//mainContent.appendChild(menuPageLoader.main);
//mainContent.appendChild(contactPageLoader.main);

// headerLoader.homeTab.addEventListener('click');
// headerLoader.menuTab.addEventListener('click');
// headerLoader.contactTab.addEventListener('click');
