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

export function ProvidersAndLoginOrContent({ children }: { children?: JSX.Element }) {
  const [page, setPage] = useQueryStore('page', 123);
  return (
    <>
      {page === 123 && <div onClick={() => setPage(234)}>123</div>}
      {page === 234 && <div onClick={() => setPage(345)}>234</div>}
      {page === 345 && <div onClick={() => setPage(123)}>345</div>}
      <ChakraProvider theme={themeChakra}>
        <Navbar />
          <PageContent />
        <Footer />
      </ChakraProvider>
    </>
  );
}