function adjustSections() {
  const header = document.querySelector('header.header-page');
  const sections = document.querySelectorAll('section');
  const headerHeight = header.offsetHeight;

  sections.forEach(section => {
    section.style.paddingTop = `${headerHeight}px`;
  });
}
