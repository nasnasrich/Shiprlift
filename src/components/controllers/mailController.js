import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; 

export const sendMail = (e, templateId, formId, successMessage) => {
  e.preventDefault();

  const form = document.getElementById(formId);

  if (!form) {
    console.error("Form not found:", formId);
    alert("Form not found.");
    return;
  }

  emailjs
    .sendForm(SERVICE_ID, templateId, form, PUBLIC_KEY)
    .then((res) => {
      console.log("Email sent:", res);
      alert(successMessage || "Message sent successfully!");
      form.reset();
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("Something went wrong.");
    });
};