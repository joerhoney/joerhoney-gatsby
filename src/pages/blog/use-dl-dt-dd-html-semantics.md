---
published: 2026-04-29
draft: false
title: The Case for <dl>, <dt>, and <dd>
description: Stop faking term–definition markup with divs. Learn when and why to use <dl>, <dt>, and <dd> for cleaner, more accessible HTML.
featimg: use-dl-dt-dd-html-semantics.webp
featalt: Semantic HTML illustration showing description list markup using dl, dt, and dd tags in a developer workspace scene.
---

## Because `<div>` Soup Isn't a Semantic Strategy

Turns out I already knew about `<dl>`, `<dt>`, and `<dd>`. My brain just filed them under 'not my problem' for a few years. There, tucked between nostalgic thumbnails and memories of plugins I no longer remember, were `<dl>`, `<dt>`, and `<dd>`—the classic description-list trio. I thought: “Huh. That’s oddly specific.” I hadn’t used that gallery in years, let alone inspected it, and yet there it was, like a helpful librarian whispering, “Use me properly, mortal.”

If you’ve been using `<div>`s, `<span>`s, or frankly anything else you can slap a class on to fake a term–definition pair, this is your nudge. Here’s why you should stop faking it and start embracing the delightful semantics of description lists.

### What are these tags again?

- `<dl>` — description list container (think: “this is a list of things and their descriptions”).
- `<dt>` — definition term (the label, question, or property name).
- `<dd>` — definition description (the answer, explanation, or property value).

Example:

```html
<dl>
  <dt>Author</dt>
  <dd>Ray Bradbury</dd>

  <dt>Published</dt>
  <dd>1953</dd>
</dl>
```

### Why bother? (Short version: accessibility + sanity)

- **Screen readers love semantics.** Assistive tech can present a clear term → description relationship. That actually helps people. Radical, I know.
- **It saves future-you (and coworkers).** When someone inspects your markup and sees a `<dl>`, they instantly know the intent. No guessing whether `.meta--row` is a label or a value.
- **Less markup churn.** You don’t need extra wrappers or classes to signal meaning—turns out HTML already did that for you.
- **Styling is actually pleasant.** Target `dt` and `dd` directly, or use CSS Grid to make a neat two-column layout without nesting a dozen divs.

### When you can skip it

- If it’s purely decorative or not a name/value relationship, don’t force `<dl>` like it’s a sacred spell. Use whatever makes sense for the layout.
- Tiny throwaway projects where accessibility and future maintenance are irrelevant (rare, but they exist) — but even then, consider doing it correctly; it’s not that hard.

### Minimal effort, maximum impact: how to do it well

- Use `<dl>` for: term/definition pairs, attribute lists, FAQs (question → answer), metadata blocks.
- Basic markup:

```html
<dl>
  <dt>Resolution</dt>
  <dd>1920×1080</dd>
</dl>
```

- Simple two-column CSS trick:

```css
dl {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 1rem;
}
dt {
  font-weight: 600;
}
dd {
  margin: 0;
}
```

- Accessibility: when used properly, these native elements usually need no extra ARIA. Native semantics are already doing the heavy lifting.

### A tiny rant (and a compliment) about WordPress

Finding `<dl>` in the old WordPress Media Gallery was like wandering to the other side of my office building and discovering another breakroom I could have been utilizing this whole time. (And this one has **two** microwaves!) WordPress using `<dl>` there is actually smart: media items have clear metadata (filename, size, author), which are perfect for description lists. It’s just funny because I hadn’t poked the gallery in ages, and when I did, HTML history class was in session.

### Bottom line

Stop pretending term–definition content is a lucky arrangement of `<div>`s and classes. Use `<dl>`, `<dt>`, and `<dd>` when the content is a name/value or term/definition relationship. It’s low effort, makes things more accessible, keeps your markup cleaner, and gives future you fewer head-scratching moments, saving your scalp from excessive hair loss.

And if you ever find these tags hiding in an old corner of your CMS—yes, give them a moment of appreciation. They’ve been quietly doing the right thing all along.
