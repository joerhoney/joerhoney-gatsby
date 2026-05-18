---
published: 2026-05-17
draft: true
title: The * and > CSS Class Convention
description: A two-character shorthand for scoping utility classes when you can't control where they land.
featimg: the-star-and-arrow-css-class-convention.webp
featalt: AI generated techy art featuring asterisk and greater-than symbols in a code-like pattern.
---

# The `*` and `>` CSS Class Convention: BEM for People Who Hate Typing

Here's a problem that's bitten me more times than I'd like to admit.

You're in a CMS backend — WordPress, Contentful, whatever fresh hell your client has chosen — and you need to style something. There's a class field. Great! You type your utility class. But is that field on the element you actually want to style, or on some mystery wrapper div three levels up that the CMS injected without asking? You don't know. You can't know, not without opening DevTools, and by that point you've already lost.

So you do what any reasonable developer does: you hedge.

## The Naïve Hedge

```css
.text-xl,
.text-xl * {
  font-size: 2rem;
}
```

Slap the class on anything — the element itself, a parent, a grandparent, the `<body>` tag in a moment of desperation — and _something_ will get the right font size. Problem solved!

Until it isn't.

The moment your component has nested elements you _don't_ want to restyle, this approach falls apart. Now `.text-xl *` is merrily applying `2rem` to every descendant in the subtree, including that little footnote span you specifically sized at `0.75rem`. The wildcard giveth, and the wildcard taketh away.

What you actually need is control. Not "nuke everything from orbit" control — _surgical_ control. Sometimes you want all descendants. Sometimes you only want direct children. And sometimes you want to target just the element itself, because you finally figured out the CMS _does_ let you add the class directly.

## The Verbose Solution (and Why It Stings)

The clean way to express all three cases is with separate, explicit classes:

```css
.text-xl,
.text-xl-children,
.text-xl-direct-child {
  font-size: 2rem;
}
```

This works perfectly. You now have fine-grained control. You also have class names that make your HTML look like a legal document.

`class="text-xl-direct-child"` — really? Every time? For what is essentially a structural hint to the stylesheet? There has to be a better way.

## The Convention

Here it is:

```css
.text-xl,
.text-xl\* *,
.text-xl\> > * {
  font-size: 2rem;
}
```

In your HTML, you use:

- **`.text-xl`** — apply directly to the element
- **`.text-xl*`** — apply to a parent; all descendants get the style
- **`.text-xl>`** — apply to a parent; only direct children get the style

The symbols aren't arbitrary. They're the exact CSS symbols that describe the relationship:

- `*` means "all descendants" in CSS. So `.text-xl*` means "`.text-xl`, but with a wildcard scope."
- `>` means "direct child" in CSS. So `.text-xl>` means "`.text-xl`, but scoped to direct children."

Anyone who's written a CSS selector before already knows this. There's no new vocabulary to learn — you're just borrowing symbols from a language developers already speak.

## "Wait, Is That Valid?"

Yes. Class names in HTML can contain `*` and `>` without issue. The browser treats them as opaque strings. You're not doing anything weird to HTML.

The _stylesheet_ is where it gets a little funky. CSS selectors give `*` and `>` special meaning, so if you want to use them literally in a class name, you have to escape them with a backslash:

```css
/* This targets elements with the literal class "text-xl*" */
.text-xl\* * {
  font-size: 2rem;
}
```

That `\*` tells the CSS parser: _this asterisk is part of the class name, not a wildcard._ The `*` that follows (with a space) is the actual descendant wildcard. Admittedly, `.text-xl\* *` looks like it was written by someone having a stroke, but this is the stylesheet author's problem, not the HTML author's. And the stylesheet author — if they wrote this convention — already knows exactly what it means.

The person writing the HTML just types `.text-xl*` and moves on with their life.

## Bonus: Condensing the Stylesheet

Once you've adopted the convention, you can tighten up the CSS itself using `:is()`:

```css
:is(.text-xl, .text-xl\* *, .text-xl\> > *) {
  font-size: 2rem;
}
```

Same behavior, less repetition — especially welcome once you're managing a full utility scale (`text-sm`, `text-md`, `text-xl`, `text-2xl`...). One thing worth knowing: `:is()` takes the specificity of its most specific argument, so all three selectors end up at the same specificity level. For a utility convention like this, that's actually a feature, not a bug — consistent specificity means fewer cascade surprises.

If you'd prefer zero specificity (maximum overridability), swap `:is()` for `:where()`:

```css
:where(.text-xl, .text-xl\* *, .text-xl\> > *) {
  font-size: 2rem;
}
```

Both are supported in all modern browsers. Pick whichever fits your specificity strategy.

## Why This Is Worth Caring About

This is fundamentally an authoring ergonomics problem, not a CSS capability gap. CSS has always been able to express these relationships. The issue is that utility class conventions haven't kept up — they typically assume you know exactly which element you're targeting when you're writing HTML, and that's not always true.

BEM gave us a shared grammar for component structure. Tailwind gave us a shared grammar for style properties. This convention aims to fill a small but genuinely annoying gap: a shared grammar for _scope_, expressed in a way that's short enough to actually type and obvious enough that you don't need to look it up.

It's two characters. `*` and `>`. You already know what they mean.

_Thoughts? Objections? Found an edge case that breaks this horribly? The comments are open._
