const status = document.querySelector('#status');
const themeBtn = document.querySelector('#themeBtn');

document.querySelector('#helloBtn').addEventListener('click', () => {
  status.textContent = 'Hello from GitHub Pages!';
});

themeBtn.addEventListener('click', () => {
  const root = document.documentElement;
  const isDark = root.getAttribute('data-theme') === 'dark';
  root.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeBtn.textContent = isDark ? 'เปลี่ยนธีม (Dark)' : 'เปลี่ยนธีม (Light)';
});