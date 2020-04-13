import cipher from './cipher.js';

const botaoCifra = document.getElementById("cifrar")
const botaoDecifra = document.getElementById("decifrar")

botaoCifra.addEventListener("click", function () {
  let mensagem = document.getElementById("mensagem").value;
  let deslocamento = document.getElementById("deslocamento").value;
  deslocamento = parseInt(deslocamento);
  mensagem = mensagem.toUpperCase();
  document.getElementById("result").value = cipher.encode(deslocamento, mensagem);


});

botaoDecifra.addEventListener("click", function() {
  let mensagem = document.getElementById("mensagem").value;
  let deslocamento = document.getElementById("deslocamento").value;
  deslocamento = parseInt(deslocamento);
  mensagem = mensagem.toUpperCase();
  document.getElementById("result").value = cipher.decode(deslocamento, mensagem);
});
