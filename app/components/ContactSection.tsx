"use client";

import { useState } from "react";
import { Sparkles, Mail, Phone, MapPin, Send, Clock } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    setSending(true);

    try {
      // Make a POST request to your new API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form), // Send the state object as JSON
      });

      if (response.ok) {
        setSent(true);
        // Optional: clear the form here instead of waiting for them to click "Send another"
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error("Failed to send message");
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setSending(false);
    }
  }

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-white/30 focus:bg-white/[0.07] transition-all duration-200";

  return (
    <section id="contact" className="relative bg-black px-6 py-24 md:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-white/10" />

      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/50 text-sm mb-6">
            
            Let's collaborate
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-white/40 text-base md:text-lg font-light max-w-md mx-auto">
            Have a project in mind? I'd love to hear about it. Let's build
            something great together.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-5">
          {/* Form card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 flex flex-col gap-5">
            {sent ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-2xl">
                  ✓
                </div>
                <h3 className="text-white font-semibold text-lg">Message sent!</h3>
                <p className="text-white/40 text-sm">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-2 text-white/30 hover:text-white/60 text-sm transition-colors duration-200"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-white/50 text-xs font-medium">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white/50 text-xs font-medium">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label className="text-white/50 text-xs font-medium">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={inputClass}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-white/50 text-xs font-medium">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project, timeline, and budget..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={sending || !form.name || !form.email || !form.message}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white text-black text-sm font-semibold tracking-wide hover:bg-white/90 active:scale-[0.98] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send size={14} />
                    </>
                  )}
                </button>
              </>
            )}
          </div>

          {/* Contact info card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 flex flex-col gap-8">
            <div>
              <h3 className="text-white font-semibold text-base mb-5">
                Contact Information
              </h3>
              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "mari3lpalacio@gmail.com",
                    href: "mailto:mari3lpalacio@gmail.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+64 20 4013 6857",
                    href: "tel:+642040136857",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Available for remote work worldwide",
                    href: null,
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 shrink-0">
                      <Icon size={15} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs mb-0.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-white/70 text-sm hover:text-white transition-colors duration-200"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-white/70 text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response time box */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-white/60 text-sm font-semibold">
                <Clock size={13} />
                Response Time
              </div>
              <p className="text-white/35 text-xs leading-relaxed">
                I typically respond within 24 hours. For urgent inquiries,
                please include "URGENT" in your subject line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}