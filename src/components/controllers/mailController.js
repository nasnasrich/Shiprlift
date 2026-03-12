import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_re0kqg8";          // ✅ new service ID
const PUBLIC_KEY = "tFXyw4Bp6yWmdR-FL";       // your public key

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