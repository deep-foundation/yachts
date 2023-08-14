import { AspectRatio, Box, Img, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { TextBlockYachtDescription } from "./text-block";

export const YachtsList = React.memo(() => {
  const [isSmallerThan500] = useMediaQuery('(max-width: 500px)');
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const [isSmallerThan945] = useMediaQuery('(max-width: 945px)');

  return (<Box display='flex' flexDir='column' p={isSmallerThan945 ? '1rem' : '3rem'}>
      <AspectRatio ratio={16 / 2} mb='2rem' position='relative'>
        <>
          <Box>
            <Text as='h1' textStyle='h1' position='absolute' left='0' zIndex='1' p='1rem' color='white'>Yachts</Text>
          </Box>
          <Img src='/yachts.webp' alt="Yachts list" width='100%' mb='2rem' />
        </>
      </AspectRatio>

      <Box 
        display='grid' 
        gridTemplateAreas='foto1 desc1
                          foto2 desc2 
                          foto3 desc3
                          foto4 desc4
                          foto5 desc5
                          foto6 desc6'
        gridGap='1rem'
        gridTemplateColumns={isSmallerThan800 ? '1fr' : '1fr 1fr'}
      >
        <AspectRatio ratio={4 / 3} gridArea='foto1'>
          <Img src='/y1.webp' alt="NAVIGATOR 215" width='100%' />
        </AspectRatio>
        <Box gridArea='desc1'>
          <TextBlockYachtDescription title='NAVIGATOR 215' text='The Navigator 215 with her steel hull sets new standards for Megayachts as the most modern yacht in the 65-meter class. The exterior design creates a muscular and sporty modern look with graceful curves and sleek straight lines.' />
        </Box>
      </Box>
    </Box>);
});
