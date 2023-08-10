import { Box, Button, Center, HStack, Image, Img, Skeleton, Text, Textarea, VStack, useRadioGroup } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import { InputGeneration, SelectGeneration } from './input-generation';
import { RadioCard } from './radio-button';
import { GenerationForm } from './yachts-generation-form';


export const GenerationButton = React.memo(({ 
  onClick,
  variant='blackBgSquareSolid', 
  text = 'start creating',
  textProps = {},
}:{ 
  onClick?: () => void;
  variant?: string; 
  text?: string;
  textProps?: {};
}) => {
  return (<Button 
      variant={variant}
      w='100%'
      onClick={onClick} 
    >
      <Text {...textProps}>{text}</Text>
    </Button>
  )
})

export const GenerationImage = React.memo(({src = '/first.webp'}:{src?: string;}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (<Box display='flex' flexDir='column' justifyContent='center' alignItems='center' w='60vw' h='100%' border='thin solid #d7d7d7' p='2rem' borderRadius='0.2rem'>
      <Skeleton
        height='100%'
        width='100%'
        isLoaded={isLoaded}
        startColor='pink.500' endColor='orange.500'
        fadeDuration={1}
        mb='1.5rem'
      >
        <Img
          src={src} 
          alt='generation image' 
          w='100%' 
          sx={{opacity: isLoaded ? 1 : 0}}
          onLoad={() => setIsLoaded(true)}
          borderRadius='0.2rem'
        />
        {/* <Box>123</Box> */}
      </Skeleton>
      <Box w='100%' h='100%' display='flex' alignItems='center' justifyContent='center'>
        <HStack>
          <GenerationButton variant='grayBgSolid' text='download on your device' textProps={{ px: '3rem' }} />
          <GenerationButton variant='grayBgSolid' text='save to our gallery' />
        </HStack>
      </Box>
    </Box>
  ) 
})
