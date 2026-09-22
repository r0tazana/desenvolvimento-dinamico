export function validarNome(nome: string): string | null {
  const limpo = nome.trim();

  if (limpo.length < 3) {
    return 'O nome deve ter ao menos 3 caracteres.';
  }
  if (/\d/.test(limpo)) {
    return 'O nome não pode conter números.';
  }
  return null;
}


  
export function validarEmail(email: string): string | null {
  if (email.trim() === '') {
    return 'O e-mail é obrigatório.';
  }

  if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email)) {
    return 'O e-mail deve estar em um formato válido.';
  }

  return null;
}

export function validarNumero(numero: string): string | null {
  
  if (numero.length < 10) {
    return 'Insira o DDD do telefone.';
  }
  return null;
}


const CURSOS_VALIDOS = ['Computação', 'Engenharia', 'Medicina', 'Direito'];

export function validarCurso(curso: string): string | null {
  if (!CURSOS_VALIDOS.includes(curso)) {
    return 'O curso informado não é válido.';
  }

  return null;
}
