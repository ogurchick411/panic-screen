const macUpdate = document.getElementById('macUpdate');
const terminal = document.getElementById('terminal');

window.addEventListener('keydown', (e) => {
  if (e.key === '1') {
    macUpdate.classList.remove('hidden');
    terminal.classList.add('hidden');
  }
  if (e.key === '2') {
    terminal.classList.remove('hidden');
    macUpdate.classList.add('hidden');
  }
});