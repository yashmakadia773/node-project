const { ticketSchema } = require("../models");

const getticket = () => {
  return ticketSchema.find().populate("user").populate("movie");
};
const addticket = (body) =>{
  return ticketSchema.create(body);
}

const deleteticket =(id) =>{

  return ticketSchema.findByIdAndDelete(id);

};

const updateticket = (id, body) => {
  return ticketSchema.findByIdAndUpdate(id, { $set: body });
};

module.exports = { getticket, addticket, deleteticket, updateticket };
