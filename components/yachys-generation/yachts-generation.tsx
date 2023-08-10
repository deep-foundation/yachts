import { Box, Button, Center, HStack, Image, Img, Skeleton, Text, Textarea, VStack, useRadioGroup } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import { InputGeneration, SelectGeneration } from './input-generation';
import { RadioCard } from './radio-button';
import { GenerationForm } from './yachts-generation-form';
import { GenerationButton, GenerationImage } from './yachts-generation-image';


export const YachtsGeneration = React.memo(({ onClick }:{ onClick?: () => void; }) => {
  const [startCreate, setStartCreate] = useState(false);
  const [startGen, setStartGen] = useState(false);

  return (<Center display='flex' flexDir='column' pt='7.5rem'>
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
      <Box 
        display='flex' 
        flexDir='column'
        alignItems='center'
        justifyContent='center'
        w='max-content'
      >
        {
          startCreate === false
          ? <GenerationButton onClick={() => {
            setStartCreate(true);
            console.log('start creating', startCreate);
          }} />
          : startGen === false 
          ? <GenerationForm onClick={() => setStartGen(true)} />
          : <GenerationImage />
        }
      </Box>
    </Center>
  );
})