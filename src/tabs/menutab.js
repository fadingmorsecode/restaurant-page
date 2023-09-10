function menuPageLoader() {
  const content = document.querySelector('#content');

  const main = document.createElement('div');
  main.classList.add('menu-content');

  const menuHeaderText = document.createElement('p');
  menuHeaderText.classList.add('menu-header-txt');
  menuHeaderText.textContent = `Discover our three exquisite macaron bundles, each thoughtfully curated to cater to your cravings and desires. Whether you seek a medley of flavors, a moment of serenity, or an array of flavorful delights, our menu has something to delight every palate. Each bundle includes 16 macarons.`;
  main.appendChild(menuHeaderText);

  const menuItemContainer = document.createElement('div');
  menuItemContainer.classList.add('menu-item-container');
  main.appendChild(menuItemContainer);

  const menuItemOneContainer = document.createElement('div');
  const menuItemOneHeading = document.createElement('p');
  menuItemOneHeading.textContent = 'Macaron Medley Magic - $24';
  menuItemOneContainer.appendChild(menuItemOneHeading);
  const menuItemOneSubText = document.createElement('p');
  menuItemOneSubText.textContent = `Indulge in a delightful assortment of macarons with our Macaron Medley Magic bundle. This collection features a vibrant array of flavors and colors, from classic favorites like vanilla and chocolate to exotic surprises like lavender and passion fruit. Each macaron is handcrafted with care, boasting a delicate, crispy shell and a luscious, creamy filling. Perfect for those who crave variety and enjoy the magic of macarons!`;
  menuItemOneContainer.appendChild(menuItemOneSubText);
  menuItemContainer.appendChild(menuItemOneContainer);

  const menuItemTwoContainer = document.createElement('div');
  const menuItemTwoHeading = document.createElement('p');
  menuItemTwoHeading.textContent = 'Sweet Serenity Sampler - $22';
  menuItemTwoContainer.appendChild(menuItemTwoHeading);
  const menuItemTwoSubText = document.createElement('p');
  menuItemTwoSubText.textContent = `Experience a moment of pure serenity with our Sweet Serenity Sampler. This curated bundle offers a harmonious selection of macarons that promise to tantalize your taste buds and soothe your senses. From the tranquil notes of earl grey to the comforting embrace of salted caramel, these macarons are a symphony of sweet flavors that will transport you to a world of blissful relaxation. Perfect for gifting or savoring in solitude.`;
  menuItemTwoContainer.appendChild(menuItemTwoSubText);
  menuItemContainer.appendChild(menuItemTwoContainer);

  const menuItemThreeContainer = document.createElement('div');
  const menuItemThreeHeading = document.createElement('p');
  menuItemThreeHeading.textContent = 'Flavorful Delights - $27';
  menuItemThreeContainer.appendChild(menuItemThreeHeading);
  const menuItemThreeSubText = document.createElement('p');
  menuItemThreeSubText.textContent = `Elevate your dessert experience with our Flavorful Macaron Delights bundle. This collection showcases an enticing array of macarons, each bursting with its own unique flavor profile. Whether you're craving the zesty zest of lemon or the rich decadence of pistachio, these macarons are a delightful journey for your taste buds. Perfect for sharing with loved ones or savoring as a special treat for yourself. Discover the delightful world of macaron indulgence today!`;
  menuItemThreeContainer.appendChild(menuItemThreeSubText);
  menuItemContainer.appendChild(menuItemThreeContainer);

  content.appendChild(main);
}

export { menuPageLoader };
