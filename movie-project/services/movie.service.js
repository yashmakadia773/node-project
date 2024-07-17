const { movieSchema } = require("../models");

const getmovie = () => {
  return movieSchema.find();
};
const addmovie = (body) =>{
  return movieSchema.create(body);
}

const getmovieBymovieName = (movieName) =>{

return movieSchema.findOne({movieName});

}

const deletemovie =(id) =>{

  return movieSchema.findByIdAndDelete(id);

};

const updatemovie = (id, body) => {
  return movieSchema.findByIdAndUpdate(id, { $set: body });
};

module.exports = { getmovie, addmovie, deletemovie, updatemovie, getmovieBymovieName };
