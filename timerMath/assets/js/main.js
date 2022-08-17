const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let timerCorrendo;
//Função para criar uma array, contendo a hora, minuto e segundo
//Recebe do HTML do timer essas informações e as transforma em Number para realizar os calculos
//Caso o numero atual seja de um digito, na saída ele é mostrado como de dois digitos, com 0 a esquerda
//Isso ocorre através de uma série de IFs.
function clock() {
    let timerAtual = relogio.innerHTML;
    let h = parseInt(timerAtual.slice(0,2));
    let m = parseInt(timerAtual.slice(3,5));
    let s = parseInt(timerAtual.slice(6,8));
    s++;
    if (s === 59) {
        s = 0;
        m += 1;
    }
    if (m === 59) {
        m = 0;
        h += 1;
    }
    if (h < 10) {
        h = `0${h}`;
    }
    if (m < 10) {
        m = `0${m}`;
    }
    if (s < 10) {
        s = `0${s}`;
    }
    return [`${h}`,`${m}`,`${s}`];
}
//Eventos de clicar nos botões.
iniciar.addEventListener('click', function(event) {
    clearInterval(timerCorrendo);
    relogio.innerHTML = '00:00:00';
    relogio.classList.remove('pausado');
    timerCorrendo = setInterval(function (){
        console.log(clock());
        let horaA = clock();
        let horaB = `${horaA[0]}:${horaA[1]}:${horaA[2]}`;
        relogio.innerHTML = horaB;
    }, 1000);
});

pausar.addEventListener('click', function(event){
    clearInterval(timerCorrendo);
    relogio.classList.add('pausado');
}); 

zerar.addEventListener('click', function(event){
    clearInterval(timerCorrendo);
    relogio.classList.remove('pausado');
    relogio.classList.add('zerado');
    relogio.innerHTML = '00:00:00';
    setTimeout(function (){
        relogio.classList.remove('zerado');
    }, 1000);
} );