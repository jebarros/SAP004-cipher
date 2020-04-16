const cipher = {
  encode: function (displacement, message) {


    if (typeof displacement !== 'number') {
      throw TypeError("Não confere")
    }

    if (typeof message !== 'string') {
      throw TypeError ("Não confere")
    }


    let encode = "";
    let i;

    for (i = 0; i <message.length; i++) {
      let letter = message.charCodeAt(i);
      let ASC = ((letter - 65 + displacement) % 26) + 65;

      encode += String.fromCharCode(ASC);
    }

    return encode
  },


  decode: function (displacement, message) {

    if (typeof displacement !== 'number') {
      throw TypeError("Não confere")
    }

    if (typeof message !== 'string') {
      throw TypeError ("Não confere")
    }


    let decode = "";
    let i

    for (i = 0; i < message.length; i++) {
      let letter = message.charCodeAt(i);
      let ASC = ((letter - 90 - displacement) % 26) + 90;
      decode += String.fromCharCode(ASC)
    }

    return decode

  }


};
export default cipher;
