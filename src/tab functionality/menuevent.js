import { clearFunc } from './clear';
import { footerLoader } from './footer';
import { headerLoader } from './header';
import { menuPageLoader } from '../tabs/menutab';

function menuEvent() {
  clearFunc();
  headerLoader();
  menuPageLoader();
  footerLoader();
}

export { menuEvent };
