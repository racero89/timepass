const timeMiddleware = (req, res, next) => {
  const now = new Date();
  const hours = now.getDate();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  req.time = formattedTime;
  next();
};

module.exports = timeMiddleware;
