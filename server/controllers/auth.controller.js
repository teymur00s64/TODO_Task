const { authService } = require("../services");

const singIn = async (req, res) => {
  const params = req.body;

  try {
    let result = await authService.login(params);
    res.json(result);
  } catch (err) {
    switch (err?.message) {
      case "username_not_found":
        res.status(404).json({ message: "Username is not found" });
        break;
      case "password_invalid":
        res.status(400).json({ message: "Password is not correct" });
        break;
      default:
        res.status(500).json({ message: err.message });
        break;
    }
  }
};

module.exports = {
  singIn,
};