import { Box, Button, Center, Image } from '@chakra-ui/react';
import React, { useState } from 'react';


const GenerationStartButton = React.memo(({ onClick }:{ onClick?: () => void; }) => {
  return (<Button 
      variant='blackBgSquareSolid' 
      w='40%'
      onClick={onClick} 
    >start creating</Button>
  )
})

const GenerationForm = React.memo(({ onClick }:{ onClick?: () => void; }) => {
  return (<Box display='flex' flexDir='column' alignItems='center' justifyContent='center' w='100%'>
      <Box display='flex' alignItems='center' justifyContent='center' w='100%' pb='1rem'>
        <Button variant='formButton' w='100%' mr='2rem'>monohull</Button>
        <Button variant='formButton' w='100%'>catamaran</Button>
      </Box>
      <Box display='flex' alignItems='center' justifyContent='center' w='100%' pb='2.75rem'>
        <Box display='flex' alignItems='center' justifyContent='center' w='100%' mr='2rem'>
          <Button variant='formButton' w='100%' mr='0.5rem'>monohull</Button>
          <Button variant='formButton' w='100%'>catamaran</Button>
        </Box>
        <Box display='flex' alignItems='center' justifyContent='center' w='100%'>
          <Button variant='formButton' w='100%' mr='0.5rem'>monohull</Button>
          <Button variant='formButton' w='100%'>catamaran</Button>
        </Box>
      </Box>
      <Button 
        variant='solid' 
        onClick={onClick} 
      >generate image</Button>
    </Box>
  )
})

export const YachtsGeneration = React.memo(({ onClick }:{ onClick?: () => void; }) => {
  const [startCreate, setStartCreate] = useState(false);

  return (<Center>
      <Box 
        display='flex' 
        flexDir='column'
        alignItems='center'
        justifyContent='center'
        w='max-content'
        pt='7.5rem'
      >
        {startCreate === false ? <Box textStyle='h3' pb='2.75rem'>create your own design</Box> : null}
        <Box pb='1.75rem' w='100%'>
          <Image src='/logo.svg' alt="Cristal Yacht Logo" width='100%' />
        </Box>
        <Box textStyle='h4' pb='7rem'>Crystal Yachts - Future is here</Box>
        {
          startCreate === false
          ? <GenerationStartButton onClick={() => {
            setStartCreate(true);
            console.log('start creating', startCreate);
          }} />
          : <GenerationForm />
        }
      </Box>
    </Center>
  );
})