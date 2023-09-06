import { Box, Button, Flex, HStack, Spacer, Stack, Textarea, VStack, theme, useMediaQuery } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import { InputGeneration, SelectGeneration } from './input-generation';
import { DeepClient } from '@deep-foundation/deeplinks/imports/client';


export const GenerationForm = React.memo((
  { 
    onClick,
    containerProps, 
    setRequestId,
    deep,
    drawRequestTypeId,
    midjourneyRequestTypeId,
    settingsId,
  }:
  { 
    onClick?: () => void;
    containerProps?: {}; 
    setRequestId: any,
    deep: DeepClient,
    drawRequestTypeId: number,
    midjourneyRequestTypeId: number,
    settingsId: number,
  }
  ) => {
    
  const [isSmallerThan767] = useMediaQuery('(max-width: 767px)', {
    ssr: true,
    fallback: false,
  });
  
  const [button, setButton] = useState('monohull');

  
  const [yachtType, setYachtType] = useState('monohull');
  const [yachtType2, setYachtType2] = useState('power');
  const [yachtColor, setYachtColor] = useState('');
  const [yachtAuthor, setYachtAuthor] = useState('');
  const [yachtMaterial, setYachtMaterial] = useState('');
  const [yachtHeight, setYachtHeight] = useState('');
  const [yachtWidth, setYachtWidth] = useState('');
  const [yachtLength, setYachtLength] = useState('');
  const [yachtDeckCnt, setYachtDeckCnt] = useState('');
  const [yachtWidthType, setYachtWidthType] = useState('ft');
  const [yachtHeightType, setYachtHeightType] = useState('ft');
  const [yachtLengthType, setYachtLengthType] = useState('ft');
  const [yachtCustom, setYachtCustom] = useState('');

  const handleChange = useCallback((value) => {
    setButton(value);
  }, []);

  async function draw() {
    
    const drawRequestObj ={
      "id": yachtAuthor,
      "color": yachtColor,
      "type1": yachtType,
      "type2": yachtType2,
      "width": yachtWidth,
      "custom": yachtCustom,
      "height": yachtHeight,
      "length": yachtLength,
      "deck_cnt": yachtDeckCnt,
      "material": yachtMaterial,
      "width_type": yachtWidthType,
      "height_type": yachtHeightType,
      "length_type": yachtLengthType,
    }
    
    const {data: [drawRequestLink] } = await deep.insert({
      type_id: drawRequestTypeId,
      from_id: settingsId,
      object: drawRequestObj,
      to: { 
        type_id: midjourneyRequestTypeId,
        string: '',
      }
    });

    setRequestId(drawRequestLink.id);
    onClick();
  } 

  return (<Box display='flex' flexDir='column' alignItems='center' justifyContent='center' w='100%' {...containerProps}>
      <InputGeneration value={yachtAuthor} handleChange={(event) => setYachtAuthor(event.target.value)} type='text' placeholder='enter your name' stackProps={{ mb: '2rem', width: '100%'}} />
      <Box display='flex' alignItems='center' justifyContent='center' w='100%' mb='1rem'>
        <Button 
          variant='outline'
          sx={{ 
            bg: yachtType==='monohull' ? 'white' : 'gray.100', 
            fontWeight: yachtType==='monohull' ? 'bold' : 'light', 
            _hover: {
              bg: yachtType==='monohull' ? 'gray.100' : 'white',
              fontWeight: yachtType==='monohull' ? 'light' : 'bold', 
            }
          }}
          w='100%' mr='2rem' 
          onClick={() => {
            handleChange('monohull'); 
            setYachtType('monohull');
          }}
        >monohull</Button>
        <Button 
          variant='outline'
          sx={{ 
            bg: yachtType==='catamaran' ? 'white' : 'gray.100', 
            fontWeight: yachtType==='catamaran' ? 'bold' : 'light', 
            _hover: {
              bg: yachtType==='catamaran' ? 'gray.100' : 'white',
              fontWeight: yachtType==='catamaran' ? 'light' : 'bold', 
            }
          }} 
          w='100%' 
          onClick={() => {
            handleChange('catamaran'); 
            setYachtType('catamaran');
          }}>catamaran</Button>
      </Box>
      <Box display='flex' alignItems='center' justifyContent='center' w='100%' mb='1rem' >
        <Box display='flex' alignItems='center' justifyContent='center' w='100%' mr='2rem'>
          <Button isDisabled={yachtType!=='monohull'} 
            variant='outline'
            sx={{ 
              bg: yachtType2==='power' ? 'white' : 'gray.100', 
              fontWeight: yachtType2==='power' ? 'bold' : 'light', 
              _hover: {
                bg: yachtType2==='power' ? 'gray.100' : 'white',
                fontWeight: yachtType2==='power' ? 'light' : 'bold', 
              }
            }} 
            w='100%'  mr='0.5rem' 
            onClick={() => {handleChange('power'); setYachtType2('power');}}>power</Button>
          <Button isDisabled={yachtType!=='monohull'} 
            variant='outline'
            sx={{ 
              bg: yachtType2==='sail' ? 'white' : 'gray.100', 
              fontWeight: yachtType2==='sail' ? 'bold' : 'light', 
              _hover: {
                bg: yachtType2==='sail' ? 'gray.100' : 'white',
                fontWeight: yachtType2==='sail' ? 'light' : 'bold', 
              }
            }} 
            w='100%' 
            onClick={() => {
              handleChange('sail'); 
              setYachtType2('sail');
            }}>sail</Button>
        </Box>
        <Box display='flex' alignItems='center' justifyContent='center' w='100%'>
          <Button isDisabled={yachtType!=='catamaran'}
            variant='outline'
            sx={{ 
              bg: yachtType2==='power' ? 'white' : 'gray.100', 
              fontWeight: yachtType2==='power' ? 'bold' : 'light', 
              _hover: {
                bg: yachtType2==='power' ? 'gray.100' : 'white',
                fontWeight: yachtType2==='power' ? 'light' : 'bold', 
              }
            }} 
            w='100%' mr='0.5rem' 
            onClick={() => {handleChange('power'); setYachtType2('power');}}>power</Button>
          <Button isDisabled={yachtType!=='catamaran'} 
            variant='outline'
            sx={{ 
              bg: yachtType2==='sail' ? 'white' : 'gray.100', 
              fontWeight: yachtType2==='sail' ? 'bold' : 'light', 
              _hover: {
                bg: yachtType2==='sail' ? 'gray.100' : 'white',
                fontWeight: yachtType2==='sail' ? 'light' : 'bold', 
              }
            }} 
            w='100%' 
            onClick={() => {handleChange('sail'); setYachtType2('sail');}}>sail
          </Button>
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
        <InputGeneration value={yachtColor} handleChange={(event) => setYachtColor(event.target.value)} title="color" type='text' 
          // stackProps={{mr: max767 ? '2rem' : '10rem'}} 
          stackProps={{
            mr: isSmallerThan767 ? '0rem' : '2rem',
            mb: isSmallerThan767 ? '1rem' : '0rem',
          }} 
        />
        <InputGeneration value={yachtMaterial} handleChange={(event) => setYachtMaterial(event.target.value)} title="material" type='text' />
      </Box>
      <Stack h='max-content' align={isSmallerThan767 ? 'center' : 'flex-start'} spacing='1.5rem' mb='2rem'
        direction={isSmallerThan767 ? 'column' : 'row' }
      >
        <VStack>
          <InputGeneration title="height" value={yachtHeight} handleChange={(event) => setYachtHeight(event.target.value)} select /> {/* bind select to yacht{WLH}Type value */}
          <InputGeneration title="width" value={yachtWidth} handleChange={(event) => setYachtWidth(event.target.value)} select textProps={{ pr: '0.4rem' }} />
          <InputGeneration title="length" value={yachtLength} handleChange={(event) => setYachtLength(event.target.value)} select />
          <SelectGeneration value={yachtDeckCnt} handleChange={(event) => setYachtDeckCnt(event.target.value)}/>
        </VStack>
        <Textarea value={yachtCustom} onChange={(event) => setYachtCustom(event.target.value)} placeholder='enter your description...' h='8.7rem' />
      </Stack>
      <Button 
        variant='solid' 
        onClick={draw} 
      >generate image</Button>
    </Box>
  )
})
