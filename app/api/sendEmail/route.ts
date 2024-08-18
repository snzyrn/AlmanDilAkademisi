import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${firstName} ${lastName}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New contact form message from ${firstName} ${lastName}`,
      text: message,
      replyTo: email,
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
