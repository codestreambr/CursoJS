function carregar() {
	var msg = document.querySelector('#msg');
  	var imagem = document.querySelector('#imagem');
  	var data = new Date();
  	var hora = data.getHours();
	//hora = 19

  	msg.innerHTML = `A hora atual é ${hora} horas.`;

  	if (hora >= 0 && hora <= 11) {
		imagem.src = 'manha.png';
		document.body.style.background = '#c58b2e';
  	} else if (hora >= 12 && hora <= 18)  {
    	imagem.src='tarde.png';
		document.body.style.background = '#99583c';
  	} else {
    	imagem.src = 'noite.png';
		document.body.style.background = '#26102f';
  	}
}
