export function validate(condicao: boolean, mensagem: string) {
  if (condicao) {
    throw new Error(mensagem)
  }
}
