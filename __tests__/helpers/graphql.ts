import * as axios from 'axios';

let { GRAPHQL_API_URL, GRAPHQL_API_KEY } = process.env;

type TRequestInput = {
  query: string;
  variables: { [key: string]: unknown }
}
async function request({ query, variables }: TRequestInput) {
  let headers = {
    'x-api-key': GRAPHQL_API_KEY
  };

  try {
    let res = await axios.default({
      method: "post",
      url: GRAPHQL_API_URL,
      headers,
      data: {
        query,
        variables: JSON.stringify(variables),
      },
    });

    let { data, errors } = res.data;

    throwOnErrors({ query, variables, errors });

    return data;
  } catch (err) {
    let errors = err?.response?.data?.errors;

    throwOnErrors({ query, variables, errors });

    throw err;
  }
}

type TThrowOnErrors = {
  query: string;
  variables: { [key: string]: unknown }
  errors: axios.AxiosError
}
function throwOnErrors({ query, variables, errors }: TThrowOnErrors) {
  if (errors) {
    let message = `
      query: ${query.substr(0, 100)}
      variables: ${JSON.stringify(variables, null, 2)}
      error: ${JSON.stringify(errors, null, 2)}
    `;
    throw new Error(message);
  }
}

export { request };
