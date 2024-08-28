---
date: 04-20-2024
published: true
title: Contentful's Rich Text Images in Gatsby
description: Why is it so hard to render Contentful's rich text in Gatsby, specifically images? How I resolved this despite the lack of documentation in 2024.
featimg: contentfuls-rich-text-images-in-gatsby.webp
featalt: Contentful to Gatsby image query with rich text editor in the background.
---

This is my first Contentful blog post and honestly, it was a kind of a pain. Not because Contentful's UI is confusing, but actually due to a lack of up-to-date Gatsby documentation.

I created a blog post content type (named Post) with your typical fields and put together some Post entries to work with for my Gatsby website. Easy enough in Contentful. Using the docs and a [Gatsby tutorial](https://youtu.be/kzWIUX3CpuI) and using the [gatsby-source-contentful plugin](https://www.gatsbyjs.com/plugins/gatsby-source-contentful/), I was able to query and get all of the data for my test entries (though I found out Contentful changed the `json` field to a `raw` field, which mostly works the same). The images didn't show up, so I continued the tutorial. Unfortunately, the simple method used in the tutorial (which relied on the obsolete `json` field) didn't work with the `raw` field, because there's no image data in there any more, only an asset ID (the `contentful_id` field).

After scouring the web I finally found [this article by Ed Pike](https://edpike365.medium.com/gatsby-contentful-rich-text-migrate-to-gatsby-source-contentful-version-4-in-early-2021-321904587470), which revealed that we need to get the image data from the `references` field. He also points to where [this is spelled out in the gatsby-source-contentful plugin docs](https://www.npmjs.com/package/gatsby-source-contentful#embedding-an-image-in-a-rich-text-field) (which is very minimal). He then goes on to share how he resolved his situation to get images in rich text to render.

Admittedly his solution was over my head (or I just didn't have enough patients to go through all the steps), and I just felt like there had to be an easier way. I was already so close. I could query the `references` field and see my image data in GraphiQL. It was right there!

I followed the gatsby-source-contentful docs as much as I could, but I came to realize it was actually missing something important. The method in the docs only uses the `raw` field, but again, the image data is all in the `references` field. Well, eventually I got smart, grabbed the image data from the `references` field, and then added it to the `raw` data before using it. Here's what that looked like, with comments inline to explain it:

```javascript
import React from "react";
import { graphql } from "gatsby";
// Note: This example use GatsbyImage, but you may choose other img plugins/components.
import { GatsbyImage } from "gatsby-plugin-image";
// We need this to change how React renders the embedded-asset-block component:
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// GraphQL query:
// Note: these slug variables/arguments aren't necessary for this demonstration. They just show how I queried the data for one specific post, based on the slug.
export const query = graphql`
  query ($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      body {
        raw
        references {
          contentful_id
          gatsbyImageData
          ... on ContentfulAsset {
            contentful_id
            __typename
            description
            gatsbyImageData
          }
        }
      }
      slug
    }
  }
`;

// Our Post component:
const Post = (props) => {
  // raw comes as a string, so we have to convert it to an object:
  const html = JSON.parse(props.data.contentfulPost.body.raw);
  const references = props.data.contentfulPost.body.references || null; // null if there are no references.
  // This options variable will be used later by documentToReactComponents.
  const options = {
    // renderNode allows us to assign our own rendering instructions for a specified component, overriding whatever instructions React had before.
    renderNode: {
      // embedded-asset-block is Contentful's component name for assets in rich text. We're going to tell React what to do whenever it finds one:
      "embedded-asset-block": (node) => {
        // We need the id so we can get the right image data from references:
        const nodeid = node.data.target.sys.id;
        // Find the node in references with the matching id, and store it in a variable:
        const asset =
          references !== null
            ? references.filter((ref) => ref && ref.contentful_id === nodeid)[0]
            : {};
        // Ignore the object if it doesn't contain an asset:
        if (Object.keys(asset).length === 0) {
          return null;
        }
        // Otherwise, render it using the GatsbyImage component:
        return (
          <GatsbyImage image={asset.gatsbyImageData} alt={asset.description} />
        );
      },
    },
  };

  // Time to render, and here is where we call documentToReactComponents, giving it the instructions we stored in the options variable.
  return (
    <article>
      <div>{raw && documentToReactComponents(raw, options)}</div>
    </article>
  );
};

export default Post;
```

So I had to find my own way to combine the image placement within the rich text body with the actual image data, because that wasn't in the docs as far as I could tell. But this got the job done.

If this helped you, or you still need help with it, or you know of a simpler way, or you just want to talk code, reach out to me on [Linkedin](https://www.linkedin.com/in/joerhoney/). I'd love to connect and maybe even collaborate!

Now I'm going to prove that this worked by inserting an image in my post...
