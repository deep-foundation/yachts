import { ChakraProvider } from "@chakra-ui/react";
import { DeepContext, DeepProvider } from "@deep-foundation/deeplinks/imports/client";
import { TokenProvider } from "@deep-foundation/deeplinks/imports/react-token";
import { useLocalStore } from "@deep-foundation/store/local";
import { CapacitorStoreKeys } from "../imports/capacitor-store-keys";
import { ApolloClientTokenizedProvider } from '@deep-foundation/react-hasura/apollo-client-tokenized-provider';
import { useContext } from "react";
import themeChakra from "../imports/theme";
import RootLayout from "../imports/layout";
import {PageContent} from "../imports/page-content";
import { Navbar } from "./navigation";
import { Footer } from "./footer";

export function ProvidersAndLoginOrContent({ children }: { children: JSX.Element }) {
  const [gqlPath, setGqlPath] = useLocalStore(CapacitorStoreKeys[CapacitorStoreKeys.GraphQlPath], undefined)
  return (<>
      <ChakraProvider theme={themeChakra}>
        <TokenProvider>
          <ApolloClientTokenizedProvider
            options={{
              client: 'deeplinks-app',
              path: gqlPath,
              ssl: true,
              ws: !!process?.browser,
            }}
          >
            <DeepProvider>
              <Navbar />
                <PageContent />
              <Footer />
            </DeepProvider>
          </ApolloClientTokenizedProvider>
        </TokenProvider>
      </ChakraProvider>
    </>
  );
}