import { AspectRatio, Box, Img, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { TechnologiesCard } from './shadow-card';
import { technologies, text, text2 } from './technologies-card-array';


export const Technologies = React.memo(() => {
  const [isSmallerThan500] = useMediaQuery('(max-width: 500px)');
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const [isSmallerThan1200] = useMediaQuery('(max-width: 1200px)');

  const refText1 = React.useRef<HTMLDivElement>(null);
  const refText2 = React.useRef<HTMLDivElement>(null);
  const heightBlockText1 = refText1.current?.clientHeight;
  const heightBlockText2 = refText2.current?.offsetHeight;
  console.log('heightBlockText1', heightBlockText1);

  return (<Box display='flex' flexDir='column' p={isSmallerThan1200 ? '1rem' : '5rem'} mb={isSmallerThan500 ? '2rem' : '4rem'}>
      <Box>
        <Text as='h1' textStyle='h1' p='1rem' color='text' align={isSmallerThan800 ? 'center' : 'left'}>Technologies</Text>
      </Box>

      <Box 
        display='flex'
        flexDirection='column'
        columnGap={isSmallerThan500 ? '1rem' : '5rem'}
        p={isSmallerThan800 ? '1.5rem 1rem' : '3rem 3rem'}
      >
        <Box p={isSmallerThan800 ? 0 : '1rem 2rem'} mb={isSmallerThan500 ? '1rem' : isSmallerThan800 ? '2rem' : '4rem'}>
          <Text textStyle='technologiesUppercaseText' mb={isSmallerThan800 ? '2rem' : '5rem'} align='justify'>In the luxury world of yachting, opulence and splendor are often synonymous with excess. However, recent advancements in marine engineering, technology, and an increasing environmental awareness have spurred a paradigm shift in the industry, promoting the concept of sustainable yachting. Today's luxury vessels are no longer solely defined by their size and extravagance but also by their environmental footprint and adherence to sustainability principles</Text> 
          <Text textStyle='technologiesUppercaseSB24Text' align='center' mb={isSmallerThan800 ? '2rem' : '5rem'} px={isSmallerThan800 ? 0 : '4rem'}>Embrace the future of propulsion with electric and hybrid systems for cleaner, quieter, and more efficient cruising</Text> 
          <Box display='flex' flexDirection={isSmallerThan500 ? 'column-reverse' : 'column'}>
            <Text textStyle='technologiesUppercaseText' mb={isSmallerThan500 ? 0 : isSmallerThan800 ? '1rem' : '4rem'} align='justify'>Energy efficiency is a crucial component of sustainable yachting. Hydrodynamic hull designs and lightweight materials improve fuel efficiency by reducing drag and weight. In addition, advanced energy management systems can monitor and optimize energy consumption onboard</Text> 
            <AspectRatio ratio={16 / 9} maxH={isSmallerThan800 ? '30vmax' : '100%'} mb={isSmallerThan500 ? '1.5rem' : 0}>
              <Img src='/tech1.webp' alt='technologies yacht photo' width='100%' objectFit='scale-down' />
            </AspectRatio>
          </Box>
        </Box>
        <Box 
          display={isSmallerThan500 ? 'flex' : 'grid' }
          flexDirection={isSmallerThan500 ? 'column' : 'unset'}
          gridTemplateColumns='1fr 1fr'
          rowGap={isSmallerThan1200 ? '1rem' : '4rem'}
          columnGap={isSmallerThan1200 ? '2rem' : '8rem'}
          alignItems='center' 
          mb={isSmallerThan800 ? '2rem' : '8rem'}
        >
          {technologies.map(t => <TechnologiesCard title={t.title} description={t.description} key={t.id} textStylesTitle='yachtBlockTitle' />)}
        </Box>

        <Text 
          textStyle='technologiesUppercaseSB36Text' 
          align='center' 
          mb={isSmallerThan800 ? '2rem' : '8rem'} 
          px={isSmallerThan800 ? '0.5rem' : '4rem'}
        >To make project totally carbon neutral offsetting</Text>

        <Text textStyle={isSmallerThan500 ? 'technologiesUppercaseText' : 'technologiesUppercaseSB24Text'} align={isSmallerThan500 ? 'justify' : 'center'} mb={isSmallerThan800 ? '2rem' : '5rem'} px={isSmallerThan800 ? '0.5rem' : '4rem'}>Advanced Energy Management Systems: Implementing advanced energy management systems can optimize the energy consumption of a yacht. These systems use algorithms and sensors to monitor and control the power distribution, reducing energy waste and improving efficiency. Waste heat recovery, could be the option to generate extra electricity using ORC cycle. This solution can increase efficiency by another 6-10%.</Text> 

        <Box 
          display={isSmallerThan500 ? 'flex' : 'grid'} 
          gridTemplateColumns={isSmallerThan500 ? '1fr' : '1fr 1fr'} 
          columnGap={isSmallerThan800 ? '2rem' : '4rem'}
          mb={isSmallerThan500 ? '2rem' : '4rem'} 
          flexDirection='column-reverse'
        >
          <Box display='flex' flexDirection='column'
            ref={refText1}
            sx={{
              '& > *:not(:last-of-type)': {
                mb: isSmallerThan500 ? '1.5rem' : '3rem',
              }
            }}
          >
            {text.map(t => <Text textStyle='upperMenu' textAlign='justify' lineHeight='1.5' key={t.id}>{t.text}</Text>)}
          </Box>
          <AspectRatio 
            ratio={isSmallerThan500 ? 16 / 9 : 2 / 3} 
            height={isSmallerThan500 ? '30vmax' : '100%'}
            w='100%' 
            mb={isSmallerThan500 ? '1.5rem' : 0}
          >
            <Img src='/tech2.webp' alt='technologies yacht photo' width='100%' objectFit='scale-down' />
          </AspectRatio>
        </Box>

        <Box display='grid' gridTemplateColumns={isSmallerThan500 ? '1fr' : '1fr 1fr'} columnGap={isSmallerThan800 ? '2rem' : '4rem'}>
          <AspectRatio ratio={isSmallerThan500 ? 16 / 9 : 2 / 3} maxH={isSmallerThan500 ? '30vmax' : '100%'} w='100%' mb={isSmallerThan500 ? '1.5rem' : 0}>
            <Img src='/tech3.webp' alt='technologies yacht photo' width='100%' objectFit='scale-down' />
          </AspectRatio>
          <Box display='flex' flexDirection='column'
            ref={refText2}
            sx={{
              '& > *:not(:last-of-type)': {
                mb: isSmallerThan500 ? '1.5rem' : '3rem',
              }
            }}
          >
            {text2.map(t => <Text textStyle='upperMenu' lineHeight='1.5' textAlign='justify' key={t.id}>{t.text}</Text>)}
          </Box>
        </Box>
      </Box>
    </Box>)
})