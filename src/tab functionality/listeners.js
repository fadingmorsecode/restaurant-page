import { menuEvent } from './menuevent';
import { homeEvent } from './homeevent';
import { contactEvent } from './contactevent';

export function loadListeners() {
  function changePage(event) {
    if (
      event.target.matches('.header-txt') ||
      event.target.matches('.home-btn')
    ) {
      homeEvent();
    } else if (event.target.matches('.menu-btn')) {
      menuEvent();
    } else if (event.target.matches('.contact-btn')) {
      contactEvent();
    }
  }

  document.addEventListener('click', changePage);
}
