import { clearFunc } from './clear';
import { footerLoader } from '../static elements/footer';
import { headerLoader } from '../static elements/header';
import { menuPageLoader } from '../tabs/menutab';

function menuEvent() {
  clearFunc();
  headerLoader();
  menuPageLoader();
  footerLoader();
}

export { menuEvent };
