var hora = new Date();
var hora_atual = hora.getHours();
console.log(`A hora atual é: ${hora_atual}h`);

if (hora_atual < 12) {
  console.log("Bom dia");
} else if (hora_atual < 18) {
  console.log('Boa tarde');
} else {
  console.log('Boa noite');
}