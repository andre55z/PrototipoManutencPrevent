openWidgetButton.addEventListener('click', () => {
    widget.classList.remove('hidden');
    widget.classList.add('visible');
});

closeWidgetButton.addEventListener('click', () => {
    widget.classList.remove('visible');
    widget.classList.add('hidden');})