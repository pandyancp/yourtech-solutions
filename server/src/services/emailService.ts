import nodemailer from 'nodemailer';
import { EnquiryRecord } from '../types/index.js';

export class EmailService {
  private static transporter: nodemailer.Transporter | null = null;

  private static getTransporter(): nodemailer.Transporter | null {
    if (this.transporter) return this.transporter;

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT) || 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (host && user && pass) {
      try {
        this.transporter = nodemailer.createTransport({
          host,
          port,
          secure: process.env.SMTP_SECURE === 'true',
          auth: { user, pass },
        });
        return this.transporter;
      } catch (err) {
        console.error('[EmailService] Failed to initialize SMTP transporter:', err);
        return null;
      }
    }

    return null;
  }

  public static async sendEnquiryNotification(record: EnquiryRecord): Promise<boolean> {
    const transporter = this.getTransporter();
    const recipient = process.env.NOTIFICATION_TO || 'contact@yourtechsolutions.com';
    const sender = process.env.NOTIFICATION_FROM || 'YourTech Solutions <no-reply@yourtechsolutions.com>';

    const subject = `[New Enquiry] ${record.service} — ${record.name}`;
    const textBody = `
New Service Enquiry Received:
========================================
Name: ${record.name}
Email: ${record.email}
Phone: ${record.phone}
Service: ${record.service}
Submitted At: ${record.createdAt}

Message:
----------------------------------------
${record.message}
========================================
`;

    if (!transporter) {
      console.log('[EmailService] SMTP credentials not configured. Skipping email dispatch (Enquiry saved in database).');
      return true;
    }

    try {
      await transporter.sendMail({
        from: sender,
        to: recipient,
        replyTo: record.email,
        subject,
        text: textBody,
      });
      return true;
    } catch (err) {
      console.error('[EmailService] Error sending email notification:', err);
      return false;
    }
  }
}
