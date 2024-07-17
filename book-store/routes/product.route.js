let express = require("express");
const { productController } = require("../controller");
const { upload } = require("../middleware/multer");
let route = express.Router();

route.get("/getProduct", productController.getProduct);
route.post(
  "/postProduct",
  upload.single("bookImage"),
  productController.postProduct
);
route.delete("/deleteProductzzz", productController.deleteProduct);
route.put("/updateProduct/:id", productController.updateProduct);

module.exports = route;
