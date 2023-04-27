const btnDarkMode = document.querySelector('.dark-mode-btn');

// 1. Проверка темной темы на уровне системных настроек операционной системы

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  btnDarkMode.classList.add('dark-mode-btn--active');
  document.body.classList.add('dark');
}

// 2. Проверка темной темы в localstorage

if (localStorage.getItem('darkMode') === 'dark') {
  btnDarkMode.classList.add('dark-mode-btn--active');
  document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'light') {
  btnDarkMode.classList.remove('dark-mode-btn--active');
  document.body.classList.remove('dark');
}

// 4. Если в операционной системе настроена автоматическая смена темы, то меняем тему

window.matchMedia('(prefers-color-scheme: dark').addEventListener('change', (event) => {
  const newColorsSheme = event.matches ? 'dark' : 'light';

  if (newColorsSheme === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
  } else {
    btnDarkMode.classList.remove('dark-mode-btn--active');
  }
});

// Включение ночного режима по кнопке

btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle('dark-mode-btn--active');
  const isDark = document.body.classList.toggle('dark');

  if (isDark) {
    localStorage.setItem('darkMode', 'dark');
  } else {
    localStorage.setItem('darkMode', 'light');
  }
};
