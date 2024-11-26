// function adjustSections() {
//   const header = document.querySelector('header.header-page');
//   const sections = document.querySelectorAll('section');
//   const headerHeight = header.offsetHeight;

//   sections.forEach(section => {
//     section.style.paddingTop = `${headerHeight}px`;
//   });
// }

function adjustSections() {
  const header = document.querySelector('header.header-page');
  const h2 = document.querySelector('h2');
  const sections = document.querySelectorAll('section');

  const headerHeight = header.offsetHeight;
  const h2Height = h2 ? h2.offsetHeight : 0;

  const totalHeight = headerHeight + h2Height;

  sections.forEach(section => {
    section.style.paddingTop = `${totalHeight}px`;
  });
}
