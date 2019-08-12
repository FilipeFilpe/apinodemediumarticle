const Movie = require('../models/Movie');

module.exports = {
    list(req, res){
        Movie.findAll()
            .then(movies => {
                return res.json(movies);
            })
            .catch(err => {
                return console.err("Erro na listagem: ", err);
            });
    },
    show(req, res){
        Movie.findAll({ where: { id: req.params.devId } })
            .then(movie => {
                return res.json(movie);
            })
            .catch(err => {
                return console.err("Erro na busca: ", err);
            });
    },
    create(req, res){
        const {title, poster, overview} = req.body;
        Movie.create({
            title,
            poster,
            overview
        });
        return res.json(req.body);
    },
    update(req, res){
        const Sequelize = require('sequelize');
        const Op = Sequelize.Op
        const {id, title, poster, overview} = req.body;
        Movie.update({
            title,
            poster,
            overview
        }, {
            where: {
                id: { [Op.eq]: id }
            }
        })
        return res.json(req.body);        
    },
    delete(req, res){
        Movie.destroy({ where: { id: req.params.devId } })
            .then(() => {
                return res.json({msg: `Exclusão de item de ID ${req.params.devId}`});
            })
            .catch(err => {
                return console.err("Erro na exclusão: ", err);
            });
    },
}