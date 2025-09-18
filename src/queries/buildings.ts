import { gql } from "graphql-request";

export const GET_BUILDINGS = gql`
  query GetBuildings($first: Int = 500) {
    buildings(orderBy: title_ASC, first: $first) {
      slug
      title
      latitude
      longitude
      photo {
        url(
          transformation: {
            image: { resize: { fit: clip, width: 1600 } }
          }
        )
      }
    }
  }
`;

export const GET_BUILDING = gql`
  query GetBuilding($slug: String!) {
    building(where: { slug: $slug }) {
      slug
      title
      subject
      description
      creator
      publisher
      date
      mediaType
      formatType
      identifier
      source
      language
      coverage
      rights
      collection
      latitude
      longitude
      photo {
        url(
          transformation: {
            image: { resize: { fit: clip, width: 1600 } }
          }
        )
      }
    }
  }
`;
