"use client";

import { useState } from "react";
import { ArrowUpRight, Info } from "lucide-react";
import { properties } from "@/data/properties";
import { supabase } from "@/lib/supabase";

/** Front-end only. Connect a server-side submission handler in the next stage. */
export default function EnquiryForm() {
  const [checked, setChecked] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

    if (loading) return;

  setLoading(true);
  setSuccessMessage("");

  const form = event.currentTarget;
const formData = new FormData(form);

  const enquiry = {
    name: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    purpose: formData.get("purpose"),
    property_id: formData.get("propertySlug"),
    message: formData.get("message"),
  };

  const { error } = await supabase
    .from("enquiries")
    .insert([enquiry]);

  if (error) {
    console.error("Supabase insert error:", error);
    return;
  }

    form.reset();
    setChecked(false);
    setSuccessMessage(
      "Thank you. Your enquiry has been submitted successfully."
    );

    setLoading(false);
}

  return (
    <form
      className="enquiry-form"
      aria-labelledby="enquiry-heading"
      aria-describedby="enquiry-availability"
      onChange={() => setChecked(false)}
      onSubmit={handleSubmit}
    >
      <div className="enquiry-heading">
        <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
        <h3 id="enquiry-heading">Tell us what you have in mind.</h3>
        <p>Share a little about your property journey. Fields marked * are required.</p>
      </div>

      <div className="enquiry-notice" id="enquiry-availability">
        <Info size={18} aria-hidden="true" />
        <p>Form preview — email delivery and database storage are not connected yet. Nothing you enter here will be sent or saved.</p>
      </div>

      <div className="enquiry-fields">
        <div className="enquiry-field">
          <label htmlFor="enquiry-name">Full name <span>*</span></label>
          <input id="fullName" name="fullName" autoComplete="name" placeholder="Your full name" required maxLength={100} pattern={".*\\S.*"} title="Please enter your name, not just spaces." />
        </div>
        <div className="enquiry-field">
          <label htmlFor="enquiry-email">Email address <span>*</span></label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} />
        </div>
        <div className="enquiry-field">
          <label htmlFor="enquiry-phone">Phone number <small>(optional)</small></label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+63" maxLength={30} />
        </div>
        <div className="enquiry-field">
          <label htmlFor="enquiry-purpose">I’m interested in <span>*</span></label>
          <select id="purpose" name="purpose" required defaultValue="">
            <option value="" disabled>Select an enquiry type</option>
            <option value="buy">Buying a home</option>
            <option value="rent">Renting a property</option>
            <option value="sell">Selling a property</option>
            <option value="invest">Property investment</option>
            <option value="general">General enquiry</option>
          </select>
        </div>
        <div className="enquiry-field enquiry-wide">
          <label htmlFor="enquiry-property">Property of interest <small>(optional)</small></label>
          <select id="enquiry-property" name="propertySlug" defaultValue="">
            <option value="">I’m still exploring</option>
            {properties.map((property) => <option key={property.slug} value={property.slug}>{property.title} — {property.location}</option>)}
          </select>
        </div>
        <div className="enquiry-field enquiry-wide">
          <label htmlFor="enquiry-message">Your message <span>*</span></label>
          <textarea id="message" name="message" rows={5} placeholder="Tell us about your preferred location, budget, timeline, or any questions you have." required maxLength={2000} onInput={(event) => {
            const field = event.currentTarget;
            field.setCustomValidity(field.value.trim() ? "" : "Please enter a message, not just spaces.");
          }} />
          <small>Up to 2,000 characters.</small>
        </div>
      </div>

      <label className="enquiry-consent">
        <input type="checkbox" name="consent" required />
        <span>I agree to be contacted about this enquiry using the details provided. <span aria-hidden="true">*</span></span>
      </label>
      <div className="enquiry-actions">
        <button className="button" type="submit" disabled={loading} >  {loading ? "Sending..." : "Check enquiry"} <ArrowUpRight size={17} aria-hidden="true" /></button>
        <span>Preview only. Sending will be enabled after setup.</span>
      </div>
      {successMessage && (
        <p style={{ marginTop: "12px", color: "#22c55e" }} className="enquiry-success">
         {successMessage}
       </p>
    )}

      <p className="enquiry-status" role="status" aria-live="polite" aria-atomic="true">
        {checked ? "Your form is complete. This enquiry has NOT been sent or saved. Email and database connections will be added next." : ""}
      </p>
    </form>

  );
}
