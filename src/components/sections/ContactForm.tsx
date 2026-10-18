"use client";

import { useRef, useState, type SubmitEvent } from "react";

import { emailAddress } from "@/data/links";

// There is no backend: the form builds a mailto link and opens the visitor's
// email app with the message filled in. Nothing is sent from this site, and
// the copy never claims otherwise.

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

// Long mailto URLs can fail in some email apps, so the message is capped.
const MESSAGE_MAX = 1500;

function validate(values: Record<Field, string>): Errors {
  const errors: Errors = {};
  if (!values.name) errors.name = "Enter your name.";
  else if (values.name.length > 100) errors.name = "Use at most 100 characters.";

  if (!values.email) errors.email = "Enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Enter an email address like name@example.com.";

  if (!values.message) errors.message = "Write a message.";
  else if (values.message.length > MESSAGE_MAX)
    errors.message = `Use at most ${MESSAGE_MAX} characters.`;

  return errors;
}

const inputClass =
  "mt-2 block w-full rounded-sm border border-text-subtle bg-background px-3 py-2.5 text-base text-text placeholder:text-text-subtle transition-colors duration-fast hover:border-text-muted aria-[invalid=true]:border-error";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setOpened(false);

    const firstInvalid = (Object.keys(nextErrors) as Field[])[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const subject = `Portfolio contact from ${values.name}`;
    const body = `${values.message}\n\n${values.name}\n${values.email}`;
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  function fieldProps(field: Field) {
    return {
      id: `contact-${field}`,
      name: field,
      "aria-invalid": errors[field] ? true : undefined,
      "aria-describedby": errors[field] ? `contact-${field}-error` : undefined,
    };
  }

  // A render helper, not a component, so it is not recreated as a new type each render.
  function fieldError(field: Field) {
    if (!errors[field]) return null;
    return (
      <p id={`contact-${field}-error`} className="mt-2 text-sm text-error">
        {errors[field]}
      </p>
    );
  }

  return (
    <form ref={formRef} noValidate onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-sm font-medium text-text">
            Name
          </label>
          <input {...fieldProps("name")} type="text" autoComplete="name" className={inputClass} />
          {fieldError("name")}
        </div>

        <div>
          <label htmlFor="contact-email" className="text-sm font-medium text-text">
            Your email
          </label>
          <input
            {...fieldProps("email")}
            type="email"
            autoComplete="email"
            className={inputClass}
          />
          {fieldError("email")}
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="text-sm font-medium text-text">
          Message
        </label>
        <textarea
          {...fieldProps("message")}
          rows={6}
          maxLength={MESSAGE_MAX}
          className={`${inputClass} resize-y`}
        />
        {fieldError("message")}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-sm bg-text px-5 text-sm font-medium text-background transition-colors duration-fast hover:bg-white"
        >
          Open in my email app
          <span aria-hidden="true">↗</span>
        </button>
        <p className="text-sm text-text-subtle">Nothing is sent until you press Send there.</p>
      </div>

      <p role="status" className="text-sm leading-relaxed text-text-muted">
        {opened &&
          `Your email app should now show the message, ready to send. If nothing opened, email me directly at ${emailAddress}.`}
      </p>
    </form>
  );
}
