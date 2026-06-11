import { GraphQLClient } from "graphql-request";

interface GraphQLRequest {
  query: string;
  variables?: Record<string, any>;
}

// export function performRequest({ query, variables }: GraphQLRequest) {
//   const endpoint = process.env.NEXT_PUBLIC_BASE_URL ?? "";

//   const client = new GraphQLClient(endpoint, {
//     headers: {
//       authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
//     },
//   });
//   return client.request(query, variables);
// }

export async function performRequest({query, variables}:GraphQLRequest){
  const endpoint = process.env.NEXT_PUBLIC_BASE_URL ?? "";
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
    },
    body: JSON.stringify({query, variables}),
    next: {revalidate: 60}
  });

  const json = await response.json();
  return json.data;
}