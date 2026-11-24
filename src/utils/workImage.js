// Resolves an image named in a /work markdown file's frontmatter.
//
// - "screenshots/foo.webp" or "work/foo.webp" → bundled from /src/images
//   (fingerprinted + cached by webpack, nothing to copy into /static).
// - "foo.webp" (no folder) → served from /static/work/foo.webp, which is how
//   the older Compare items reference their images.
const bundled = require.context(
  "../images",
  true,
  /^\.\/(screenshots|work)\/.*\.(webp|png|jpe?g|gif|svg)$/
);

const workImage = (name) => {
  if (!name) return null;
  const key = `./${name.replace(/^\.?\//, "")}`;
  if (bundled.keys().includes(key)) {
    const mod = bundled(key);
    return mod.default ?? mod;
  }
  return `/work/${name}`;
};

export default workImage;
