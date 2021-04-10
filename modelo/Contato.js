class Contato {
  constructor(id, nome, telefone, image = null) {
    this.id = id;
    this.nome = nome;
    this.telefone = telefone;
    this.image = this.validateImage(image);
  }

  validateImage(image) {
    if(image == "") {
      return null;
    }
    return image;
  }
}

export default Contato;