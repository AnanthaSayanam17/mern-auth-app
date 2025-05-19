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

export const sendPasswordResetEmail = async (email, resetURL) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Reset your Password",
      html: `<p>Click <a href="${resetURL}">here</a> to reset your password.</p>`,
    });
  } catch (error) {}
};

export const sendResetSuccessEmail = async (email) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Your password has been reset",
      html: `<p>Your password has been successfully reset.</p>`,
    });
  } catch (error) {}
};
