function contactPageLoader() {
  const content = document.querySelector('#content');

  const main = document.createElement('div');
  main.classList.add('contact-main-content');

  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');
  main.appendChild(contactContainer);

  const contactInfoContainer = document.createElement('div');
  contactInfoContainer.classList.add('contact-info-container');
  const contactHeading = document.createElement('p');
  contactHeading.classList.add('contact-heading');
  const contactAddress = document.createElement('p');
  const contactPhone = document.createElement('p');
  const contactEmail = document.createElement('p');

  contactHeading.textContent = 'Contact Us';
  contactAddress.textContent = `123 Macaron Avenue
    Sugarville, Sweetland 54321
    Confectionary County
    Dessertland`;
  contactPhone.textContent = '(123)-456-7890';
  contactEmail.textContent = 'MacaronDelights@gmail.com';

  const hoursInfo = document.createElement('div');
  hoursInfo.classList.add('hours');
  const mon = document.createElement('p');
  const tue = document.createElement('p');
  const wed = document.createElement('p');
  const thur = document.createElement('p');
  const fri = document.createElement('p');
  const sat = document.createElement('p');
  const sun = document.createElement('p');
  mon.textContent = 'Monday: 8AM-9PM';
  tue.textContent = 'Tuesday: 8AM-9PM';
  wed.textContent = 'Wednesday: 8AM-9PM';
  thur.textContent = 'Thursday: 8AM-9PM';
  fri.textContent = 'Friday: 8AM-11PM';
  sat.textContent = 'Saturday: 8AM-11PM';
  sun.textContent = 'Sunday: 12PM-8PM';
  hoursInfo.appendChild(mon);
  hoursInfo.appendChild(tue);
  hoursInfo.appendChild(wed);
  hoursInfo.appendChild(thur);
  hoursInfo.appendChild(fri);
  hoursInfo.appendChild(sat);
  hoursInfo.appendChild(sun);

  contactInfoContainer.appendChild(contactAddress);
  contactInfoContainer.appendChild(contactPhone);
  contactInfoContainer.appendChild(contactEmail);

  contactContainer.appendChild(contactHeading);
  contactContainer.appendChild(contactInfoContainer);
  contactContainer.appendChild(hoursInfo);

  content.appendChild(main);
}

export { contactPageLoader };
