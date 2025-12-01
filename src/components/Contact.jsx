import React, { useEffect, useState } from "react"
import { SITE } from "../siteConfig"

export default function Contact() {
  const actionUrl = `https://formsubmit.co/${SITE.emailForForm}`
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    // On mount, check if URL hash is "#contact-success"
    if (typeof window !== "undefined" && window.location.hash === "#contact-success") {
      setShowSuccess(true)
      // optional: scroll into view for better UX
      const el = document.getElementById("contact-success")
      if (el && typeof el.scrollIntoView === "function") {
        // smooth scroll on modern browsers
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
    // Also listen for hashchange (in case user navigates)
    const onHash = () => {
      setShowSuccess(window.location.hash === "#contact-success")
    }
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  return (
    <>
      <section id="contact" className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600 mb-4">Use this form to receive messages directly to your email (free via formsubmit.co).</p>

          <form action={actionUrl} method="POST" className="space-y-3">
            {/* disable formsubmit captcha, use a table template and redirect to success section */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://anisuki-site-znqn.vercel.app/#contact-success" />
            <input type="hidden" name="_subject" value="New message from AniSuki website" />

            <input type="text" name="name" placeholder="Your name" required className="w-full p-3 border rounded" />
            <input type="email" name="email" placeholder="Your email" required className="w-full p-3 border rounded" />
            <textarea name="message" placeholder="Message" rows="5" required className="w-full p-3 border rounded"></textarea>
            <button type="submit" className="px-4 py-2 rounded bg-anisuki text-white">Send message</button>
          </form>
        </div>
      </section>

      {/* Success section — show only when redirected to #contact-success */}
      {showSuccess && (
        <section id="contact-success" className="py-12 bg-green-50 mt-8">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
            <p className="text-gray-700">Thank you for contacting AniSuki. I will get back to you soon. If you don’t receive a reply within a few days, check your spam or send a follow-up message.</p>
          </div>
        </section>
      )}
    </>
  )
}
