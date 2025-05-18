import { resend } from "./config.js";
import {
  verificationTokenEmailTemplate,
  welcomeEmailTemplate,
} from "./email-templates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Verification Email",
      html: verificationTokenEmailTemplate.replace(
        "{verificationToken}",
        verificationToken
      ),
    });
  } catch (error) {
    console.log("error verifying email", error);
    throw new Error("Error sending verification email");
  }
};

export const sendWelcomeEmail = async (email, name) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to Our Service",
      html: welcomeEmailTemplate.replace("{name}", name),
    });
  } catch (error) {
    console.log("error sending welcome email", error);
    throw new Error("Error sending welcome email");
  }
};
