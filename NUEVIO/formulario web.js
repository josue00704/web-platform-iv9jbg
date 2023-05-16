//alert("Seguimos con JS");
//document.write('HTML+CSS+JS');
//console.log('Mantenimiento');

// var n1 = 9;
// var n2 = 19;

// var resultado = n1 + n2;
// document.write(resultado);

function suma() {
  var numero1 = parseFloat(document.getElementById('numero1').value);
  var numero2 = parseFloat(document.getElementById('numero2').value);
  var resultado = numero1 + numero2;
  document.getElementById('resultado').value = resultado;
}
