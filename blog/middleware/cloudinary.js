const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dv0gzgfcz",
  api_key: "367987572452686",
  api_secret: "eN732N9UqFITzOSyi60p0j2k-ys",
});

let uploadImage = (path) => {
  return cloudinary.uploader.upload(
    path,
    { public_id: "olympic_flag" },
    function (error, result) {
      return result;
    }
  );
};

module.exports = uploadImage;
