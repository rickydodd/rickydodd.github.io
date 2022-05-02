import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
  return (
    <footer>
        <p>Created using <a href="https://nodejs.org/">node.js</a>, <a href="https://reactjs.org/">React</a> and <a href="https://www.gatsbyjs.com/">Gatsby</a>.</p>
        <p><Link to="/rss.xml">RSS Feed</Link></p>
    </footer>
  )
}
