function homePageLoader() {
  const content = document.querySelector('#content');

  const main = document.createElement('main');
  const imageContainer = document.createElement('div');
  const mainTextContainer = document.createElement('div');
  const headingText = document.createElement('p');
  const subText = document.createElement('p');

  main.appendChild(imageContainer);
  main.appendChild(mainTextContainer);
  mainTextContainer.appendChild(headingText);
  mainTextContainer.appendChild(subText);

  imageContainer.classList.add('main-img');
  mainTextContainer.classList.add('main-txt');
  headingText.classList.add('heading-txt');
  subText.classList.add('sub-txt');

  headingText.textContent = 'Start your delicious adventure with us!';
  subText.textContent =
    "At Macaron Delights Bistro, we're on a mission to craft macarons that\
          transcend taste. We're the artists behind every bite, blending\
          tradition with innovation to create edible masterpieces. Quality and\
          exceptional experiences define us. Join us on a macaron adventure like\
          no other.";

  content.appendChild(main);
}

export { homePageLoader };
