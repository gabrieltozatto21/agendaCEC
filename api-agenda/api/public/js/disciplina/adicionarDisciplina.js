let form = document.querySelector('form')
let botaoAdiciona = document.querySelector('#concluir')
console.log(botaoAdiciona);

botaoAdiciona.addEventListener('click', (event) => {
    event.preventDefault();
    
    let disciplina = {
        nome: form.name.value,
        pilar: form.pilar.value,
        horas: form.horas.value,
        descricao: form.descricao.value,
    }

    let mensagensErro = document.querySelector('.mensagem')
    let erros = validaFormulario(disciplina);

    if(erros.length > 0){
        exibeErro(erros, mensagensErro);
        return;
    }
    form.submit();
    
})


function exibeErro(erros, divErro) {
    //verificar erro
    divErro.classList.add('removeErro')
    divErro.innerHTML = "";
    
    erros.forEach((erro) => {
      let itemLista = document.createElement("li");
      itemLista.innerHTML = erro;
      divErro.append(itemLista);
  
      setTimeout(() =>{
        divErro.innerHTML = "";
        divErro.style.display = ''
        divErro.classList.remove('removeErro')
      }, 3000)
  
    });
  }