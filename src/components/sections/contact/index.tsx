"use client";

import EnvelopeOpenTextIcon from "@/components/icon/envelope-open-text-icon";
import {
  CONTACT_BIO,
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_PHONE,
  PROFILE_NAME,
  PROFILE_TITLE,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { Handshake } from "lucide-react";
import Link from "next/link";
import React, { FormEvent, useState } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

const fieldLabelClass =
  "mb-2.5 block text-xs font-medium tracking-[0.18em] text-zinc-400 sm:text-sm";

const inputClassName =
  "w-full rounded-md border border-zinc-800 bg-zinc-950 px-4 py-4 text-base text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-zinc-500 sm:text-lg";

const socialBtnClass =
  "inline-flex size-14 items-center justify-center rounded-md bg-zinc-900 text-zinc-200 shadow-sm transition-colors hover:bg-zinc-800 hover:text-primary";

const ContactSection = () => {
  const [form, setForm] = useState<FormState>(initialForm);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      "",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(form.subject || "Portfolio contact")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="bg-background py-16 sm:py-24">
      <div className="container">
        <div className="flex flex-col items-center gap-12 lg:gap-16">
          <h2 className="text-center text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Contact With Me
          </h2>

          <div className="grid w-full items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
            {/* Left profile card */}
            <aside className="flex flex-col rounded-2xl bg-zinc-900/90 p-6 shadow-xl shadow-black/20 sm:p-8 lg:col-span-5 dark:bg-[#1e2125]">
              <div className="mb-7 flex size-[96px] items-center justify-center rounded-lg bg-white shadow-sm">
                <Handshake
                  className="size-14 text-[#1e3a5f]"
                  strokeWidth={1.75}
                />
              </div>

              <h3 className="text-3xl font-bold text-white sm:text-4xl">
                {PROFILE_NAME}
              </h3>
              <p className="mt-2 text-base text-zinc-400 sm:text-lg">
                {PROFILE_TITLE}
              </p>

              <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg sm:leading-8">
                {CONTACT_BIO}
              </p>

              <div className="mt-8 space-y-3 text-base sm:text-lg">
                <p className="text-zinc-300">
                  <span className="tracking-wide text-zinc-500">
                    Location:{" "}
                  </span>
                  <span className="text-zinc-200">{CONTACT_LOCATION}</span>
                </p>
                <p className="text-zinc-300">
                  <span className="tracking-wide text-zinc-500">
                    Phone:{" "}
                  </span>
                  <Link
                    href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, "")}`}
                    className="text-zinc-200 transition-colors hover:text-primary"
                  >
                    {CONTACT_PHONE}
                  </Link>
                </p>
                <p className="break-all text-zinc-300">
                  <span className="tracking-wide text-zinc-500">
                    Email:{" "}
                  </span>
                  <Link
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-zinc-200 transition-colors hover:text-primary"
                  >
                    {CONTACT_EMAIL}
                  </Link>
                </p>
              </div>

              <div className="mt-auto pt-10">
                <p className="mb-4 text-xs font-medium tracking-[0.2em] text-zinc-500 sm:text-sm">
                  Find Me In
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`mailto:${CONTACT_EMAIL}`}
                    aria-label="Email"
                    className={socialBtnClass}
                  >
                    <EnvelopeOpenTextIcon width={20} height={20} />
                  </Link>
                  {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                    <Link
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={socialBtnClass}
                    >
                      <Icon width={20} height={20} />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            {/* Right contact form */}
            <div className="rounded-2xl bg-zinc-900/90 p-6 shadow-xl shadow-black/20 sm:p-8 lg:col-span-7 dark:bg-[#1e2125]">
              <form className="flex h-full flex-col gap-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className={fieldLabelClass}>Your Name</span>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className={inputClassName}
                    />
                  </label>
                  <label className="block">
                    <span className={fieldLabelClass}>Phone Number</span>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className={inputClassName}
                    />
                  </label>
                </div>

                <label className="block">
                  <span className={fieldLabelClass}>Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className={inputClassName}
                  />
                </label>

                <label className="block">
                  <span className={fieldLabelClass}>Subject</span>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={(e) => updateField("subject", e.target.value)}
                    className={inputClassName}
                  />
                </label>

                <label className="flex flex-1 flex-col">
                  <span className={fieldLabelClass}>Message</span>
                  <textarea
                    name="message"
                    required
                    rows={7}
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    className={`${inputClassName} min-h-[160px] flex-1 resize-y`}
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-md border border-zinc-700 bg-zinc-800 px-6 py-5 text-base font-medium tracking-[0.16em] text-zinc-200 transition-colors hover:bg-zinc-700 hover:text-white"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
