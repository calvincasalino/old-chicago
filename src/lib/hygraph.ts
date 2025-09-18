import { GraphQLClient } from 'graphql-request';

const endpoint = import.meta.env.VITE_HYGRAPH_ENDPOINT!;

export const hygraph = new GraphQLClient(endpoint);