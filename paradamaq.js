function showstop(item)
{
    const widget = document.getElementById("widget");
    widget.classList.add("visible");
}

const btnclose = document.getElementById("closeWid");

btnclose.addEventListener('click', ()=>
    {
        widget.classList.remove("visible");
    })

const btnaceit = document.getElementById("btnaceit");
const btnrecu = document.getElementById("btnrecu");

btnaceit.addEventListener('click', function(e)
{
    const confirmado = confirm("Tem certeza que deseja aceitar?");
    if (!confirmado)
    {
        e.preventDefault();
    }
    else
    {
        alert("Solicitação aceita.");
        widget.classList.remove("visible");
    }

});

btnrecu.addEventListener('click', function(e)
{
    const confirmado = confirm("Tem certeza que deseja recusar?");
    if (!confirmado)
    {
        e.preventDefault();
    }
    else
    {
        alert("Solicitação recusada.");
        widget.classList.remove("visible");
    }

});