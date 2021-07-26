module.exports = (app) => {
  const repository = app.repositories.parameters;
  return {
    async list(req, res) {
      try {
        res.json(await repository.list(
          req.body
        ));
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    },
  };
};
