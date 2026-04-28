import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const templateIds = {
  earlyAccess: import.meta.env.VITE_EMAILJS_EARLY_ACCESS_TEMPLATE_ID,
  contact: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
};

export const sendEmail = (templateName, templateParams) => {
  const templateId = templateIds[templateName];

  if (!EMAILJS_SERVICE_ID || !EMAILJS_PUBLIC_KEY || !templateId) {
    throw new Error(
      "EmailJS is missing service, template, or public key configuration.",
    );
  }

  return emailjs.send(
    EMAILJS_SERVICE_ID,
    templateId,
    templateParams,
    EMAILJS_PUBLIC_KEY,
  );
};
