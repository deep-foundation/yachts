// import 'normalize.css';
// import 'xterm/css/xterm.css';
import { generateApolloClient } from '@deep-foundation/hasura/client';
import { DeepClient, DeepProvider } from "@deep-foundation/deeplinks/imports/client";
import { ApolloProvider} from '@apollo/client/index.js';

function App({ Component, pageProps }) {

  const GRAPHQL_PATH =process.env.NEXT_PUBLIC_GQL_PATH;
  const GRAPHQL_SSL = !!+process.env.NEXT_PUBLIC_GQL_SSL;
  const ADMIN_TOKEN = process.env.NEXT_PUBLIC_ADMIN_TOKEN;
  const apolloClient = generateApolloClient({
    path: GRAPHQL_PATH,
    ssl: GRAPHQL_SSL,
    ws: true,
    token: ADMIN_TOKEN,
  });
  
  const deepClient = new DeepClient({ apolloClient });


  return(<ApolloProvider client={deepClient.apolloClient}>
          <DeepProvider> 
            <Component {...pageProps} />
          </DeepProvider>
        </ApolloProvider>)
}

export default App;