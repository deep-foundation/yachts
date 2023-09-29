import { Box, ChakraProvider } from "@chakra-ui/react";
import { useQueryStore } from "@deep-foundation/store/query";
import { FirstScreen } from "../components/first-screen";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navigation";
import { Technologies } from "../components/technologies/technologies";
import { YachtsGeneration } from "../components/yachts-generation/yachts-generation";
import { YachtsList } from "../components/yachts-list/yachts-list";
import themeChakra from "./theme";
import { Crystal80 } from "../components/yachts/crystal-80";
import { Crystal100 } from "../components/yachts/crystal-100";
import { Crystal160Ark } from "../components/yachts/crystal-160-ark";
import { Nexus } from "../components/yachts/nexus";

export function ProvidersAndLoginOrContent({ children }: { children?: JSX.Element }) {
  const [page, setPage] = useQueryStore('page', '/');
  return (
    <>
      <ChakraProvider theme={themeChakra}>
        <Box w='100vw' h='100vh' position='relative' display='grid' gridTemplateRows='0.1fr 1fr 0.1fr'>
          <Navbar setPage={setPage} page={page} />
          {/* <PageContent /> */}
          <Box as='main' h='100%' w='100%'>
            {page === '/' && <FirstScreen display='flex' />}
            {page === 'yachts-generation' && <YachtsGeneration />}
            {page === 'yachts' && <YachtsList setPage={setPage} />}
            {page === 'technologies' && <Technologies />}
            {page === 'yachts/crystal-80' && <Crystal80 />}
            {page === 'yachts/crystal-100' && <Crystal100 />}
            {page === 'yachts/crystal-160-ark' && <Crystal160Ark />}
            {page === 'yachts/nexus' && <Nexus />}
          </Box>
          <Footer setPage={setPage} page={page} />
        </Box>
      </ChakraProvider>
    </>
  );
}