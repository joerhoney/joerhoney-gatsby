---
published: 2026-04-08
draft: false
title: A Small Mark for Big Meaning
description: Using a single symbol to mark CSS variant classes.
featimg: a-small-mark-for-big-meaning.webp
featalt: AI generated techy art featuring the percent symbol.
---

## Using a Single Symbol to Mark CSS Variant Classes

I got tired of writing things like:

```html
<div class="card card__pink card__rounded card__compact card__accents">...</div>
```

…and then realizing I'd basically declared the same thing three times while my stylesheet silently judged me. Worse yet, the overloaded attributes. I mean, you might as well use Tailwind. BEM has its merits, but the redundancy and verbosity got old. So I asked: what if we had a single-character convention to mark "this class is a variant" — a modifier that does nothing alone and only makes sense attached to a base class?

Here's the research, the trade-offs, and my pick — with a dash of snark.

### Goals for a modifier symbol

A good modifier symbol should be:

- Visually distinct from normal names
- Easy to type and remember
- Unlikely to collide with frameworks, tools, or pseudo-classes
- Escapable when used in selectors (so it's practical)
- Readable in markup and in CSS once you learn the convention

### Candidates evaluated

I considered a handful of single characters. Brief pros/cons:

- `-` (dash)
  - Pros: already familiar in hyphenated class names, zero escaping.
  - Cons: not distinct — ambiguity with normal naming (e.g., `btn-primary`), which defeats the point.

- `_` (underscore)
  - Pros: unobtrusive, easy to type.
  - Cons: commonly used already; can be mistaken for private or utility classes.

- `:` (colon)
  - Pros: visually clear.
  - Cons: collides with pseudo-classes and requires escaping; confusing in CSS selectors.

- `%` (percent)
  - Pros: uncommon in class names, clearly marks a modifier, easy to escape (`.\%pink`), visually distinct.
  - Cons: requires escaping in selectors; unfamiliar at first glance.

- `$` (dollar)
  - Pros: distinct, short.
  - Cons: often used in CSS-in-JS conventions and template languages; might clash with tooling.

- `~`, `+`, `*` (tilde, plus, star)
  - Pros: distinct characters.
  - Cons: awkward to type/escape and visually noisy; potential for confusion with combinators or operators.

### My pick: %

Why `%`? It's uncommon in class names (so less chance of accidental overlap), easy to escape in selectors, visually stands out in markup, and communicates "special modifier" without pretending to be a full class by itself.

#### Example workflow:

**In markup:**
`<div class="card %pink %rounded"></div>`

**In CSS:**

- Use escaped selector syntax:

```css
.card.\%pink {
  background: hotpink;
}
.card.\%rounded {
  border-radius: 8px;
}
```

- Alternatively, combine in the Dom-aware rule:

```css
.card.\%pink.\%rounded {
  /* both modifiers present */
}
```

#### Rules I follow when using modifiers this way:

- A modifier class never applies meaningful styles by itself. It only adds to a base class (or set of base classes).
- Keep modifiers short and focused: `%pink`, `%rounded`, `%sm`.
- Document the convention clearly in your project style guide.
- Add lint rules or a build-time check if you can, to ensure modifiers aren't used standalone.
- Don't over-modularize: use modifiers for small orthogonal changes, not to build entirely new components.

### Why this is better than BEM (for some projects)

- Less redundancy in markup: you don't need both `.card` and `.card__pink` naming patterns.
- Modifier semantics are explicit: `%pink` signals "this is a tweak", not a component.
- Cleaner atom-ish markup: adding or removing a single character class changes presentation without inventing new component names.

### Caveats & trade-offs

- Escaping: selectors require escaping (e.g., `.card.\%pink`), which can be awkward to type and slightly less ergonomic in dev tools.
- Tooling: some CSS tooling, libraries, or conventions (CSS-in-JS, frameworks) might react poorly or already use similar symbols.
- Reader unfamiliarity: new collaborators will need the style guide; this is not a universally recognized pattern like BEM.

### Practical tips

- Put the convention in your README or style guide with quick examples.
- Prefer short modifier names (`%sm`, `%danger`) to keep markup tidy.
- Use linting or a test that flags modifiers used without a base class.
- Adopt `%` incrementally on small components first; if your team hates it, revert gracefully.

### Final verdict (short)

Use `%` as a leading modifier marker when you want a terse, semantically clear way to express "this is a variant, not a standalone class." It's readable, uncommon (so low collision), and practical once you accept the minor annoyance of escaping in selectors. Also: fewer repetitive names, fewer sorrowful CSS files.

Happy styling — may your classes be meaningful and your selectors merciful.
