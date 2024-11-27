document.getElementById('openModalBtn').addEventListener('click', function () {
  const modal = document.getElementById('modal');
  modal.classList.add('show'); // Додаємо клас для показу модалки
  document.body.classList.add('no-scroll'); // Вимикаємо прокручування тіла
});

// Закриття модалки при натисканні на кнопку
document.getElementById('closeModalBtn').addEventListener('click', function () {
  const modal = document.getElementById('modal');
  modal.classList.remove('show'); // Видаляємо клас для приховування модалки
  document.body.classList.remove('no-scroll'); // Вмикаємо прокручування тіла
});

// Закриття модалки при натисканні на посилання в меню
const menuLinks = document.querySelectorAll('.header-li');
menuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    const modal = document.getElementById('modal');
    modal.classList.remove('show'); // Видаляємо клас для приховування модалки
    document.body.classList.remove('no-scroll'); // Вмикаємо прокручування тіла
  });
});

// Закриття модалки при натисканні поза її межами
document.addEventListener('click', function (event) {
  const modal = document.getElementById('modal');
  const modalContent = document.querySelector('#modal .modal-content');

  // Перевірка, чи натиснуто поза модалкою
  if (event.target === modal) {
    modal.classList.remove('show'); // Приховуємо модалку
    document.body.classList.remove('no-scroll'); // Вмикаємо прокручування тіла
  }
});
