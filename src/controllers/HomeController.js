import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Gabriela',
      sobrenome: 'Borborema',
      email: 'gabrielaborborema@unifor.br',
      idade: 112,
      peso: 300,
      altura: 2.5,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
