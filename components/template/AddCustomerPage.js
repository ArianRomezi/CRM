import React, { useState } from "react";
import Form from "../module/Form";
import { useRouter } from "next/router";

const AddCustomerPage = () => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    date: "",
    products: [],
  });

  const router = useRouter();
  const saveHandler = async () => {
    const res = await fetch("/api/customer", {
      method: "Post",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "aplication/json" },
    });
    const data = await res.json();
    if (data.status === "success") router.push("/");
  };
  const cancelHandler = () => {
    setForm({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      postalCode: "",
      date: "",
      products: [],
    });
    router.push("/");
  };

  return (
    <div className="customer-page">
      <h4>Add New Customer</h4>
      <Form form={from} setForm={setForm} />
      <div className="customer-page_buttons">
        <button className="first" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="second" onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddCustomerPage;
