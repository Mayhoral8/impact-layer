"use client"
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  interface FormDataType {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

  interface FormInputEvent
    extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> {
    target: HTMLInputElement | HTMLTextAreaElement;
  }

  const handleInputChange = (e: FormInputEvent): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  interface EmailData {
    to_email: string;
    from_name: string;
    from_email: string;
    subject: string;
    message: string;
    reply_to: string;
  }

  interface EmailJSRequestBody {
    service_id: string;
    template_id: string;
    user_id: string;
    template_params: EmailData;
  }

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // EmailJS configuration
      const serviceId: string = "service_0humq6n"; // Replace with your EmailJS service ID
      const templateId: string = "template_iv7il5i"; // Replace with your EmailJS template ID
      const publicKey: string = "6zIeXQa977gO3qFx9"; // Replace with your EmailJS public key
      console.log(formData)

      const emailData: EmailData = {
        to_email: "adaeze@imactlayer.tech",
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      };

      const response: Response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: emailData,
          } as EmailJSRequestBody),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#eff3fa] p-8 rounded-2xl max-w-2xl mx-auto">
      <form onSubmit={sendEmail} className="space-y-6">
        {submitStatus === "success" && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            Message sent successfully! I'll get back to you soon.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            Failed to send message. Please try again or email me directly at
            ada@imactlayer.tech
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#206CCA] bg-white text-gray-900"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#206CCA] bg-white text-gray-900"
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#206CCA] bg-white text-gray-900"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#206CCA] bg-white text-gray-900 resize-none"
        ></textarea>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#206CCA] text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
    
  );
}
