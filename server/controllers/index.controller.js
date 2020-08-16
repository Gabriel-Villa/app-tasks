const indexController = {};

indexController.indexPage = (req, res) => {
  res.render("index");
};

module.exports = indexController;
