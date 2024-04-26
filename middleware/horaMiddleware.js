const timeMiddleware = (req, res, next) => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  res.send(`
    <h1>Bienvenidos</h1>
    <p>La hora actual es: ${formattedTime}</p>
    <a href="/endroute">
      <button type="button">Entrar</button>
    </a>
  `);
  next();
};

module.exports = timeMiddleware;
