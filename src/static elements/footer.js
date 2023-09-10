function footerLoader() {
  const content = document.querySelector('#content');
  const footer = document.createElement('footer');
  footer.textContent = 'FadingMorseCode';
  content.appendChild(footer);
}

export { footerLoader };
