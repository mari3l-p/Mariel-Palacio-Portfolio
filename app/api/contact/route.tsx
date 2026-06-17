import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Extract the form data sent from the frontend
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Send the email
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // Resend's testing email address
      to: "mari3lpalacio@gmail.com", // Your receiving email address
      subject: `New Portfolio Message: ${subject}`,
      replyTo: email, // This allows you to hit "Reply" and email the user directly
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}