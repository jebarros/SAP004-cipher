const cipher = {
  encode: function (displacement, mensagem) {


    if (typeof displacement !== 'number') {
      throw TypeError("Não confere")
    }

    if (typeof mensagem !== 'string') {
      throw TypeError ("Não confere")
    }


    let xuxu = "";
    let i;

    for (i = 0; i < mensagem.length; i++) {
      let letra = mensagem.charCodeAt(i);
      let ASC = ((letra - 65 + displacement) % 26) + 65;

      xuxu += String.fromCharCode(ASC);
    }

    return xuxu
  },


  decode: function (displacement, mensagem) {
    let jaca = "";
    let i

    for (i = 0; i < mensagem.length; i++) {
      let letra = mensagem.charCodeAt(i);
      let ASC = ((letra - 90 - displacement) % 26) + 90;
      jaca += String.fromCharCode(ASC)
    }

    return jaca

  }


};
export default cipher;
