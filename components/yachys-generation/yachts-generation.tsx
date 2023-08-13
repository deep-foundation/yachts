import { Box, Center, Image, useMediaQuery } from '@chakra-ui/react';
import React, { useState } from 'react';
import { GenerationForm } from './yachts-generation-form';
import { GenerationButton, GenerationImage } from './yachts-generation-image';
import { GenerationImageGallery } from './yachts-generation-image-gallery';



export const YachtsGeneration = React.memo(({ onClick }:{ onClick?: () => void; }) => {
  const [startCreate, setStartCreate] = useState(false);
  const [startGen, setStartGen] = useState(false);
  const [imgGen, setImgGen] = useState(false);

  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');

  return (<Center display='flex' flexDir='column' p={isSmallerThan800 ? '2rem 1rem' : '5.6rem'}>
      <Box 
        display='flex' 
        flexDir='column'
        alignItems='center'
        justifyContent='center'
        w='max-content'
      >
        {startCreate === false ? <Box textStyle='h3' mb='4rem'>create your own design</Box> : null}
        <Box w='100%' mb='2rem'>
          <Image src='/logo.svg' alt="Cristal Yacht Logo" width='100%' />
        </Box>
        <Box as='h2' textStyle='h2Generator' mb='3rem'>Crystal Yachts - Future is here</Box>
      </Box>
      <Box display='grid' gridTemplateColumns='0.1fr 1fr 0.1fr' w='100%' justifyItems='center' mb={isSmallerThan800 ? '2rem' : '4rem'}>
        {
          startCreate === false
          ? <GenerationButton 
              onClick={() => {
                setStartCreate(true);
              }} 
              buttonProps={{ gridColumn: '2/3', width: isSmallerThan800 ? '100%' : '30%', mb: isSmallerThan800 ? '2rem' : '4rem' }}
            />
          : startGen === false 
          ? <GenerationForm 
              onClick={() => setStartGen(true)} 
              containerProps={{gridColumn: '2/3'}}
            />
          : imgGen === false
          ? <GenerationImage containerProps={{gridColumn: '2/3'}} onClickToGallery={() => setImgGen(true)} />
          : <GenerationImageGallery />
        }
      </Box>
    </Center>
  );
})