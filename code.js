const openWidgetButton = document.getElementById('btncadastro');
const closeWidgetButton = document.getElementById('closeWidget');

openWidgetButton.addEventListener('click', () => {
    widget.classList.remove('hidden');
    widget.classList.add('visible');
});

closeWidgetButton.addEventListener('click', () => {
    widget.classList.remove('visible');
    widget.classList.add('hidden');})