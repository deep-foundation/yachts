import { QueryStoreProvider } from '@deep-foundation/store/query';
import { useCallback, useEffect, useRef } from 'react';
import { ProvidersAndLoginOrContent } from '../components/providers-and-login-or-content';
import { Navbar } from '../components/navigation';
import { Footer } from '../components/footer';
import { YachtsGeneration } from '../components/yachts-generation';


export function PageContent({
  children,
}:{
  children?: React.ReactNode;
}) {
    // const [language, setLanguage] = useState(process.browser ? detectBrowserLanguage() : 'en-US');
    
    const scrollingRef = useRef<any>();
    const refMenuButtons = useRef<any>();
    
    useEffect(() => {
    }, []);
    
    // const [desktop] = useMediaQuery('(min-width: 768px)');
    // const [max825] = useMediaQuery('(max-width: 825px)');
    // const [min826] = useMediaQuery('(min-width: 826px)');
    // const [max900] = useMediaQuery('(max-width: 900px)');
  
    // const onOpenTalksModal = useCallback(() => setOpenTalksModal(true), []);
    // const onCloseTalksModal = useCallback(() => setOpenTalksModal(false), []);
  
    return (<>
          {/* <Navbar /> */}
          <main>
            <YachtsGeneration />
          </main>
        {/* <Footer /> */}
      </>
    );
  };