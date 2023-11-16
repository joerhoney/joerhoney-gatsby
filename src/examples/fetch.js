import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Fetch = (props) => {
  console.log(props);
  const getData = graphql`
    query firstQuery {
      site {
        info: siteMetadata {
          title
          description
          pets {
            name
            age
          }
          complexData {
            age
            name
          }
        }
      }
    }
  `;
  const data = useStaticQuery(getData);
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData);
  const desc = data.site.info.description;
  return (
    <div>
      {/* <h1>Name: {data.site.info.pets.name}</h1> */}
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Fetch;
