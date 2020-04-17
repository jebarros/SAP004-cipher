import cipher from './cipher.js';

const encryptbutton = document.getElementById("encrypt")
const decipherbutton = document.getElementById("decipher")


encryptbutton.addEventListener("click", function (event) {
  event.preventDefault()
  let message = document.getElementById("message").value;
  let displacement = document.getElementById("displacement").value;
  displacement = parseInt(displacement);
  message = message.toUpperCase();
  document.getElementById("result").value = cipher.encode(displacement, message);
  


});

decipherbutton.addEventListener("click", function(event) {
  event.preventDefault();
  let message = document.getElementById("message").value;
  let displacement = document.getElementById("displacement").value;
  displacement = parseInt(displacement);
  message = message.toUpperCase();
  document.getElementById("result").value = cipher.decode(displacement, message);
});
