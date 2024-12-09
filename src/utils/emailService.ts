import emailjs from '@emailjs/browser';

interface EmailParams {
  name: string;
  phone: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

// Initialize EmailJS
emailjs.init('t_Qsc7EkQ68C7dhv3');

export async function sendEmail(params: EmailParams): Promise<void> {
  try {
    await emailjs.send(
      'service_j5i6pgg',
      'template_bd0b9oz',
      {
        from_name: params.name,
        phone_number: params.phone,
        from_email: params.email,
        company: params.company,
        subject: params.subject,
        message: params.message,
      }
    );
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Failed to send email. Please try again later.');
  }
}