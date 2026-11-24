import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

/**
 * Everything a page's <head> needs. Use it as the page's Head export:
 *
 *   export const Head = ({ location }) => (
 *     <Seo title="Creative" description="…" pathname={location.pathname} />
 *   );
 *
 * title        Shown as "Title | :joe rhoney" (fullTitle overrides it all).
 * image        Path under /static or a bundled import; defaults to og.jpg.
 * keywords     Comma-separated string.
 */
const Seo = ({
  title,
  fullTitle,
  description,
  image,
  keywords = "Joe Rhoney, Developer, Illustrator",
  pathname = "",
  children,
}) => {
  const site = useSiteMetadata();
  const absolute = (path) =>
    /^https?:/.test(path) ? path : `${site.siteUrl}/${path.replace(/^\//, "")}`;
  const seo = {
    title: fullTitle ?? (title ? `${title} | :joe rhoney` : site.title),
    description: description || site.description,
    image: absolute(image || site.image),
    url: absolute(pathname),
  };
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.twitterUsername} />
      <link rel="canonical" href={seo.url} />
      {children}
    </>
  );
};

export default Seo;
