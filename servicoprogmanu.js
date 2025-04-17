function showWidget(item) {
    document.getElementById("widgetText").textContent = item;
    document.getElementById("widdesc").classList.add("visible");
}

const chkstp = document.getElementById("chkstp");
const chkconclu = document.getElementById("chkconclu");
const closebt = document.getElementById("Fechar");
const registrarbt = document.getElementById("Registrar");
const widdesc = document.getElementById("widdesc");

chkstp.addEventListener('change', ()=>
    {
        if (chkconclu.checked) chkstp.checked = false;
    });
chkconclu.addEventListener('change', ()=>
    {
        if (chkstp.checked) chkconclu.checked = false;
    });

closebt.addEventListener('click', ()=>{
    widdesc.classList.remove("visible");
});

registrarbt.addEventListener('click', ()=>
    {
        const confirmado = confirm("Tem certeza que deseja registrar?");
        if (!confirmado)
        {
            e.preventDefault();
        }
        else
        {
            alert("Notificação atualizada!");
            widdesc.classList.remove("visible");
        }
    })