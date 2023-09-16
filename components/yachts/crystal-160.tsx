import { AspectRatio, Box, Img, List, ListItem, Text, UnorderedList, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { TextBlock, TextBlockYachtDescription } from '../text-block';


export const Crystal160 = React.memo(() => {
  const [isSmallerThan500] = useMediaQuery('(max-width: 500px)');
  const [isSmallerThan900] = useMediaQuery('(max-width: 900px)');
  const [isSmallerThan1200] = useMediaQuery('(max-width: 1200px)');

  return (<Box display='flex' flexDirection='column' p={isSmallerThan900 ? '2rem 2rem' : '4rem 8rem'}>
      <Text as='h1' textStyle='yachtBlueTitle' align='left'>CRYSTAL 160</Text>
      <Text as='h2' textStyle='yachtBlueSubtitle' align='left' mb={isSmallerThan900 ? '2rem' : '4rem'}>CRYSTAL MEGAYACHT</Text>

      <Box display='grid' gridTemplateColumns={isSmallerThan500 ? '1fr' : '1fr 1fr'} columnGap={isSmallerThan500 ? 0 : isSmallerThan900 ? '2rem' : '4rem'} mb={isSmallerThan900 ? '2rem' : '4rem'}>
        <Box mb={isSmallerThan500 ? '1rem' : 0}>
          <TextBlock 
            mb={isSmallerThan900 ? '0.5rem' : '1.5rem'}
            title='EXTERIOR' 
            textStylesTitle='yachtBlockTitle'
            text="We went further in size and created a 50-meter concept. Super catamaran, which by its internal and external areas is comparable to a 70-80-meter yacht." 
            />
          <TextBlock 
            mb={isSmallerThan900 ? '0.5rem' : '1.5rem'}
            text="The exterior design style is dictated by maximum efficiency and beauty. The exterior design strongly influences the power consumption of the main engines, so our main objective was to seamlessly combine aerodynamics, many solar panels and impressive open decks. The number of protruding structural elements has been reduced to a minimum." 
            />
          <TextBlock 
            text="The catamaran has ideal proportions between the hull and the superstructure. The superstructure is integrated into the hull volume for efficient aerodynamics The superstructure is glazed around the perimeter to the full height of the deck. The roof of the superstructure is visually separated from the hull, fully solar-paneled and sloped on the perimeter to reduce wind resistance both on the sides and on the stern. This catamaran is a large autonomous yacht that is ready to move you anywhere in the world in comfort." 
          />
        </Box>
        <Box>
          <AspectRatio ratio={isSmallerThan900 ? 1.5 : 1.8} maxW='100%' mb={isSmallerThan900 ? '1.5rem' : '2rem'}>
            <Img src='/first2.webp' alt='crystal160' />
          </AspectRatio>
          <TextBlock
            text="This will waste less energy in keeping the catamaran on course in headwinds and maneuvering, allowing for more precise and efficient steering. Such a solution reduces the noise created by strong winds. All external ladders are hidden as much as possible for better visibility and cleaner design. The stern consists of three open decks which give the impression of solidity and comfort at the same time" />
        </Box>
      </Box>

      <Box display='grid' gridTemplateColumns={isSmallerThan500 ? '1fr' : '1fr 1fr'} columnGap={isSmallerThan500 ? 0 : isSmallerThan900 ? '2rem' : '4rem'} mb={isSmallerThan900 ? '2rem' : '4rem'}>
        <AspectRatio 
          ratio={isSmallerThan900 ? 1.5 : 1.8} 
          w='100%'
          height={isSmallerThan500 ? '100%' : 'auto'}
          mr={isSmallerThan500 ? 0 : isSmallerThan900 ? '2rem' : '4rem'}
        >
          <Img src='/first2.webp' alt='crystal160' />
        </AspectRatio>
        <Box mt={isSmallerThan500 ? '1rem' : 0}>
          <TextBlock 
            title='INTERIOR' 
            textStylesTitle='yachtBlockTitle'
            text="The most important advantage of a catamaran over a monohull is its beam, since a catamaran can be almost twice as wide as a monohull for the same length. A catamaran consists of two hulls connected by a bridge. Interiors will include more than 10 000 square feet or 1000 square meters and huge amount of deck space which can be configured to owner’s needs." 
          />
          <TextBlock 
            text="There are 6 suites on the catamaran, it is already wrong to call such premises as cabins.Master suit 120m2 with 50m2 of open deck area.VIP suit 100m2 with 80m2 of open deck area.4 Guest suits 40m2.All suits have walk-in wardrobe.Salon with dining area, luxury lounge zone and etc. 200m2 +" 
          />
        </Box>
      </Box>

      <Box display='grid' gridTemplateColumns={isSmallerThan500 ? '1fr' : '1fr 1fr'} columnGap={isSmallerThan500 ? 0 : isSmallerThan900 ? '2rem' : '4rem'} mb={isSmallerThan900 ? '2rem' : '7rem'}>
        <Box mb={isSmallerThan500 ? '1rem' : 0}>
          <TextBlock 
            mb={isSmallerThan900 ? '1.5rem' : '2rem'}
            title='TECHNOLOGIES' 
            textStylesTitle='yachtBlockTitle'
            text="The catamaran is technologically and structurally suitable for the installation of hydrogen-based fuel cells. The ventilation system allows a significant reduction of energy consumption for air conditioning, as well as improved air quality in all interior spaces. The use of these energy systems, and the optimization of energy consumption on yacht, gives enormous autonomy. You will be able to travel and live aboard in remote parts of the world without having to worry about where to refuel or dock." 
            />
          <TextBlock 
            title='NATURAL STABILIZATION'
            textStylesTitle='yachtBlockTitle'
            text="The large beam of a catamaran gives natural stabilization, which is less in amplitude than a monohull. Excellent stabilization at anchor and underway, plus a large interior volume, make this catamaran a real big, comfortable residence for the whole family, where you'll forget you're in open seas." 
          />
        </Box>
        <Box>
          <AspectRatio ratio={isSmallerThan900 ? 1.5 : 1.8} maxW='100%'>
            <Img src='/first2.webp' alt='crystal160' />
          </AspectRatio>
        </Box>
      </Box>

      <Box display='flex' flexDirection='column' px={isSmallerThan900 ? '2rem' : isSmallerThan1200 ? '6rem' : '13rem'} mb={isSmallerThan900 ? '2rem' : '7rem'}>
        <Box width='25%' height='0.03rem' alignSelf='center' bg='text' mb='1.5rem' />
        <TextBlock
          textStyles='semiBoldText' 
          propsText={{
            sx: {
              textAlign: 'center',
              mb: '1.5rem',
            }
          }}
          text='This catamaran is a large autonomous yacht that is ready to move you anywhere in the world in comfort' />
        <Box width='25%' height='0.03rem' alignSelf='center' bg='text' />
      </Box>
      
      <AspectRatio ratio={16 / 9} maxW='100%' mb={isSmallerThan900 ? '2rem' : '5rem'}>
        <Img src='/first2.webp' alt='crystal160' />
      </AspectRatio>
      <Text textStyle='technologiesUppercaseText' as='h4' mb={isSmallerThan500 ? '0.8rem' : '1.5rem'}>VIDEO REVIEW</Text>
      
      <AspectRatio ratio={16 / 9} maxW='100%' mb={isSmallerThan500 ? '0.8rem' : '1.5rem'}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/W_CA-39p-5Y?si=r-fz_J7sW0VkLrgW" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </AspectRatio>
      <Text textStyle='yachtsBlueTitle' as='h4' align='right' mb={isSmallerThan900 ? '2rem' : '5rem'}>crystal 160</Text>

      <Text textStyle='technologiesUppercaseText' as='h4' mb={isSmallerThan500 ? '0.8rem' : '1.5rem'}>MAIN SPECIFICATION</Text>
      <Box display='grid' gridTemplateColumns={isSmallerThan500 ? '1fr' : '1fr 1fr'} columnGap={isSmallerThan500 ? 0 : isSmallerThan1200 ? '2rem' : '4rem'}>
        <TextBlock 
          mb={isSmallerThan500 ? '0.8rem' : '0'}
          text={
            <List spacing={3}>
              <ListItem>
                Design: Crystal Yachts 
              </ListItem>
              <ListItem>
                Length: 50 m / 164” 
              </ListItem>
              <ListItem>
                Beam: 18 m / 60” 
              </ListItem>
              <ListItem>
                Draft: 2.6 m / 8’’
              </ListItem>
              <ListItem>
                Living space: 1000 m² 
              </ListItem>
              <ListItem>
                Open space: 450 m² 
              </ListItem>
              <ListItem>
                Fuel: from 100 000 l/26 000 gl 
              </ListItem>
              <ListItem>
                Water: 10 000 l/2600 gl 
              </ListItem>
              <ListItem>
                Main Diesel Engines: 2 x MTU Rolls-Royce 900 kW (10V2000M72) 
              </ListItem>
            </List>
          } 
        />

        <TextBlock 
          propsText={{align: isSmallerThan500 ? 'left' : 'right'}}
          text={
            <List spacing={3}>
              <ListItem>
                Solar panels: 400 m² 
              </ListItem>
              <ListItem>
                Max.Speed (Diesel engines): 14 knots 
              </ListItem>
              <ListItem>
                Cruising Speed (electric-diesel): 8 knots 
              </ListItem>
              <ListItem>
                Economical Speed (electric): 6 knots 
              </ListItem>
              <ListItem>
                Construction place: UAE 
              </ListItem>
              <ListItem>
                Hull: Steel 
              </ListItem>
              <ListItem>
                Superstructure: Aluminium 
              </ListItem>
              <ListItem>
                Classification: - MCA,RINA,BV 
              </ListItem>
              <ListItem>
                Unrestricted Guests: 12 in 6 apartments 
              </ListItem>
              <ListItem>
                Crew: Up to 8-10 crew members in 5 cabins
              </ListItem>
            </List>
          } 
        />
      </Box>
    </Box>
  )
})