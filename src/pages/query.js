import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Fetch from "../examples/fetch";

const Query = ({ data }) => (
  <>
    <h2>{data.site.siteMetadata.pets.name}</h2>
    <ul>
      {data.site.siteMetadata.complexData.map((item, index) => {
        return (
          <li key={index}>
            {item.name}: {item.age}
          </li>
        );
      })}
    </ul>
    <Fetch />
  </>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        pets {
          name
          age
        }
        complexData {
          name
          age
        }
      }
    }
  }
`;

export default Query;
