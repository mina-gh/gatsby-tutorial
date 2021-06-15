import React from "react"
import { Link } from "gatsby"

// Note the Link component is for linking two pages within the same Gatsby site.
// Use the regular HTML <a> for external links

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />

      <Link to="/about/">About</Link>

      <Link to="/contact/">Contact</Link>
    </div>
  )
}
