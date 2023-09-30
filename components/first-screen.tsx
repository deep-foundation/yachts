import { AspectRatio, Box, Flex, Hide, IconButton, Image, Img, Show, SimpleGrid, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { TextBlock } from './text-block';


const Arrow = React.memo(() => {  
  return (<svg width="44" height="15" viewBox="0 0 44 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 15L0.349364 0.750001L43.6506 0.749997L22 15Z" fill="white"/>
    </svg>
  )
})

const Poster = React.memo(() => {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');

  return (<Box w='100%' position='relative' height='100%'>
      <AspectRatio maxW='100%' ratio={16 / 8} height='100%'>
        <Img loading="lazy" src='/first.webp' alt='yacht' width='100%' height='calc(100% - 7rem)' />
      </AspectRatio>
      <SimpleGrid templateColumns='0.5fr 1fr' spacing={10} position='absolute' top={0} left={0} pl='5%' pt='5%' width='calc(100% - 5%)'>
        <Flex direction='column' align='center' justify='center' w='100%' textAlign='center'>
          <Image src='/main.svg' alt='logo crystal yacht' width='max-content' height='max-content' mb='2rem'/>
          {isSmallerThan800 
          ? null 
          : <Text as='h2' textStyle='upperMenu' color='whiteText' width='max-content'>Crystal Yachts - Future is here</Text>}
        </Flex>
      </SimpleGrid>
    </Box>
  )
})

export const FirstScreen = React.memo(({
  display,
}:{
  display: string;
}) => {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const [isSmallerThan1350] = useMediaQuery('(max-width: 1350px)');
  
  return (<Box 
      display={display}
      justifyContent='center'
      flexDir='column'
      w='100%'
    >
      <Poster />
      <Flex direction='column' align='center' justify='center' width='100%' mb='2rem'>
        <SimpleGrid
          columns={isSmallerThan800 ? 1 : 2}
          spacing={isSmallerThan1350 ? '5rem' : '10rem'}
          p={isSmallerThan800 ? '1rem 1rem' : isSmallerThan1350 ? '3rem 4rem' : '7rem 12rem'}
         >
          <Flex direction='column' align='center' justify='flex-start'>
            {isSmallerThan800 ? null : <Img loading="lazy" src='/first1.webp' alt='yacht' width='100%' sx={{mb: '3rem'}} />}
            <Show breakpoint='(max-width: 800px)'>
              <Flex direction='column' align='center' justify='flex-start' mb='2rem'>
                <TextBlock 
                  textStyles='semiBoldText' 
                  propsText={{
                    sx: {
                      textAlign: 'center',
                      mb: '1rem',
                    }
                  }}
                  text='Discover a new era of responsible luxury, where cutting-edge technology meets environmental consciousness' />
                <Img loading="lazy" src='/line.svg' alt='line' sx={{mb: '1.5rem'}} />
                <TextBlock 
                  textStyles='semiBoldText' 
                  propsText={{
                    sx: {
                      textAlign: 'center',
                      mb: '1rem',
                    }
                  }}
                  text='We envisioned yacht to be a blend of cutting-edge technology, innovative design, and sustainable features' />
                <Img loading="lazy" src='/line.svg' alt='line' sx={{mb: '1.5rem'}} />
                <TextBlock 
                  textStyles='semiBoldText' 
                  propsText={{
                    sx: {
                      textAlign: 'center',
                      mb: '3rem',
                    }
                  }}
                  text='Advanced Propulsion Systems Autonomous Navigation Interactive Interfaces' />
                <Img loading="lazy" src='/first2.webp' alt='yacht' width='100%' />
              </Flex>
            </Show>
            <TextBlock text='Crystal Yachts is committed to introducing innovative ideas and technology to meet both the technical and aesthetic needs of our customers. We pay close attention to project design and technical perfection, so each of our yachts is unique and exceptional' mb='2rem' />
            <TextBlock title='save the planet' text='The basic principle of our work is a combination of advanced technology and environmental responsibility. Modern technology allows us to create a yacht that uses natural energy sources such as the power of wind, sun and sea. We are creating a new trend in yachting: sustainability along with high autonomy, which reduces restrictions and enhanced comfort' mb='2rem' />
            <TextBlock title='OUR PHILOSOPHY' text='Our yachts are not just for short trips along the coast — we create real residences on the water, where you can comfortably live and travel the world for years, entering enclosed waters inaccessible to most yachts' />
          </Flex>

          <Hide breakpoint='(max-width: 799px)'>
            <Flex direction='column' align='center' justify='flex-start'>
              <TextBlock 
                textStyles='semiBoldText' 
                propsText={{
                  sx: {
                    textAlign: 'center',
                    mb: '1rem',
                  }
                }}
                text='Discover a new era of responsible luxury, where cutting-edge technology meets environmental consciousness' />
              <Img loading="lazy" src='/line.svg' alt='line' sx={{mb: '1.5rem'}} />
              <TextBlock 
                textStyles='semiBoldText' 
                propsText={{
                  sx: {
                    textAlign: 'center',
                    mb: '1rem',
                  }
                }}
                text='We envisioned yacht to be a blend of cutting-edge technology, innovative design, and sustainable features' />
              <Img loading="lazy" src='/line.svg' alt='line' sx={{mb: '1.5rem'}} />
              <TextBlock 
                textStyles='semiBoldText' 
                propsText={{
                  sx: {
                    textAlign: 'center',
                    mb: '3rem',
                  }
                }}
                text='Advanced Propulsion Systems Autonomous Navigation Interactive Interfaces' />
              <Img loading="lazy" src='/first2.webp' alt='yacht' width='100%' />
            </Flex>
          </Hide>
        </SimpleGrid>
      </Flex>

      <Text as='h1' textStyle='h2' textAlign='center'>WHY CRYSTAL YACHTS?</Text>

      <Flex direction='column' align='center' justify='center' width='100%'>
        <SimpleGrid
          columns={isSmallerThan800 ? 1 : 2}
          spacing={isSmallerThan1350 ? '2rem' : '10rem'}
          p={isSmallerThan800 ? '1rem 1rem' : isSmallerThan1350 ? '3rem 4rem' : '7rem 12rem'}
        >
          <Flex direction='column' align='center' justify='flex-start'>
            <TextBlock title='Low operating costs' text='We strive to achieve high autonomy of our yachts through low fuel (energy) consumption. We use alternative energy sources: solar panels, storage batteries, fuel cells and innovative sailing systems. Increasing yacht autonomy refers to enhancing the self-sufficiency and independence of the yacht, reducing its reliance on external resources and human intervention' mb='2rem' />
            <TextBlock title='Sustainable yachting' text='Although yachts are traditionally considered to be recreational and leisure, today’s eco-trends are setting a new understanding of yachts as environmentally friendly and economical means of transportation. Catamarans and yachts powered by renewable energy are not only superior to their non-hybrid counterparts in terms of autonomy but also preserve the eco-environment of the seas and oceans. Our projects promotes responsible yachting by adhering to strict guidelines for marine life protection, waste disposal, and respecting fragile ecosystems' mb='2rem' />
            <TextBlock title='Engineering excellence' text='Spacious living and utility areas, high level of comfort, maximum automatization of all systems — all this makes our yachts fully independent. We build yachts with a length of more than 80 feet to accommodate all the necessary equipment without compromising the comfort of the owner and his guests, while obtaining a high level of seaworthiness' mb='2rem' />
            <TextBlock title='Each yacht – Is the piece of art' text='We create unique and luxurious interiors, implementing the most progressive ideas. Each new project allows us to push the boundaries of imagination, space planning and apply new design solutions. Sea is a place to live and enjoy' mb='2rem' />
          </Flex>

          <Flex direction='column' align='center' justify='flex-start'>
            <AspectRatio w='100%' ratio={isSmallerThan800 ? 4 / 3 : 3 / 4} height='100%'>
              <Img loading="lazy" src='/first3.webp' alt='yacht' width='100%' height='100%' />
            </AspectRatio>
          </Flex>
        </SimpleGrid>
      </Flex>

      <Flex direction='column' align='center' justify='center' width='100%'>
        <Img loading="lazy" src='/first4.svg' alt='yacht' width='100%' height='100%' p={isSmallerThan800 ? '3rem 1.5rem' : '3rem 14.5rem'} />
      </Flex>
    </Box>
  )
})
