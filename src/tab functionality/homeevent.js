import { clearFunc } from './clear';
import { footerLoader } from '../static elements/footer';
import { headerLoader } from '../static elements/header';
import { homePageLoader } from '../tabs/hometab';

function homeEvent() {
  clearFunc();
  headerLoader();
  homePageLoader();
  footerLoader();
}

export { homeEvent };
