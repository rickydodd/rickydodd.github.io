import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import moment from 'moment'
import "katex/dist/katex.min.css"

export default function BlogPost({ data }) {
    const post = data.markdownRemark

    return (
        <Layout>
            <div>
                <a href="/">
                    <p>Return to the main blog</p>
                </a>
                <h1>{post.frontmatter.title}</h1>
                <small>Author: {post.frontmatter.author}</small><br/>
                <small>Date Posted: {moment(post.frontmatter.date).format("LL")}</small>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query BlogQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                author
                date
            }
        }
    }
`
