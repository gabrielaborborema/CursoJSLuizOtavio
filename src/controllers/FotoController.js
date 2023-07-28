class FotoController {
  async index(req, res) {
    return res.json(req.file);
  }
}

export default new FotoController();
