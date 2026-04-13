export function validarCampos(titulo, descricao) {
  if (!titulo || !descricao) {
    return "Preencha todos os campos";
  }

  return "";
}

export function validarNome(nome) {
  if (!nome) {
    return "Nome é obrigatório";
  }

  if (nome.length < 3) {
    return "Nome deve ter pelo menos 3 caracteres";
  }

  return "";
}