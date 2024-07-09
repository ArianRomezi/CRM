import { Schema, model, models } from "mongoose";

const customerShema = new Schema({
  name: {
    type: String,
    require: true,
    minLength: 1,
  },
  lastName: {
    type: String,
    require: true,
    minLength: 1,
  },
  email: {
    type: String,
    require: true,
    minLength: 1,
  },
  phone: String,
  address: String,
  postalCode: Number,
  date: Date,
  products: {
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const Customer = models.Customer || model("Customer", customerShema);

export default Customer;
