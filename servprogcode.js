function showWidget(item) {
    document.getElementById("widgetText").textContent = item;
    document.getElementById("widget").classList.add("visible");
}

function hideWidget() {
    document.getElementById("widget").classList.remove("visible");
}

const abrirnot = document.getElementById("abrirnot");
const widdados = document.getElementById("widgetdados");
const mainwidget = document.getElementById("widget");

abrirnot.addEventListener('click', ()=>
{
    widdados.classList.remove("hidden");
    widdados.classList.add("visible");
    mainwidget.classList.remove("visible");
});