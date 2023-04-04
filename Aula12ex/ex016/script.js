function contar() {
  var inicio =  document.querySelector('#inicio');
  var fim = document.querySelector('#fim');
  var passos = document.querySelector('#passos');
  var res = document.querySelector('#result');
  res.innerHTML = '';

  var cont = Number(inicio.value);
  var final = Number(fim.value);
  var step = Number(passos.value);

  if (cont < final) {
      for (cont;  cont <= final; cont += step) {
      res.innerHTML += `${cont} \u{1F449} `;
      }
  } else {
    for (cont;  cont >= final; cont -= step) {
      res.innerHTML += `${cont} \u{1F449} `;
    }
  }
      res.innerHTML += `${cont} \u{1F3C1} `
}
