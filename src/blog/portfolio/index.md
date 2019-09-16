---
title: Building My Portfolio
date: "2019-09-10"
description: Why I used Gatsby to build my portfolio site (and why I think you should too!)
---
When I started the senior phase at Fullstack Academy I knew that I wanted to make a site to show off the projects that I was working on and I also knew that I wanted to start blogging about my experience and the things I built.  I had heard a great deal about Gatsby and knew that I wanted to use this tool as I was building out my portfolio site.  Gatsby is an open source, React-based framework for building lightning fast sites.  It uses GraphQL to get data and at build time compiles your React code to simple HTML, CSS, and React that can be served to a client extremely quickly.  Here's a few reasons why I loved using Gatsby and want you to do the same!

##Documentation

In my (albeit short) time as a software engineer I have read a great deal of documentation, and a great deal of it has been less than great (I'm looking at you Sequelize!).  Gatsby's documentation stands out compared to any other I've seen for it's depth, breadth, and simplicity.  Their onboarding process for getting started is perfectly laid out for creating a simple site. I have also yet to search for something and not find exactly what I was looking for.  At one point I had considered trying to use Gatsby and the Poke API to build an online Pokedex.  It turned out that not only is that possible, the documentation used that API as an example for how to dynamically fetch information and build pages out of it.

##Turning Data into Pages

As I mentioned just now, Gatsby can query data from a huge variety of sources and use that data to programmatically create new pages.  Here is all of the code that I need to search my project folder for markdown files and have Gatsby generate a new page for each of them.

```javascript
import React from "react"
import { graphql } from "gatsby"
import MainLayout from "../components/mainLayout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <MainLayout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h2>{post.frontmatter.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </MainLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
            }
          }
        }
      `
```
A simple GraphQl query (which you can write and test in the browser using GraphiQL) is able to grab the appropriate data from each markdown file and generate a slug where the blog post can be found at.  Gatsby also has a built in page creation tool that simplifies the process of building and linking to pages that don't need to be generated based on data.  On my own site this includes the About, Portfolio, and Contact pages.  Gatsby generates the url for these pages based on the file name of the components and they can easily be linked to from any place in the app.

##Best Practices

Another great reason to use Gatsby is that it makes it incredibly easy to meet the industry standards for performance and accessibility.  Earlier today I tried auditing my site using the lighthouse tool in Chrome.  I was surprised to find that I had almost perfect scores across the board.  After adding a missing SEO component and a two missing image alt tags the result was that my site had a perfect score in every Performance, Accessibility, Best Practices, and SEO.  All of this was done with minimal effort on my part.  Objective measures are great but I can also subjectively say that my site feels incredibly fast and that working on it has been a breeze thanks to the great documentation.

If you aren't already convinced to give Gatsby a try then let's have a chat and I'll keep trying to convince you.  If you're working on your own Gatsby site and want to chat about it feel free to use my contact page to reach out and I would love to talk!
