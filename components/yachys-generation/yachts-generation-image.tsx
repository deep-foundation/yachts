import { Box, Button, Img, Skeleton, Text } from '@chakra-ui/react';
import React from 'react';
import { IoIosArrowForward, IoIosShareAlt } from "react-icons/io";


export const GenerationButton = React.memo(({ 
  onClick,
  variant='blackBgSquareSolid', 
  text = 'start creating',
  buttonProps = {},
  textProps = {},
  rightIcon = null,
}:{ 
  onClick?: () => void;
  variant?: string; 
  text?: string;
  buttonProps?: {};
  textProps?: {};
  rightIcon?: any;
}) => {
  return (<Button 
    variant={variant}
    w='100%'
    onClick={onClick} 
    size='sm'
    rightIcon={rightIcon}
    {...buttonProps}
    >
      <Text {...textProps}>{text}</Text>
    </Button>
  )
})

export const GenerationImage = React.memo(({
  src = '/first.webp',
  containerProps = {},
  onClickToGallery,
}:{
  src?: string;
  containerProps?: {};
  onClickToGallery?: () => void;
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  console.log('isLoaded', isLoaded);

  return (<Box display='flex' flexDir='column' alignItems='center' justifyContent='center' w='100%' h='100%' {...containerProps}>
      <Box w='calc(100% - 4rem)' h='100%' border='thin solid #d7d7d7' p='2rem' borderRadius='0.2rem' mb='1rem'>
        <Box position='relative' w='100%' h='100%'>
          <Skeleton
            height='max-content'
            width='100%'
            isLoaded={isLoaded}
            startColor='blue.100' endColor='blue.300'
            fadeDuration={1}
            speed={2}
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
            {/* <Box w='100%' h='5rem' bg='blue'>123</Box> */}
          </Skeleton>
          <Box w='100%' h='100%' display='flex' alignItems='center' justifyContent='center' flexDir='column'>
            <Box display='flex' flexDir='row' mb='0.5rem'>
              <GenerationButton variant='grayBgSolid' text='download on your device' textProps={{ px: '3rem', mr: '0.5rem' }} buttonProps={{ mr: '0.5rem' }} onClick={() => console.log(true)} />
              <GenerationButton variant='grayBgSolid' text='save to our gallery' onClick={() => console.log(true)} />
            </Box>
            <Box display='flex' flexDir='row'>
              <GenerationButton variant='grayBgSolid' text='share' buttonProps={{ mr: '0.5rem' }} onClick={() => console.log(true)} rightIcon={<IoIosShareAlt />} />
              <GenerationButton variant='blackBgSolid' text='write a new description' textProps={{ px: '5rem' }} onClick={() => console.log(true)} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box textAlign='center'>
        <Button rightIcon={<IoIosArrowForward />} onClick={onClickToGallery}>go to gallery</Button>
      </Box>
    </Box>
  ) 
})
