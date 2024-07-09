import connectDB from "../../../utils/connectDB";
import Customer from "../../../models/Customer";

export default async function (req, res) {
  try {
    await connectDB();
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", massage: "error in connecting to DB" });
    return;
  }

  if (req.method === "PATCH") {
    const id = req.query.customerId;
    const data = req.body.data;
    try {
      const customer = await Customer.findOne({ _id: id });
      customer.name = data.name;
      customer.lastName = data.lastName;
      customer.email = data.email;
      customer.phone = data.phone;
      customer.address = data.address;
      customer.postalCode = data.postalCode;
      customer.date = data.date;
      customer.products = data.products;
      customer.updatedAt = Date.now();
      Customer.save();
      res.status(200).json({ status: "success", data: customer });
    } catch (error) {
      res
        .status(500)
        .json({ status: "failed", massage: "error in connecting to DB" });
      return;
    }
  }
}
