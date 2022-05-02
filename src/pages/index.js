import React from "react"
import { graphql, Link } from "gatsby"
import Footer from "../components/Footer"

export default function Home({ data }) {
  const { posts } = data.blog

  return (
    <div>
      <h1>Ricky Dodd (sometimes) Thinks</h1>
      <p>A minimalistic blog to catalogue the thoughts and beliefs of Ricky Dodd (<a href="https://github.com/rickydodd">GitHub profile</a>). Any thoughts or beliefs posted on this blog are the thoughts or beliefs of Ricky Dodd, and these thoughts or beliefs do not represent the thoughts or beliefs of any other person (or entity), whether they associate with Ricky Dodd in a professional or private context, unless otherwise stated by this person (or entity).</p>
      <h2>Posts</h2>
      
      { posts.map(post => (
        <article key={ post.id }>
          <Link to={ post.fields.slug }>
            <h2>{ post.frontmatter.title }</h2>
          </Link>
          <p>{ post.frontmatter.description }</p>
          <small>
            { post.frontmatter.author }, { post.frontmatter.date }
          </small>
          <p>{ post.excerpt }</p>
        </article>
      ))}
      
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark(sort: { fields: [frontmatter___date] order: DESC }) {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
          description
        }
        excerpt
        id
      }
    }
  }
`