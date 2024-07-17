const { ticketService } = require("../services");

const getticket = async (req, res) => {
  const ticket = await ticketService.getticket();

  console.log(ticket);

  res.status(200).json({
    message: "Movie Ticket Generate Successfully",
    data: ticket,
  });
};

//post method

const addticket = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    // const ticketExist = await ticketService.getticketByFirstName(body.firstName);

    const ticket = await ticketService.addticket(body);

    res.status(201).json({
      message: "Movie Ticket Created Success",
      data: ticket,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// delete method

const deleteticket = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const ticket = await ticketService.deleteticket(id);
    if (!ticket) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "Movie Ticket Deleted Successfully",
      data: ticket,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const updateticket = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    console.log(id, body);

    // const ticketExist = await ticketService.getticketByFirstName(body.firstName);

    // if (ticketExist) {
    //   throw new Error("ticket already existed");
    // }

    const ticket = await ticketService.updateticket(id, body); 

    res.status(200).json({
      message: "Movie Ticket Update Successfully",
      data: ticket,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = { getticket, addticket, deleteticket, updateticket };
