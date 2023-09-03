import { Box, ChakraProvider } from "@chakra-ui/react";
import { useQueryStore } from "@deep-foundation/store/query";
import { FirstScreen } from "../components/first-screen";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navigation";
import { Technologies } from "../components/technologies/technologies";
import { YachtsGeneration } from "../components/yachts-generation/yachts-generation";
import { YachtsList } from "../components/yachts-list/yachts-list";
import { Crystal160 } from "../components/yachts/crystal-160";
import themeChakra from "./theme";
import { Crystal130 } from "../components/yachts/crystal-130";

export function ProvidersAndLoginOrContent({ children }: { children?: JSX.Element }) {
  const [page, setPage] = useQueryStore('page', '/');
  return (
    <>
      <ChakraProvider theme={themeChakra}>
        <Box w='100vw' h='100vh' position='relative' display='grid' gridTemplateRows='0.1fr 1fr 0.1fr'>
          <Navbar setPage={setPage} />
          {/* <PageContent /> */}
          <Box as='main' h='100%' w='100%'>
            {page === '/' && <FirstScreen display='flex' />}
            {page === 'yachts-generation' && <YachtsGeneration />}
            {page === 'yachts' && <YachtsList setPage={setPage} />}
            {page === 'technologies' && <Technologies />}
            {page === 'yachts/navigator 160' && <Crystal160 />}
            {page === 'yachts/navigator 130' && <Crystal130 />}
          </Box>
          <Footer setPage={setPage} />
        </Box>
      </ChakraProvider>
    </>
  );
}