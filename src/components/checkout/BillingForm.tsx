"use client";

import { useState } from "react";

export default function BillingForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    notes: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="rounded-[35px] bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,.08)]">
      <h2 className="mb-8 text-3xl font-black">
        Billing Details
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <input
          name="firstName"
          placeholder="First Name *"
          value={form.firstName}
          onChange={handleChange}
          className="rounded-full border px-6 py-4 outline-none focus:border-[#FF6B00]"
        />

        <input
          name="lastName"
          placeholder="Last Name *"
          value={form.lastName}
          onChange={handleChange}
          className="rounded-full border px-6 py-4 outline-none focus:border-[#FF6B00]"
        />

        <input
          name="company"
          placeholder="Company Name"
          value={form.company}
          onChange={handleChange}
          className="rounded-full border px-6 py-4 outline-none focus:border-[#FF6B00]"
        />

        <select
          name="country"
          value={form.country}
          onChange={handleChange}
          className="rounded-full border px-6 py-4 outline-none focus:border-[#FF6B00]"
        >
          <option value="">
            Select Country
          </option>

          <option>Pakistan</option>

          <option>United States</option>

          <option>United Kingdom</option>

          <option>Canada</option>
        </select>

        <input
          name="address"
          placeholder="Street Address *"
          value={form.address}
          onChange={handleChange}
          className="md:col-span-2 rounded-full border px-6 py-4 outline-none focus:border-[#FF6B00]"
        />

        <input
          name="city"
          placeholder="Town / City *"
          value={form.city}
          onChange={handleChange}
          className="rounded-full border px-6 py-4 outline-none focus:border-[#FF6B00]"
        />

        <input
          name="state"
          placeholder="State"
          value={form.state}
          onChange={handleChange}
          className="rounded-full border px-6 py-4 outline-none focus:border-[#FF6B00]"
        />

        <input
          name="zip"
          placeholder="ZIP Code"
          value={form.zip}
          onChange={handleChange}
          className="rounded-full border px-6 py-4 outline-none focus:border-[#FF6B00]"
        />

        <input
          name="phone"
          placeholder="Phone *"
          value={form.phone}
          onChange={handleChange}
          className="rounded-full border px-6 py-4 outline-none focus:border-[#FF6B00]"
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address *"
          value={form.email}
          onChange={handleChange}
          className="md:col-span-2 rounded-full border px-6 py-4 outline-none focus:border-[#FF6B00]"
        />

        <textarea
          name="notes"
          placeholder="Order Notes"
          rows={5}
          value={form.notes}
          onChange={handleChange}
          className="md:col-span-2 rounded-[30px] border p-6 outline-none focus:border-[#FF6B00]"
        />
      </div>
    </div>
  );
}