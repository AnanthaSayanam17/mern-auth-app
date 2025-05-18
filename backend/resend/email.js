import { resend } from "./config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Verification Email",
      html: `Verify email with this token:${verificationToken}`,
    });
  } catch (error) {
    console.log("error verifying email", error);
    throw new Error("Error sending verification email");
  }
};
