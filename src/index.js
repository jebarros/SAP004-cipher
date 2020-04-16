import cipher from './cipher.js';

const botaoCifra = document.getElementById("cifrar")
const botaoDecifra = document.getElementById("decifrar")

botaoCifra.addEventListener("click", function (event) {
  event.preventDefault();
  let mensagem = document.getElementById("mensagem").value;
  let displacement = document.getElementById("displacement").value;
  displacement = parseInt(displacement);
  mensagem = mensagem.toUpperCase();
  document.getElementById("result").value = cipher.encode(displacement, mensagem);
  


});

botaoDecifra.addEventListener("click", function(event) {
  event.preventDefault();
  let mensagem = document.getElementById("mensagem").value;
  let displacement = document.getElementById("displacement").value;
  displacement = parseInt(displacement);
  mensagem = mensagem.toUpperCase();
  document.getElementById("result").value = cipher.decode(displacement, mensagem);
});
