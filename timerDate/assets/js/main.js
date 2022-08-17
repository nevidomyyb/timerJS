const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;
//Função para criar um objeto Data a partir dos segundos percorridos.
function criarTempoPSegundos(segundos) {
    const hora = new Date(segundos * 1000);
    return hora.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}
//Função para iniciar o timer, a partir do objeto Data já criado e
//Coloca-lo no HTML do relogio
function iniciarTimer() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criarTempoPSegundos(segundos);
    },1000);
}
//Eventos de clicar nos botões
iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciarTimer();
});

pausar.addEventListener('click', function(event){
   clearInterval(timer);
   relogio.classList.add('pausado');
}); 

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
    relogio.classList.add('zerado');
    setTimeout(function () {
        relogio.classList.remove('zerado')
    }, 2000);

} );