'use client'

import { useState } from 'react'

const services = [
  ['furnace', 'Furnace installation or repair'],
  ['ac', 'Air conditioner installation or repair'],
  ['heat-pump', 'Heat pump service'],
  ['water-heater', 'Water heater service'],
  ['rtu', 'Rooftop unit service'],
  ['gas-line', 'Gas line installation'],
  ['commercial', 'Commercial HVAC'],
  ['emergency', 'Emergency service'],
  ['maintenance', 'Maintenance plan'],
  ['other', 'Other'],
]

export default function QuoteForm() {
  const [status, setStatus] = useState('idle')

  const submitLead = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    // A hidden field limits simple automated spam without affecting real customers.
    if (data.get('website')) return

    const service = services.find(([value]) => value === data.get('service'))?.[1] || 'Not selected'
    const subject = `New quote request: ${data.get('firstName')} ${data.get('lastName')}`
    const body = [
      'New Musa Comfort Systems quote request',
      '',
      `Name: ${data.get('firstName')} ${data.get('lastName')}`,
      `Phone: ${data.get('phone')}`,
      `Email: ${data.get('email')}`,
      `Service requested: ${service}`,
      `Property type: ${data.get('propertyType')}`,
      `Postal code: ${data.get('postalCode')}`,
      `Preferred contact time: ${data.get('contactTime')}`,
      '',
      'Customer message:',
      data.get('message') || 'No additional details provided.',
    ].join('\n')

    setStatus('opening-email')
    window.location.href = `mailto:info@musacomfort.com?${new URLSearchParams({ subject, body }).toString()}`
    setStatus('sent')
  }

  return (
    <form onSubmit={submitLead} className="bg-white rounded-xl border border-blue-100 shadow-card p-5 sm:p-8" noValidate={false}>
      <p className="mb-6 rounded-lg bg-[#eaf7ff] px-4 py-3 text-sm text-secondary">
        Tell us a little about your project and we will prepare the right next step for you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <Field label="First name" name="firstName" autoComplete="given-name" required />
        <Field label="Last name" name="lastName" autoComplete="family-name" required />
        <Field label="Phone number" name="phone" type="tel" autoComplete="tel" required />
        <Field label="Email address" name="email" type="email" autoComplete="email" required />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <SelectField label="Service needed" name="service" required>
          <option value="">Choose a service</option>
          {services.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </SelectField>
        <SelectField label="Property type" name="propertyType" required>
          <option value="">Choose a property type</option>
          <option>House</option>
          <option>Condo / apartment</option>
          <option>Commercial property</option>
          <option>Restaurant</option>
          <option>Other</option>
        </SelectField>
        <Field label="Postal code" name="postalCode" autoComplete="postal-code" placeholder="e.g. M5V 2T6" required />
        <SelectField label="Best time to contact you" name="contactTime" required>
          <option value="">Choose a time</option>
          <option>Morning (8 am – 12 pm)</option>
          <option>Afternoon (12 pm – 5 pm)</option>
          <option>Evening (5 pm – 8 pm)</option>
          <option>Any time</option>
        </SelectField>
      </div>

      <div className="mb-5">
        <label htmlFor="quote-message" className="mb-2 block font-semibold text-slate-700">Project details <span className="font-normal text-slate-500">(optional)</span></label>
        <textarea id="quote-message" name="message" rows="4" maxLength="1200" className="input-field" placeholder="Tell us what is happening, the equipment you have, or when you need service." />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="quote-website">Website</label>
        <input id="quote-website" name="website" tabIndex="-1" autoComplete="off" />
      </div>

      <label className="mb-5 flex items-start gap-3 text-sm text-slate-600">
        <input name="consent" type="checkbox" className="mt-1 h-4 w-4 accent-primary" required />
        <span>I agree that Musa Comfort Systems may contact me about this service request.</span>
      </label>

      <button type="submit" className="w-full btn-primary text-lg">Send My Quote Request →</button>
      {status === 'sent' && (
        <p className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-800" role="status">
          Your email app has opened with the request filled in. Please press Send to deliver it to Musa Comfort Systems.
        </p>
      )}
      <p className="mt-4 text-center text-xs text-slate-500">For urgent service, call <a className="font-bold text-primary hover:underline" href="tel:647-929-1730">647-929-1730</a>.</p>
    </form>
  )
}

function Field({ label, name, type = 'text', required, ...props }) {
  const id = `quote-${name}`
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-semibold text-slate-700">{label}{required && ' *'}</label>
      <input id={id} name={name} type={type} required={required} className="input-field" {...props} />
    </div>
  )
}

function SelectField({ label, name, required, children }) {
  const id = `quote-${name}`
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-semibold text-slate-700">{label}{required && ' *'}</label>
      <select id={id} name={name} required={required} className="input-field bg-white">{children}</select>
    </div>
  )
}
