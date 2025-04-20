

function showPage(page) {
    document.querySelectorAll('.pagina').forEach(function(p) {
      p.style.display = 'none';
    });
  
    document.getElementById(page).style.display = 'block';
  }

const paginaimp = document.getElementById("Importar");
const paginacada = document.getElementById("Cadastrar");
const selectimpcada = document.getElementById("SeleImpCad");
const submit = document.getElementById("submit");

const btok = document.getElementById("ok");
btok.addEventListener('click', ()=>{
  const Sele = selectimpcada.value;

  if (Sele==="Cadastrar Dados")
    {
      paginaimp.classList.remove("visible");
      paginacada.classList.add("visible");
    }
  if (Sele==="Importar Dados")
    {
      paginacada.classList.remove("visible");
      paginaimp.classList.add("visible");
    }
});

submit.addEventListener('click', ()=>
  {
    alert("Dados cadastrados com sucesso!");
  })