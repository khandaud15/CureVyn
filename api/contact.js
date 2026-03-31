import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const REQUIRED_FIELDS = [
  'name',
  'organization',
  'phone',
  'email',
  'country',
  'subject',
  'message',
];

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const body = request.body ?? {};

  for (const field of REQUIRED_FIELDS) {
    if (!body[field] || !String(body[field]).trim()) {
      return response.status(400).json({ error: `Missing field: ${field}` });
    }
  }

  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL || !process.env.CONTACT_RECEIVER_EMAIL) {
    return response.status(500).json({ error: 'Email service is not configured' });
  }

  const email = String(body.email).trim();

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [process.env.CONTACT_RECEIVER_EMAIL],
      replyTo: email,
      subject: `CureVyn Contact Query: ${body.subject}`,
      html: `
        <div style="font-family: Helvetica, Arial, sans-serif; color: #082436;">
          <h2 style="margin-bottom: 16px;">New Contact Form Submission</h2>
          <table cellpadding="8" cellspacing="0" border="0" style="border-collapse: collapse;">
            <tr><td><strong>Name</strong></td><td>${escapeHtml(body.name)}</td></tr>
            <tr><td><strong>Organization</strong></td><td>${escapeHtml(body.organization)}</td></tr>
            <tr><td><strong>Phone</strong></td><td>${escapeHtml(body.phone)}</td></tr>
            <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
            <tr><td><strong>Country</strong></td><td>${escapeHtml(body.country)}</td></tr>
            <tr><td><strong>Subject</strong></td><td>${escapeHtml(body.subject)}</td></tr>
          </table>
          <div style="margin-top: 18px;">
            <strong>Message</strong>
            <p style="margin-top: 8px; line-height: 1.7;">${escapeHtml(body.message).replaceAll('\n', '<br />')}</p>
          </div>
        </div>
      `,
    });

    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error('Contact email send failed:', error);
    return response.status(500).json({ error: 'Failed to send message' });
  }
}
