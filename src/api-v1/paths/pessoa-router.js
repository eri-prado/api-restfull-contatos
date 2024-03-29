import express from 'express';
import pessoaModel from '../models/pessoa-model';
pessoaModel;

const pessoaRouter = express.Router();

pessoaRouter.get('/', listaPessoas);
pessoaRouter.post('/', inserePessoas);

function listaPessoas(req, res, next) {
  pessoaModel.lista({}, (err, lista) => {
    if (!err) {
      res.json(lista);
    } else {
      res.status(400).send(err.message);
    }
  });
}

function inserePessoas(req, res, next) {
  pessoaModel.insere(req.body, (err, objNovo) => {
    if (!err) {
      res.json(objNovo);
    } else {
      res.status(400).send(err.message);
    }
  });
}

export default pessoaRouter;
