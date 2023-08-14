import { Box, Button, Flex, HStack, Spacer, Stack, Textarea, VStack, theme, useMediaQuery } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import { InputGeneration, SelectGeneration } from './input-generation';


export const GenerationForm = React.memo(({ onClick, containerProps }:{ onClick?: () => void; containerProps?: {}; }) => {

  const [isSmallerThan767] = useMediaQuery('(max-width: 767px)', {
    ssr: true,
    fallback: false,
  });
  const [button, setButton] = useState('monohull');

  const handleChange = useCallback((value) => {
    setButton(value);
  }, []);

  return (<Box display='flex' flexDir='column' alignItems='center' justifyContent='center' w='100%' {...containerProps}>
      <InputGeneration type='text' placeholder='enter your name' stackProps={{ mb: '2rem', width: '100%'}} />
      <Box display='flex' alignItems='center' justifyContent='center' w='100%' mb='1rem'>
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
      <Box 
        display='flex'
        flexDir={ isSmallerThan767 ? 'column' : 'row' }
        justifyContent='space-between'
        w='100%'
        sx={{
          mb: '1rem',
        }}
      >
        <InputGeneration title="color" type='text' 
          stackProps={{
            mr: isSmallerThan767 ? '0rem' : '2rem',
            mb: isSmallerThan767 ? '1rem' : '0rem',
          }} 
        />
        <InputGeneration title="material" type='text' />
      </Box>
      <Stack h='max-content' align={isSmallerThan767 ? 'center' : 'flex-start'} spacing='1.5rem' mb='2rem'
        direction={isSmallerThan767 ? 'column' : 'row' }
      >
        <VStack>
          <InputGeneration title="height" select />
          <InputGeneration title="width" select textProps={{ pr: '0.4rem' }} />
          <SelectGeneration />
        </VStack>
        <Textarea placeholder='enter your description...' h='8.7rem' w='100%' />
      </Stack>
      <Button 
        variant='solid' 
        onClick={onClick} 
      >generate image</Button>
    </Box>
  )
})
