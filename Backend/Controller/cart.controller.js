const { CartModel } = require("../Model/cart.model");

//*--------this is to control the get cartproduct routes----------//
const getCartProducts = async (req, res) => {
  try {
    const cartProducts = await CartModel.find();
    res.status(200).send(cartProducts);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

//*--------this is to control the add cartproduct routes----------//
const addCartProduct = async (req, res) => {
  try {
    const data = req.body;
    const product = new CartModel(data);
    await product.save();
    res.status(200).send({ message: "A new Cart product has been added" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

//*--------this is to control the update cartproduct routes----------//
const updateCartProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    await CartModel.findByIdAndUpdate({ _id: id }, data);
    res.status(200).send({ message: "Cart product has been updated" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

//*--------this is to control the delete cartproduct routes----------//
const deleteCartProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await CartModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ message: "Cart product has been deleted" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  getCartProducts,
  addCartProduct,
  updateCartProduct,
  deleteCartProduct,
};
