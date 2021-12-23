let btnExcluir = document.querySelectorAll('.remove')

btnExcluir.forEach(excluir => {
    excluir.addEventListener('click', (event) => {
        event.preventDefault();
        let deletar = document.querySelector('.delete');
        // console.log(deletar);
        deletar.style.display = 'flex';
                
        let tr = event.target.parentNode.parentNode.parentNode;
        let id = tr.querySelector('.id').textContent;

        let nome = tr.querySelector('.nome').textContent

        deletar.querySelector('.informacao').textContent = `Deseja excluir o professor ${nome} ?`
        let concluir = deletar.querySelector('.concluirDeletar')
        let cancelar = deletar.querySelector('.cancelarDeletar')

        concluir.addEventListener('click', () => window.location.href = `/professores/deletar/${id}`)
        cancelar.addEventListener('click', () => deletar.style.display = 'none')
        // window.location.href = `/professor/deletar/${id}`
        // console.log(tr, id);
    })
})