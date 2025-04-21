function showPage(page) {
  document.querySelectorAll('.pagina').forEach(p => p.style.display = 'none');
  document.getElementById(page).style.display = 'block';
}

document.getElementById("ok").addEventListener('click', () => {
  const val = document.getElementById("SeleImpCad").value;
  document.getElementById("Importar").classList.remove("visible");
  document.getElementById("Cadastrar").classList.remove("visible");
  document.getElementById(val === "Cadastrar Dados" ? "Cadastrar" : "Importar").classList.add("visible");
});

document.getElementById("submit").addEventListener('click', () => {
  alert("Dados cadastrados com sucesso!");
});

document.getElementById("okay").addEventListener('click', () => {
  const val = document.getElementById("Seleper").value;
  ["mesatu", "mespos", "mesant"].forEach(id => document.getElementById(id).style.display = "none");
  if (val === "Mês atual") document.getElementById("mesatu").classList.add("visible");
  else if (val === "6 meses anteriores") document.getElementById("mesant").classList.add("visible");
  else if (val === "6 meses posteriores") document.getElementById("mespos").classList.add("visible");
});

const notificacoes = {
  "Máquina 1": [{ texto: "Notificação A ✅", feito: true }, { texto: "Notificação B", feito: false }],
  "Máquina 2": [{ texto: "Notificação A", feito: false }],
  "Máquina 3": [{ texto: "Notificação A ✅", feito: true }],
  "Máquina 4": [{ texto: "Notificação A", feito: false }],
  "Máquina 5": [{ texto: "Notificação A ✅", feito: true }],
  "Máquina 6": [{ texto: "Notificação A", feito: false }, { texto: "Notificação B ✅", feito: true }]
};

function showWidget(nome) {
  const lista = document.getElementById("widgetList");
  lista.innerHTML = "";
  document.getElementById("widgetTitle").innerText = `Notificações - ${nome}`;
  notificacoes[nome]?.forEach(n => {
    const li = document.createElement("li");
    li.textContent = n.texto;
    if (n.feito) {
      li.classList.add("feito");
      const btn = document.createElement("button");
      btn.textContent = "Excluir notificação";
      btn.className = "excluir-btn";
      btn.onclick = () => alert("Autor notificado");
      li.appendChild(btn);
    }
    lista.appendChild(li);
  });
  document.getElementById("widget").style.display = "block";
}

function fecharWidget() {
  document.getElementById("widget").style.display = "none";
  fecharHistorico();
  fecharPecas();
  fecharCadastroPeca();
}

function showHistorico() {
  document.getElementById("historicoWidget").style.display = "block";
}

function fecharHistorico() {
  document.getElementById("historicoWidget").style.display = "none";
}

function showPecas() {
  document.getElementById("pecasWidget").style.display = "block";
}

function fecharPecas() {
  document.getElementById("pecasWidget").style.display = "none";
}

function showCadastroPeca() {
  document.getElementById("cadastroPecaWidget").style.display = "block";
}

function fecharCadastroPeca() {
  document.getElementById("cadastroPecaWidget").style.display = "none";
}
