import { clearFunc } from './clear';
import { footerLoader } from './footer';
import { headerLoader } from './header';
import { homePageLoader } from '../tabs/hometab';

function homeEvent() {
  clearFunc();
  headerLoader();
  homePageLoader();
  footerLoader();
}

export { homeEvent };
