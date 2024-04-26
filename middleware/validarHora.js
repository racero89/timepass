const validarHora = (req, res, next) => {
  const horaActual = new Date().getHours();
  if (horaActual >= 12 && horaActual < 24) {
    res.send("Aun no es la hoara,espera las 20:00");
  } else {
    res.status(403).send("Aún no son las 12 de la mañana");
  }
  next();
};

module.exports = validarHora;
