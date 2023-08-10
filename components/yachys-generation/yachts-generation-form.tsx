import { Box, Button, Flex, HStack, Spacer, Stack, Textarea, VStack, theme, useMediaQuery } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import { InputGeneration, SelectGeneration } from './input-generation';


export const GenerationForm = React.memo(({ onClick, containerProps }:{ onClick?: () => void; containerProps?: {}; }) => {
  const max820 = useMediaQuery('(max-width: 820px)');
  const max767 = useMediaQuery('(max-width: 767px)', {
    ssr: true,
    fallback: false,
  });
  console.log('max767', max767);
  const [button, setButton] = useState('monohull');
  console.log('max820', max820);
  const breackpoint = theme.breakpoints.sm;
  const breackpointMd = theme.breakpoints.md;
  console.log('breackpoint', breackpoint);
  console.log('breackpointMd', breackpointMd);

  const handleChange = useCallback((value) => {
    setButton(value);
    console.log('value', value);
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
        // flexDir={ max620 ? 'column' : 'row' }
        // flexDir='row'
        flexDir={{ sm: 'column', md: 'row' }}
        w='100%'
        sx={{
          // '&>*:nth-of-type(1)': {
          //   mr: max767 ? '2rem' : '10rem'
          // },
          mb: '1rem',
        }}
      >
        <InputGeneration title="color" type='text' 
          // stackProps={{mr: max767 ? '2rem' : '10rem'}} 
          stackProps={{
            mr: {sm: '0rem', md: '2rem'},
            mb: {sm: '1rem', md: '0rem'}
          }} 
        />
        <InputGeneration title="material" type='text' />
      </Box>
      <Stack h='max-content' align='flex-start' spacing='1.5rem' mb='2rem'
        direction={{ sm: 'column', md: 'row' }}
      >
        <VStack>
          <InputGeneration title="height" select />
          <InputGeneration title="width" select textProps={{ pr: '0.4rem' }} />
          <SelectGeneration />
        </VStack>
        <Textarea placeholder='enter your description...' h='8.7rem' />
      </Stack>
      <Button 
        variant='solid' 
        onClick={onClick} 
      >generate image</Button>
    </Box>
  )
})
