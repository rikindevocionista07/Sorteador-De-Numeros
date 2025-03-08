function sortear() {
    // Obter a quantidade de números a serem sorteados
    let quantidade = parseInt(document.getElementById('quantidade').value);
    // Obter o intervalo mínimo
    let de = parseInt(document.getElementById('de').value);
    // Obter o intervalo máximo
    let ate = parseInt(document.getElementById('ate').value);
  
    // Array para armazenar os números sorteados
    let sorteados = [];
    // Variável para armazenar o número sorteado
    let numero;
  //Caso o usuario digite um numero maior no campo "do numero " do que "ate o numero "
    if (de > ate){
    alert('Insira um numero menor do que o número que esta no campo ate o número')
    function reiniciar(){
      document.getElementById('quantidade').value = '';
      document.getElementById('de').value = '';
      document.getElementById('ate').value = '';
  document.getElementById('resultado').innerHTML = ' <label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
   
  alterarStatusBotao();
  }
  }
  
  if (quantidade > (ate - de + 1)) {
    alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
    return;
  }
    
    // Loop para sortear a quantidade de números desejada
    for (let i = 0; i < quantidade; i++) {
      numero = obterNumeroAleatorio(de, ate);
  
      while (sorteados.includes(numero)) {
        numero = obterNumeroAleatorio(de, ate);
        alert('Tentando obter número inédito');
      } 
      //Adicionar numero na (array)
      sorteados.push(numero);
    }
    // Exibir os números sorteados na página
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    // Alterar o status do botão de reiniciar
    alterarStatusBotao();
  }
  
  // Função para gerar um número aleatório entre min e max
  function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Função para alterar o status do botão de reiniciar
  function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    // Se o botão estiver desabilitado, habilitá-lo
    if (botao.classList.contains('container__botao-desabilitado')) {
      botao.classList.remove('container__botao-desabilitado');
      botao.classList.add('container__botao');
    } else {
      // Se o botão estiver habilitado, desabilitá-lo
      botao.classList.remove('container__botao');
      botao.classList.add('container__botao-desabilitado');
    }
  }
  
  //O jogo volta ao status inicial
  function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
document.getElementById('resultado').innerHTML = ' <label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
 
alterarStatusBotao();
}