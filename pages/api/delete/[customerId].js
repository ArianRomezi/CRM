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
  if (req.method === "DELETE") {
    const id = req.query.customerId;
    try {
      await Customer.deleteOne({ _id: id });
      res.status(200).json({ status: "success", massage: "Data Deleted" });
    } catch (error) {
      res
        .status(500)
        .json({ status: "failed", massage: "Error in deleting data from DB" });
    }
  }
}
