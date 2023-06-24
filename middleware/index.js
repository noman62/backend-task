const jwt = require('jsonwebtoken');

// Middleware for authenticating the JWT token
const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.userId = user.userId;
      req.role =user.role;
      req.user=user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Middleware for authorizing roles
const authorizeRoles = (roles) => {
  return (req, res, next) => {
    if (req.user.role !== roles) {
      return res.status(403).json({ message: 'noman' });
    }

    next();
  };
};

module.exports = authenticateToken;