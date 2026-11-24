# Where things go

| Folder | What lives there | Example |
| --- | --- | --- |
| `pages/` | One file per URL. Markdown in `blog/`, `work/`, `projects/` becomes pages through `gatsby-node.js`. | `creative.js` → `/creative/` |
| `templates/` | Layouts for markdown pages. `/work` items pick one with `type:` (`showcase` or the default compare view). | `work-showcase.js` |
| `content/` | Words and data, kept out of the JSX. | `freelance.md`, `portfolio.js` |
| `layouts/` | Site chrome: `Page` (nav, scheme picker, Profiles, footer), `Nav`, `Footer`, `Scheme`. | `<Page hero={…}>` |
| `sections/` | Whole page bands reused on many pages. | `Hero`, `ContactSection` |
| `components/` | Generic building blocks with no site copy in them. | `Button`, `Icon`, `Showcase`, `Tags`, `Seo` |
| `fragments/` | Small site-specific pieces with fixed content. | `Profiles`, `Skills`, `Arrow`, the help wizard (`QHelp*`) |
| `css/` | All styles; `main.scss` imports everything in cascade order. | see `css/main.scss` |
| `utils/` | Plain functions. | `workImage`, `dateFormat` |

## A typical page

```jsx
import Page from "@layouts/Page";
import Hero from "@sections/Hero";
import ContactSection from "@sections/ContactSection";
import Seo from "@components/Seo";

const About = () => (
  <Page hero={<Hero title="About" img={art} alt="…" />}>
    <section className="alignable pb-md">
      <article>…</article>
    </section>
    <ContactSection heading="Say hi">
      <p>…</p>
    </ContactSection>
  </Page>
);
export default About;

export const Head = ({ location }) => (
  <Seo title="About" description="…" pathname={location.pathname} />
);
```

Import aliases: `@components`, `@css`, `@fragments`, `@images`, `@layouts`,
`@sections`, `@utils` (set in `gatsby-node.js`).
