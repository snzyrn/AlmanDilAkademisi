// app/api/sendEmail/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, message } = await request.json();

    // Configure your email transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email user
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO, // Recipient email address
      subject: `New contact form message from ${firstName} ${lastName}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { status: "error", message: "An error occurred while sending the email" },
      { status: 500 }
    );
  }
}
