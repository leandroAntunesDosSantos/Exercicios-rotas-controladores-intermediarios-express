const { imoveis } = require("../bancodedados");

const listarImoveis = (req, res) => {
  res.send(imoveis);
};

const imovelPorId = (req, res) => {
  const { id } = req.params;
  let resultado = imoveis;
  resultado = resultado.filter((imovel) => {
    return imovel.id === Number(id);
  });
  res.send(resultado);
};

module.exports = {
  listarImoveis,
  imovelPorId,
};
