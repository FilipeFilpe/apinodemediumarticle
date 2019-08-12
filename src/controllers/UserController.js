const User = require('../models/User');

module.exports = {
    list(req, res){
        User.findAll()
            .then(users => {
                return res.json(users);
            })
            .catch(err => {
                return console.error("Erro na listagem: ", err);
            });
    },
    show(req, res){
        User.findAll({ where: { id: req.params.devId } })
            .then(user => {
                return res.json(user);
            })
            .catch(err => {
                return console.err("Erro na busca: ", err);
            });
    },
    create(req, res){
        const {nome, username, email} = req.body;
        User.create({
            nome,
            username,
            email
        })
        .then(user => {
            return res.json(user);
        })
        .catch(err => {
            return console.error('Erro na criação', err);
        });
    },
    update(req, res){
        const Sequelize = require('sequelize');
        const Op = Sequelize.Op
        const {id, nome, username, email} = req.body;
        User.update({
            nome,
            username,
            email
        }, {
            where: {
                id: { [Op.eq]: id }
            }
        })
        return res.json(req.body);        
    },
    delete(req, res){
        User.destroy({ where: { id: req.params.devId } })
            .then(() => {
                return res.json({msg: `Exclusão de item de ID ${req.params.devId}`});
            })
            .catch(err => {
                return console.err("Erro na exclusão: ", err);
            });
    },
}