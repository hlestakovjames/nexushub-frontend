'use client';

import type { FormEvent } from 'react';

const enquiryLabels: Record<string, string> = {
  general: 'General Enquiry',
  digital: 'Digital Project',
  business: 'Business / Partnership',
  media: 'Media',
  platform: 'Nexus Hub Platform',
  other: 'Other',
};

export default function ContactEnquiryForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const enquiryType = String(formData.get('enquiryType') ?? '');
    const preferredContact = String(formData.get('preferredContact') ?? 'Not specified');
    const subject = String(formData.get('subject') ?? 'Website enquiry');
    const message = [
      `Name: ${formData.get('fullName')}`,
      `Email: ${formData.get('email')}`,
      `Phone / WhatsApp: ${formData.get('phone') || 'Not provided'}`,
      `Organisation: ${formData.get('organisation') || 'Not provided'}`,
      `Enquiry type: ${enquiryLabels[enquiryType] ?? enquiryType}`,
      `Preferred contact: ${preferredContact}`,
      '',
      'Message:',
      String(formData.get('message') ?? ''),
      '',
      'Consent: The sender agrees that Nexus Hub may use the information provided to respond to this enquiry.',
    ].join('\\n');

    const mailto = `mailto:nexushubkenya@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailto;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="full-name" className="text-sm font-semibold text-slate-900">
            Full Name <span className="text-[#1266B6]">*</span>
          </label>
          <input id="full-name" name="fullName" type="text" required autoComplete="name" placeholder="Your full name" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1266B6] focus:ring-2 focus:ring-[#1266B6]/15" />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-slate-900">
            Email Address <span className="text-[#1266B6]">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1266B6] focus:ring-2 focus:ring-[#1266B6]/15" />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-slate-900">Phone / WhatsApp</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="e.g. 0712 345 678" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1266B6] focus:ring-2 focus:ring-[#1266B6]/15" />
        </div>
        <div>
          <label htmlFor="organisation" className="text-sm font-semibold text-slate-900">Organisation / Company</label>
          <input id="organisation" name="organisation" type="text" autoComplete="organization" placeholder="Organisation name" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1266B6] focus:ring-2 focus:ring-[#1266B6]/15" />
        </div>
        <div>
          <label htmlFor="enquiry-type" className="text-sm font-semibold text-slate-900">
            I&apos;m contacting you about <span className="text-[#1266B6]">*</span>
          </label>
          <select id="enquiry-type" name="enquiryType" required defaultValue="" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-[#1266B6] focus:ring-2 focus:ring-[#1266B6]/15">
            <option value="" disabled>Select an enquiry type</option>
            <option value="general">General Enquiry</option>
            <option value="digital">Digital Project</option>
            <option value="business">Business / Partnership</option>
            <option value="media">Media</option>
            <option value="platform">Nexus Hub Platform</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="preferred-contact" className="text-sm font-semibold text-slate-900">Preferred Contact Method</label>
          <select id="preferred-contact" name="preferredContact" defaultValue="" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-[#1266B6] focus:ring-2 focus:ring-[#1266B6]/15">
            <option value="">No preference</option>
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
            <option value="WhatsApp">WhatsApp</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="subject" className="text-sm font-semibold text-slate-900">
            Subject <span className="text-[#1266B6]">*</span>
          </label>
          <input id="subject" name="subject" type="text" required placeholder="What would you like to discuss?" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1266B6] focus:ring-2 focus:ring-[#1266B6]/15" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-semibold text-slate-900">
            Message <span className="text-[#1266B6]">*</span>
          </label>
          <textarea id="message" name="message" required rows={7} placeholder="Tell us about your enquiry, project, idea, or opportunity..." className="mt-2 w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1266B6] focus:ring-2 focus:ring-[#1266B6]/15" />
        </div>
        <div className="sm:col-span-2">
          <label className="flex items-start gap-3">
            <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 rounded border-slate-300 text-[#1266B6] focus:ring-[#1266B6]" />
            <span className="text-sm leading-6 text-slate-600">
              I agree that Nexus Hub may use the information provided to respond to my enquiry. <span className="text-[#1266B6]">*</span>
            </span>
          </label>
        </div>
        <div className="sm:col-span-2">
          <button type="submit" className="inline-flex w-full items-center justify-center rounded-xl bg-[#050A30] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#1266B6] sm:w-auto">
            Continue to Email →
          </button>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            This opens your device&apos;s email app with your enquiry prepared. Review it and press Send in your email app. Nothing is submitted to Nexus Hub directly from this website.
          </p>
        </div>
      </div>
    </form>
  );
}
