const { authJwt } = require("../middleware/authJwt");
const controller = require("../controllers/user.controller");

const router = express.Router();

module.exports = function(app) {
  router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  router.get("/api/all", controller.allAccess);

  router.get(
    "/api/dashboard",
    [authJwt.verifyToken],
    controller.dashboard
  );

  
};