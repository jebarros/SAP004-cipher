const cipher = {
  encode: function (deslocamento, mensagem) {


    if (typeof deslocamento !== 'number') {
      throw TypeError("Não confere")
    }

    if (typeof mensagem !== 'string') {
      throw TypeError ("Não confere")
    }


    let xuxu = "";
    let i;

    for (i = 0; i < mensagem.length; i++) {
      let letra = mensagem.charCodeAt(i);
      let ASC = ((letra - 65 + deslocamento) % 26) + 65;

      xuxu += String.fromCharCode(ASC);
    }

    return xuxu
  },


  decode: function (deslocamento, mensagem) {
    let jaca = "";
    let i

    for (i = 0; i < mensagem.length; i++) {
      let letra = mensagem.charCodeAt(i);
      let ASC = ((letra - 90 - deslocamento) % 26) + 90;
      jaca += String.fromCharCode(ASC)
    }

    return jaca

  }


};
export default cipher;
