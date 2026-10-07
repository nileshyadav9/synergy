import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";
import { siteConfig } from "../data/site";

type FormStatus = "idle" | "sending" | "success" | "error";
async function submitContactRequest(formData: FormData): Promise<void> {
  const requiredFields = ["name", "company", "email", "topic"];
  if (requiredFields.some((field) => !String(formData.get(field) ?? "").trim()))
    throw new Error("Required contact details are missing.");
  await new Promise((resolve) => window.setTimeout(resolve, 650));
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      await submitContactRequest(new FormData(form));
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <h3>Start a conversation</h3>
        <span>We typically respond within one business day.</span>
      </div>
      <div className="form-grid">
        <label>
          Name
          <input
            name="name"
            autoComplete="name"
            placeholder="Your name"
            required
          />
        </label>
        <label>
          Company
          <input
            name="company"
            autoComplete="organization"
            placeholder="Your organization"
            required
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            required
          />
        </label>
        <label>
          Phone <span className="optional">Optional</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 (555) 000-0000"
          />
        </label>
        <label className="form-full">
          What can we help you with?
          <select name="topic" defaultValue="" required>
            <option value="" disabled>
              Select a topic
            </option>
            {siteConfig.contactTopics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </label>
        <label className="form-full">
          A little more about the work{" "}
          <span className="optional">Optional</span>
          <textarea
            name="message"
            rows={3}
            placeholder="What are you looking to accomplish?"
          />
        </label>
      </div>
      <div className="form-submit-row">
        <button
          className="button button--primary form-submit"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? (
            <>
              Sending <LoaderCircle size={16} className="spin" />
            </>
          ) : status === "success" ? (
            <>
              Message received <Check size={16} />
            </>
          ) : (
            <>
              Send your note <ArrowUpRight size={16} />{" "}
            </>
          )}
        </button>
        <span className="form-privacy">Your details stay between us.</span>
      </div>
      <p
        className={`form-feedback form-feedback--${status}`}
        role="status"
        aria-live="polite"
      >
        {status === "success" &&
          "Thanks for reaching out. We will be in touch shortly."}
        {status === "error" &&
          "We could not send your note. Please try again or email us directly."}
      </p>
    </form>
  );
}
