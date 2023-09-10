import { clearFunc } from './clear';
import { footerLoader } from '../static elements/footer';
import { headerLoader } from '../static elements/header';
import { contactPageLoader } from '../tabs/contacttab';

function contactEvent() {
  clearFunc();
  headerLoader();
  contactPageLoader();
  footerLoader();
}

export { contactEvent };
