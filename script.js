function mostrarResultado(){
    const resultado = calcularResultado();
    localStorage.setItem('resultado', resultado);
    window.location.href="resultado.Quiz.html";
}

function calcularResultado() {
    // Pontuações dos personagens
    let coringa = 0;
    let capitaoPatria = 0;
    let voldemort = 0;
    let eggman = 0;
    let darthVader = 0;

    // Coletar todas as respostas do fomulário
    let respostas = document.forms['formulario'].elements;

    // Iterar pelas perguntas e somatória dos pontos
    for (let i = 0; i < respostas.length; i++) {
        if (respostas[i].checked) {

            if (respostas[i].classList.contains('coringa')) {
                coringa++;
            } else if (respostas[i].classList.contains('capitao-patria')) {
                capitaoPatria++;
            } else if (respostas[i].classList.contains('voldemort')) {
                voldemort++;
            } else if (respostas[i].classList.contains('eggman')) {
                eggman++;
            } else if (respostas[i].classList.contains('darth-vader')) {
                darthVader++;
            }
        }
    }

    // Qual personagem possui mais pontos
    let maiorPontuacao = Math.max(coringa, capitaoPatria, voldemort, eggman, darthVader);
    let resultado = '';


    if (maiorPontuacao === coringa) {
        resultado = 'coringa';
    } else if (maiorPontuacao === capitaoPatria) {
        resultado = 'capitao-patria';
    } else if (maiorPontuacao === voldemort) {
        resultado = 'voldemort';
    } else if (maiorPontuacao === eggman) {
        resultado = 'eggman';
    } else if (maiorPontuacao === darthVader) {
        resultado = 'darth-vader';
    }

    // Verificação dos pontos no console
    console.log(maiorPontuacao);
    console.log("coringa " + coringa);
    console.log("capitão partria " + capitaoPatria)
    console.log("voldermort " + voldemort);
    console.log("eggman " + eggman);
    console.log("darth vader " + darthVader);

    // Mostrar resultado
    //alert(resultado);

    //exibirResultadoNovaAba(resultado);

    return resultado;
}