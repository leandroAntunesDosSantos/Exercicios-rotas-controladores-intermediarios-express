const somar = (req, res) => {
  const { num1, num2 } = req.query;
  let soma = parseInt(num1) + parseInt(num2);
  res.send(String(soma));
};
const subtrair = (req, res) => {
  const { num1, num2 } = req.query;
  let subtrair = parseInt(num1) - parseInt(num2);
  res.send(String(subtrair));
};

const multiplicar = (req, res) => {
  const { num1, num2 } = req.query;
  let multiplicar = parseInt(num1) * parseInt(num2);
  res.send(String(multiplicar));
};

const dividir = (req, res) => {
  const { num1, num2 } = req.query;
  let dividir = parseInt(num1) / parseInt(num2);
  res.send(String(dividir));
};
module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
};
