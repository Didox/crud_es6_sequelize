require("dotenv/config");

import Cliente from "../models/Cliente";

class ClienteController {
  async store(req, res) {
    const clienteExiste = await Cliente.findOne({ where: { email: email } });

    if (clienteExiste) {
      return res.status(401).json({ error: "E-mail já foi cadastrado" });
    }

    const cliente = await Cliente.create(req.body);

    return res
      .status(200)
      .json({ message: "Cliente cadastrado com sucesso", cliente });
  }

  async index(req, res) {
    const cliente = await Cliente.findAll();

    if (!cliente) {
      return res.status(401).json({ error: "Nenhum cliente foi encontrado. " });
    }

    return res.status(200).json(cliente);
  }

  async update(req, res) {
    const cliente = await Cliente.findByPk(req.params.id);

    if (!cliente) {
      return res.status(401).json({ error: "usuário não encontrado " });
    }

    cliente.update({
      name: req.body.name,
      email: req.body.email,
      cpf: req.body.cpf,
      telefone: req.body.telefone,
    });

    return res
      .status(200)
      .json({ message: "Usuário alterado com sucesso", cliente });
  }

  async destroy(req, res) {
    const cliente = await Cliente.findByPk(req.params.id);

    if (!cliente) {
      return res.status(401).json({ error: "usuário não encontrado " });
    }

    await Cliente.destroy({ where: { id: req.params.id } });

    return res
      .status(200)
      .json({ message: "usuário foi deletado com sucesso" });
  }
}

export default new ClienteController();
