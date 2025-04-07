const openWidgetButton = document.getElementById('btncadastro');
const closeWidgetButton = document.getElementById('closeWidget');
const confirmMat = document.getElementById('confirmMat');
const widget = document.getElementById('widget');
const messageCont = document.getElementById('messageContainer');


const matricula = document.getElementById('matricula');
const setor = document.getElementById('setorSoli');
const senha = document.getElementById('pswd');
const confirmarSenha = document.getElementById('confpswd');
const entrar = document.getElementById('Entrar');
const setorop = document.getElementById('setorLogin');
const widchoose = document.getElementById('widgetcho');
const widsp = document.getElementById('widsp');
const closeWidgetchoButton = document.getElementById('closeWidgetcho');
const paradaMaquina = document.getElementById('btparadademaq');
const servicoProg = document.getElementById('btservicoprog');
const fechasup = document.getElementById('fecharsup');
const progmanu = document.getElementById("btmanuprog");
const prevmanu = document.getElementById("btmanuprev");
const widmanu = document.getElementById("widmanu");
const widmanusts = document.getElementById("widmenusts"); 
const btcloseprod = document.getElementById("btclose");
const btservpro = document.getElementById("btmanuprog");
const btservpre = document.getElementById("btmanuprev");

openWidgetButton.addEventListener('click', () => {
    widget.classList.remove('hidden');
    widget.classList.add('visible');
});

closeWidgetButton.addEventListener('click', () => {
    widget.classList.remove('visible');
    widget.classList.add('hidden');
});


confirmMat.addEventListener('click', () => {
    if (matricula.value.trim() === '' || setor.value.trim() === '' || senha.value.trim() === '' || confirmarSenha.value.trim() === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    if (senha.value !== confirmarSenha.value) {
        alert('As senhas não coincidem!');
        return;
    }


    widget.classList.remove('visible');
    widget.classList.add('hidden');

 
    messageCont.style.display = 'flex';

 
    setTimeout(() => {
        messageCont.style.display = 'none';
    }, 3000);
});

entrar.addEventListener('click', ()=>
    {
        const SetorSelected = setorop.value;
        if (SetorSelected === "Engenharia/produção (Nível Técnico/Líder)")
            {

                widmanu.classList.remove("hiddenn");
                widmanu.classList.add("visible");
                widmanusts.classList.remove("hiddenn");
                widmanusts.classList.add("visible");
                btcloseprod.addEventListener('click', ()=>
                    {
                        widmanu.classList.remove("visible");
                        widmanu.classList.add("hiddenn");
                    });
                btservpro.addEventListener('click', ()=>
                    {
                        window.location.href='./servicoprogmanu.html';
                    });
                btservpre.addEventListener('click', ()=>
                    {
                        window.location.href='./servicoprevmanu.html'
                    });
            }
            else if (SetorSelected === "Engenharia/produção (Nível Engenharia)")
            {

                widmanu.classList.remove("hiddenn");
                widmanu.classList.add("visible");
                widmanusts.classList.remove("hiddenn");
                widmanusts.classList.add("visible");
                btcloseprod.addEventListener('click', ()=>
                    {
                        widmanu.classList.remove("visible");
                        widmanu.classList.add("hiddenn");
                    });
                btservpro.addEventListener('click', ()=>
                    {
                        window.location.href='./servicoprogmanu.html';
                    });
                btservpre.addEventListener('click', ()=>
                    {
                        window.location.href='./servicoprevmanu.html'
                    });
                
            }
            else if (SetorSelected==="Supervisor")
            {
                widgetcho.classList.remove('hidden');
                widgetcho.classList.add('visible');
                widsp.classList.remove('hidden');
                widsp.classList.add('visible');
                fechasup.addEventListener('click', ()=>
                    {
                        widsp.classList.remove('visible');
                        widsp.classList.add('hidden');
                    });
                paradaMaquina.addEventListener('click', ()=>
                    {
                        window.location.href='./paradamaquina.html';
                    });
                servicoProg.addEventListener('click', ()=>
                    {
                        window.location.href='./servicoprogsp.html';
                    });


            }
            else
            {
                alert("Por favor, selecione um setor!")
            }
    });





