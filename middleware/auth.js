const authenticateAdmin = (req, res, next) => {
  if (req.session.user) {
    next();//next will call the next function homeRouter given in app.js
  } else {
    res.render("auth/login");
  }
};

export {authenticateAdmin}