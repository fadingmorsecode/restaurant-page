import { clearFunc } from './clear';
import { footerLoader } from './footer';
import { headerLoader } from './header';
import { contactPageLoader } from '../tabs/contacttab';

function contactEvent() {
  clearFunc();
  headerLoader();
  contactPageLoader();
  footerLoader();
}

export { contactEvent };
