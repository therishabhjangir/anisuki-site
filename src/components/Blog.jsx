import React from "react"
import posts from "../data/posts.json"

export default function Blog() {
  return (
    <section id="news" className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">News & Posts</h2>
        <div className="space-y-4">
          {posts.map(p => (
            <div key={p.id} className="p-4 border rounded">
              <div className="text-sm text-gray-500">{p.date}</div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-gray-700">{p.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
