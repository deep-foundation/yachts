import { ChakraProvider } from "@chakra-ui/react";
import { DeepContext, DeepProvider } from "@deep-foundation/deeplinks/imports/client";
import { TokenProvider } from "@deep-foundation/deeplinks/imports/react-token";
import { useLocalStore } from "@deep-foundation/store/local";
import { CapacitorStoreKeys } from "./capacitor-store-keys";
import { ApolloClientTokenizedProvider } from '@deep-foundation/react-hasura/apollo-client-tokenized-provider';
import { useContext } from "react";
import themeChakra from "./theme";
import RootLayout from "./layout";
import {PageContent} from "./page-content";
import { Navbar } from "../components/navigation";
import { Footer } from "../components/footer";
import { useQueryStore } from "@deep-foundation/store/query";
import { FirstScreen } from "../components/first-screen";
import { YachtsGeneration } from "../components/yachts-generation";

export function ProvidersAndLoginOrContent({ children }: { children?: JSX.Element }) {
  const [page, setPage] = useQueryStore('page', '/');
  return (
    <>
      <ChakraProvider theme={themeChakra}>
        <Navbar setPage={() => setPage(page)} />
          {/* <PageContent /> */}
          <main>
            {page === '/' && <FirstScreen display='flex' />}
            {page === 'yachts-generation' && <YachtsGeneration />}
          </main>
        <Footer />
      </ChakraProvider>
    </>
  );
}