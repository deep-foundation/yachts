import { Box, Button, Flex, HStack, Spacer, Textarea, VStack, useMediaQuery } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import { InputGeneration, SelectGeneration } from './input-generation';


export const GenerationForm = React.memo(({ onClick }:{ onClick?: () => void; }) => {
  const max820 = useMediaQuery('(max-width: 820px)');
  const [button, setButton] = useState('monohull');
  console.log('max820', max820);

  const handleChange = useCallback((value) => {
    setButton(value);
    console.log('value', value);
  }, []);

  return (<Box display='flex' flexDir='column' alignItems='center' justifyContent='center' w='100%'>
      <InputGeneration type='text' placeholder='enter your name' stackProps={{ mb: '2rem', width: '100%'}} />
      <Box display='flex' alignItems='center' justifyContent='center' w='100%' pb='1rem'>
        <Button 
          variant='formButton' 
          w='100%' mr='2rem' 
          onClick={() => handleChange('monohull')}
        >monohull</Button>
        <Button variant='formButton' w='100%' onClick={() => handleChange('catamaran')}>catamaran</Button>
      </Box>
      <Box display='flex' alignItems='center' justifyContent='center' w='100%' mb='1rem'>
        <Box display='flex' alignItems='center' justifyContent='center' w='100%' mr='2rem'>
          <Button variant='formButton' w='100%' mr='0.5rem' onClick={() => handleChange('power')}>power</Button>
          <Button variant='formButton' w='100%' onClick={() => handleChange('sail')}>sail</Button>
        </Box>
        <Box display='flex' alignItems='center' justifyContent='center' w='100%'>
          <Button variant='formButton' w='100%' mr='0.5rem' onClick={() => handleChange('power')}>power</Button>
          <Button variant='formButton' w='100%' onClick={() => handleChange('sail')}>sail</Button>
        </Box>
      </Box>
      <Flex 
        direction='row' 
        mb='1rem'
        sx={{
          '&>*:nth-of-type(1)': {
            marginRight: max820 ? '2rem' : '0'
          }
        }}
      >
        <InputGeneration title="color" type='text' />
        <InputGeneration title="material" type='text' />
      </Flex>
      <HStack h='max-content' align='flex-start' spacing='1.5rem' mb='2rem'>
        <VStack>
          <InputGeneration title="height" select />
          <InputGeneration title="width" select textProps={{ mr: '0.4rem' }} />
          <SelectGeneration />
        </VStack>
        <Textarea placeholder='enter your description...' h='8.7rem' />
      </HStack>
      <Button 
        variant='solid' 
        onClick={onClick} 
      >generate image</Button>
    </Box>
  )
})
