import { AspectRatio, Box, Img, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { TextBlockYachtDescription } from "../text-block";
import { yachtsList } from "./list";

export const YachtsList = React.memo(({setPage}:{setPage?: (value) => void}) => {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const [isSmallerThan945] = useMediaQuery('(max-width: 945px)');

  return (<Box display='flex' flexDir='column' p={isSmallerThan945 ? '1rem' : '5rem'}>
      {isSmallerThan800 
      ? <Box>
          <Text as='h1' textStyle='h1' p='1rem' color='text' align='center'>Yachts</Text>
        </Box>
      : <AspectRatio ratio={16 / 2} mb='2rem' position='relative'>
        <>
          <Box>
            <Text as='h1' textStyle='h1' position='absolute' left='0' zIndex='1' p='1rem' color='white'>Yachts</Text>
          </Box>
          <Img src='/yachts.webp' alt="Yachts list" width='100%' mb='2rem' />
        </>
      </AspectRatio>}

      <Box 
        display={isSmallerThan800 ? 'flex' : 'grid'} 
        gridTemplateAreas="'foto1 desc1'
                          'foto2 desc2' 
                          'foto3 desc3'
                          'foto4 desc4'
                          'foto5 desc5'
                          'foto6 desc6'"
        flexDirection={isSmallerThan800 ? 'column' : 'row'}
        columnGap='5rem'
        rowGap={isSmallerThan800 ? 0 : '3rem'}
        gridTemplateColumns={isSmallerThan800 ? '1fr' : '1fr 1fr'}
        p={isSmallerThan800 ? '1.5rem 1rem' : '3rem 3rem'}
      >
        {yachtsList.map((yacht, index) => (
          <Box key={yacht.id}>
            <AspectRatio ratio={4 / 3} gridArea={`foto${index + 1}`} maxH={isSmallerThan800 ? '30vmax' : '20vmax'} mb={isSmallerThan800 ? '0.8rem' : '1rem'}>
              <Img src={yacht.src} alt={yacht.alt} width='100%' objectFit='scale-down' />
            </AspectRatio>
            <Box gridArea={`desc${index + 1}`} display='flex' alignItems='center' mb={isSmallerThan800 ? '2rem' : 0}>
              <TextBlockYachtDescription title={yacht.name} text={yacht.description} onClick={() => setPage(`yachts/${yacht.name}`)} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>);
});
