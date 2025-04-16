function showWidget(item) {
    document.getElementById("widgetText").textContent = item;
    document.getElementById("widdesc").classList.add("visible");
}

function hideWidget() {
    document.getElementById("widdesc").classList.remove("visible");
}
