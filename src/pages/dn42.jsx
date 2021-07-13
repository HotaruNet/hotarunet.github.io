import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function Dn42() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(filter: { frontmatter: { route: { eq: "dn42_md" } } }) {
        edges {
          node {
            id
            html
            excerpt
            frontmatter {
              title
              sub_title
            }
          }
        }
      }
    }
  `);
  const d = data.allMarkdownRemark.edges[0].node;
  return (
    <div>
      <div className="post-title">
        <h2>{d.frontmatter.title}</h2>
        <span>{d.frontmatter.sub_title}</span>
      </div>
      <div className="card card_md">
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: d.html }}
        />
      </div>
    </div>
  );
}
