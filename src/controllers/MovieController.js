
module.exports = {

    list(req, res){
        return res.send('Lista de filmes!');
    },

    show(req, res){ return `Detalhe do filme de ID ${id}`; },
    create(req, res){ return "Filme adicionado a lista" },
    update(req, res){ return `Filme de ID ${id} atualizado`; },
    delete(req, res){ return `Filme de ID ${id} deletado!`; },
}