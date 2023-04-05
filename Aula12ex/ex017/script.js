function calcular() {
  let numero = document.querySelector('#tabuada');
  let res = document.querySelector('#res');
  let cont = Number(numero.value);
  if (numero.value.length == 0) {
    alert('O campo número não pode ser vazio');
  } else {
    res.innerHTML = '';
    for (let i = 0; i <= 10; i++) {
      let option = document.createElement("option");
      option.text = `${cont} x ${i} = ${cont * i}`;
      option.tab = `tab${i}`;
      res.appendChild(option);
    }
  }

}
