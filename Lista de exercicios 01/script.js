//exercicio 1
const azulButton = document.querySelector("#azul");
const vermelhoButton = document.querySelector("#vermelho");
const verdeButton = document.querySelector("#verde");
const amareloButton = document.querySelector("#amarelo");

azulButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
  });

vermelhoButton.addEventListener("click", function(){
    document.body.style.backgroundColor = "red";
});

verdeButton.addEventListener("click", function(){
    document.body.style.backgroundColor = "green";
});

amareloButton.addEventListener("click", function(){
    document.body.style.backgroundColor = "yellow";
});
//-------------------------------------------------------------
//exercicio 2
const azulLink = document.getElementById('azul2');
const vermelhoLink = document.getElementById('vermelho2');
const verdeLink = document.getElementById('verde2');
const amareloLink = document.getElementById('amarelo2');

azulLink.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'blue';
});

vermelhoLink.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'red';
});
verdeLink.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'green';
});
amareloLink.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'yellow';
});
//-------------------------------------------------------------
//exercicio 3

const coresSelect = document.getElementById('cores');

coresSelect.addEventListener('change', () => {
  const corSelecionada = coresSelect.value;

  if (corSelecionada === 'azul') {
    document.body.style.backgroundColor = 'blue';
  } else if (corSelecionada === 'vermelho') {
    document.body.style.backgroundColor = 'red';
  } else if (corSelecionada === 'verde') {
    document.body.style.backgroundColor = 'green';
  } else if (corSelecionada === 'amarelo') {
    document.body.style.backgroundColor = 'yellow';
  } else {
    document.body.style.backgroundColor = '';
  }
});
//-------------------------------------------------------------
//exercicio 4

const showBtn = document.getElementById ('showbtn');
const conteudoParagrafo = document.getElementById('conteudo');

showBtn.addEventListener('click', () => {
    if(conteudoParagrafo.style.display === 'none'){
        conteudoParagrafo.style.display = 'block';
    }
    else{
        conteudoParagrafo.style.display = 'none';
    }
});
//-------------------------------------------------------------
//exercicio 5

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const submitBtn = document.getElementById('submit-btn');

function checkSelected() {
  let count = 0;
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      count++;
    }
  });
  if (count >= 2) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', checkSelected);
});
//-------------------------------------------------------------
//exercicio 6

const paragrafo = document.getElementById('meu-paragrafo');
const botaoFontePreto = document.getElementById('botao-fonte-preto');
const botaoFonteVermelho = document.getElementById('botao-fonte-branco');
const botaoFundoBranco = document.getElementById('botao-fundo-branco');
const botaoFundoAzul = document.getElementById('botao-fundo-preto');

botaoFontePreto.addEventListener('click', () => {
  paragrafo.style.color = 'black';
});

botaoFonteVermelho.addEventListener('click', () => {
  paragrafo.style.color = 'white';
});

botaoFundoBranco.addEventListener('click', () => {
  paragrafo.style.backgroundColor = 'white';
});

botaoFundoAzul.addEventListener('click', () => {
  paragrafo.style.backgroundColor = 'black';
});
//-------------------------------------------------------------
//exercicio 7

const botaoFonteMais = document.getElementById('botao-fonte-mais');
const botaoFonteMenos = document.getElementById('botao-fonte-menos');


botaoFonteMais.addEventListener('click', () => {
    tamanhoFonte += 2;
    paragrafo.style.fontSize = `${tamanhoFonte}px`;
  });
  let tamanhoFonte = 16;
  
  botaoFonteMenos.addEventListener('click', () => {
    tamanhoFonte -= 2;
    paragrafo.style.fontSize = `${tamanhoFonte}px`;
  });
  //-------------------------------------------------------------
//exercicio 8
        let texto = document.getElementById("meu-paragrafo");
		let btnMaiusculo = document.getElementById("btn-maiusculo");
		let btnMinusculo = document.getElementById("btn-minusculo");

		btnMaiusculo.addEventListener("click", function() {
			texto.textContent = texto.textContent.toUpperCase();
		});

		btnMinusculo.addEventListener("click", function(){
            texto.textContent = texto.textContent.toLocaleLowerCase();
        })
//-------------------------------------------------------------
//exercicio 9

const senhaInput = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmar-senha");
const subBtn = document.getElementById("submit-btn2");
const erroSenha = document.getElementById("erro-senha");

confirmarSenha.addEventListener("input", () => {
  if (senhaInput.value === confirmarSenha.value) {
    subBtn.removeAttribute("disabled");
    erroSenha.style.display = "none";
  } else {
    subBtn.setAttribute("disabled", true);
    erroSenha.style.display = "block";
  }
});
//-------------------------------------------------------------
//exercicio 10

const pessoaFisica = document.getElementById("pessoa-fisica");
const pessoaJuridica = document.getElementById("pessoa-juridica");
const cpf = document.getElementById("cpf");
const cnpj = document.getElementById("cnpj");
const dataNascimento = document.getElementById("data-nascimento");

pessoaFisica.addEventListener("click", () => {
  cpf.disabled = false;
  cnpj.disabled = true;
  dataNascimento.disabled = false;
});

pessoaJuridica.addEventListener("click", () => {
  cnpj.disabled = false;
  cpf.disabled = true;
  dataNascimento.disabled = true;
});

cpf.addEventListener("input", () => {
  cpf.value = cpf.value.replace(/\D/g, "");
});

cep.addEventListener("input", () => {
  cep.value = cep.value.replace(/\D/g, "");
});




