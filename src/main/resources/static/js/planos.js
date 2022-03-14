// ALTURA PADRÃO PARA O /todos
var alturaA = 230;
var alturaB = 110;
var alturaC = 290;

// CAPTURANDO ITENS DO HTML
var center = document.getElementById('center');
var background = document.getElementById('background');
var content = document.getElementById('content');
var body = document.getElementById('body');

// SETANDO ALTURA DA TABELA PARA 1 LINHA
center.style.height = alturaA + "px";
background.style.height = alturaA + "px";
content.style.height = alturaB + "px";

// CAPTURANDO QUANTIDADE DE LINHAS DA TABELA
var table = document.getElementById('tabela');
var totalRowCount = table.rows.length;

// SETANDO ALTURAS DE ACORDO COM QUANTIDADE DE LINHAS NA TABELA
if(totalRowCount != 1){
	console.log("Acessei")
	console.log(alturaA + (36 * totalRowCount) + "px");
	center.style.height = alturaA + (36 * totalRowCount) + "px";
	background.style.height = alturaA + (36 * totalRowCount) + "px";
	content.style.height = alturaB + (36 * totalRowCount) + "px";
	alturaC += (35*(totalRowCount));
	body.style.height = alturaC + "px";
}

function estadoBotao(){

	var inputCpf = document.getElementById('pesquisaInputCpf').value;
	var inputRg = document.getElementById('pesquisaInputRg').value;
	console.log(inputCpf);
	console.log(inputRg);

	if(inputCpf == "" || inputRg == ""){
		console.log("Acessado");
		document.getElementById('pesquisaBtn').disabled=true;
	}
	else{
		document.getElementById('pesquisaBtn').disabled=false;
	}
}

function disableWarning(){
	if(document.getElementById('warning')){
		document.getElementById('warning').style.display="none";
	}
}

