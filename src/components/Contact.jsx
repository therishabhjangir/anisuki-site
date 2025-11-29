import React from "react"
import { SITE } from "../siteConfig"

export default function Contact() {
  const actionUrl = `https://formsubmit.co/${SITE.emailForForm}`

  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-gray-600 mb-4">Use this form to receive messages directly to your email (free via formsubmit.co). Replace the email in src/siteConfig.js before deploying.</p>

        <form action={actionUrl} method="POST" className="space-y-3">
          <input type="hidden" name="_subject" value="New message from AniSuki website" />
          <input type="text" name="name" placeholder="Your name" required className="w-full p-3 border rounded" />
          <input type="email" name="email" placeholder="Your email" required className="w-full p-3 border rounded" />
          <textarea name="message" placeholder="Message" rows="5" required className="w-full p-3 border rounded"></textarea>
          <button type="submit" className="px-4 py-2 rounded bg-anisuki text-white">Send message</button>
        </form>
      </div>
    </section>
  )
}
