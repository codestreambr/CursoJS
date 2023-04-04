function verificar() {
    var fano = document.querySelector('#ano');
    var idade = new Date().getFullYear() - fano.value;
    var res = document.querySelector('#res')

    res.innerHTML = `O ano atual é: ${idade}`;
}