document.getElementById('openModalBtn').addEventListener('click', function () {
  document.getElementById('modal').style.display = 'block';
  document.body.classList.add('no-scroll');
});

document.getElementById('closeModalBtn').addEventListener('click', function () {
  document.getElementById('modal').style.display = 'none';
  document.body.classList.remove('no-scroll');
});

const menuLinks = document.querySelectorAll('.header-li');
menuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    document.getElementById('modal').style.display = 'none';
    document.body.classList.remove('no-scroll');
  });
});

document.addEventListener('click', function (event) {
  const modal = document.getElementById('modal');
  const modalContent = document.querySelector('#modal .modal-content');

  if (event.target === modal) {
    modal.style.display = 'none';
    document.body.classList.remove('no-scroll');
  }
});
