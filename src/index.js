import './style.css';
import { headerLoader } from './tab functionality/header';
import { footerLoader } from './tab functionality/footer';
import { homePageLoader } from './tabs/hometab';
import { loadListeners } from './tab functionality/listeners';

headerLoader();
homePageLoader();
footerLoader();
loadListeners();
