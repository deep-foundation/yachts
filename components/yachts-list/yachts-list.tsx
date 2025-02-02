import { AspectRatio, Box, Img, Link, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { TextBlockYachtDescription } from "../text-block";
import { yachtsList } from "./list";
import DynamicShadowImage from "../dynamic-shadow-image";

export const YachtsList = React.memo(({setPage}:{setPage?: (value) => void}) => {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const [isSmallerThan945] = useMediaQuery('(max-width: 945px)');

  return (<Box display='flex' flexDir='column' p={isSmallerThan945 ? '1rem' : '5rem'}>
      {isSmallerThan800 
      ? <Box>
          <Text as='h1'  textStyle={isSmallerThan800 ? 'h2' : 'h1'} p='1rem' color='text' align='center'>Yachts</Text>
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
            <Box position="relative" mb='1rem'>
              <Link>
                <DynamicShadowImage src={yacht.src}  onClick={() => setPage(yacht.href)}  alt={yacht.alt}/>
              </Link>
            </Box>
            <Box gridArea={`desc${index + 1}`} display='flex' alignItems='center' mb={isSmallerThan800 ? '2rem' : 0}>
              <TextBlockYachtDescription title={yacht.name} text={yacht.description} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>);
});
