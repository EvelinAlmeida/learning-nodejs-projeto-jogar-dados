function Jogo(dados = 5, lados = 6){
	console.log ('model: executar constructor de jogo');

	this.dados = dados;
	this.lados = lados;
	this.pontos = 0;
	this.n = 0;
}
Jogo.prototype.novoJogo = function(){
	console.long('model: novoJogo');
	this.pontos =0;
	this.n = 0;
}
Jogo.prototype.lancarUmDado = function(){
	var valorAleatorio = Math.random(); //no intervalo [0.1]
	// De [0,1) * 6 => [0,6)
	//Usando Math_Floor temos {0,1,2,3,4,5}
	// Somando uma unidade temos {1,2,3,4,5,6}
	var lado = 1 + Math.floor (valorAleatorio *this.lados);
	return lado;
}

Jogo.prototype.lancarDados = function(){
console.log ('model: lancarDados');
var lancamento = []
for (var i=0; i < this.dados; i++){
	lancamento[i] = this.lancarUmDado();
}
return lancamento;
}

Jogo.prototype.contarDados = function(lancamento){
	var contagem = Array(this.lados).fill(0);
 for (var i = 0; i < lancamento.length; i++){
 	var numero = lancamento [i];
 	contagem[numero-1] += 1;
 }
 return contagem;
}

const GENERALA = { jogo : 'Generala', pontos : 100}

jogo = new Jogo();
lancamento = jogo.lancarDados();
contagem = jogo.contarDados(lancamento);
console.log('dados sorteado:', lancamento);
console.log('contagem :',contagem );

module.exports.Jogo = Jogo;
