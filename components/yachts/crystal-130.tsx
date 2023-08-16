import { AspectRatio, Box, Img, List, ListItem, Text, UnorderedList, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { TextBlock } from '../text-block';


export const Crystal130 = React.memo(() => {
  const [isSmallerThan500] = useMediaQuery('(max-width: 500px)');
  const [isSmallerThan900] = useMediaQuery('(max-width: 900px)');
  const [isSmallerThan1200] = useMediaQuery('(max-width: 1200px)');

  return (<Box display='flex' flexDirection='column' p={isSmallerThan900 ? '2rem 2rem' : '4rem 8rem'}>
      <Text as='h1' textStyle='yachtBlueTitle' align='left'>CRYSTAL 130</Text>
      <Text as='h2' textStyle='yachtBlueSubtitle' align='left' mb={isSmallerThan900 ? '2rem' : '4rem'}>CRYSTAL MEGAYACHT</Text>

      <Box 
        display='grid' 
        gridTemplateColumns={isSmallerThan500 ? '1fr' : '1fr 1fr'}
        columnGap={isSmallerThan500 ? 0 : isSmallerThan900 ? '2rem' : '4rem'}  
        mb={isSmallerThan900 ? '2rem' : '4rem'}
      >
        <Box mb={isSmallerThan500 ? '1rem' : '0'}>
          <TextBlock 
            title='CRYSTAL NAVIGATOR EXPLORER 130' 
            textStylesTitle='yachtBlockTitle'
            text="A new approach to the creation of an expedition yacht based on a catamaran hull, in combination with MTU Rolls Roys hybrid propulsion, enhanced by storage batteries and a large area of ​​​​solar panels, allows to get a significant superiority over other yachts in all main characteristics." 
            />
          <TextBlock 
            text="This will waste less energy in keeping the catamaran on course in headwinds and maneuvering, allowing for more precise and efficient steering. Such a solution reduces the noise created by strong winds. All external ladders are hidden as much as possible for better visibility and cleaner design. The stern consists of three open decks which give the impression of solidity and comfort at the same time." 
          />
        </Box>
        <AspectRatio ratio={isSmallerThan900 ? 1.5 : 1.8} maxW='100%'>
          <Img src='/first2.webp' alt='crystal160' />
        </AspectRatio>
      </Box>

      <Box 
        display='grid' 
        gridTemplateColumns={isSmallerThan500 ? '1fr' : '1fr 1fr'} 
        columnGap={isSmallerThan500 ? 0 : isSmallerThan900 ? '2rem' : '4rem'}
        mb={isSmallerThan900 ? '2rem' : '4rem'}>
        <AspectRatio 
          ratio={isSmallerThan900 ? 1.5 : 1.8} 
          w='100%'
          height={isSmallerThan500 ? '100%' : 'auto'}
          mr={isSmallerThan500 ? 0 : isSmallerThan900 ? '2rem' : '4rem'}
        >
          <Img src='/first2.webp' alt='crystal160' />
        </AspectRatio>
        <Box 
          display='grid' 
          gridTemplateColumns={isSmallerThan500 ? '1fr' : '1fr 1fr'}
          columnGap={isSmallerThan500 ? 0 : isSmallerThan900 ? '2rem' : '3rem'}
          rowGap={isSmallerThan500 ? 0 : isSmallerThan900 ? '2rem' : '3rem'}
        >
          <TextBlock
            propsTitle={{align: 'center'}}
            title='Аutonomy' 
            textStylesTitle='yachtBlockTitle'
            text="The autonomy of the catamaran is 12+ months versus 3–4 months for an expedition yacht" 
            />
          <TextBlock
            propsTitle={{align: 'center'}}
            textStylesTitle='yachtBlockTitle'
            title='Maintenance costs' 
            text="Maintenance costs are 5 times less than that of a similar yacht in terms of displacement" 
            />
          <TextBlock
            propsTitle={{align: 'center'}}
            textStylesTitle='yachtBlockTitle'
            title='Space' 
            text="The catamaran has a length of 40 meters with a beam of 16 meters, the total interior area is 700 m², this is comparable to a 50–60 meter yacht" 
            />
          <TextBlock
            propsTitle={{align: 'center'}}
            textStylesTitle='yachtBlockTitle'
            title='Range' 
            text="The range without refueling with a hybrid propulsion is 20,000 nautical miles versus 10,000 nautical miles for the best expedition yacht" 
          />
        </Box>
      </Box>

      <Box display='grid' gridTemplateColumns={isSmallerThan500 ? '1fr' : '1fr 1fr'} columnGap={isSmallerThan500 ? 0 : isSmallerThan900 ? '2rem' : '4rem'} mb={isSmallerThan900 ? '2rem' : '7rem'}>
        <Box mb={isSmallerThan500 ? '1rem' : '0'}>
          <TextBlock 
            mb={isSmallerThan900 ? '2rem' : '4rem'}
            title='LIVING AREA' 
            textStylesTitle='yachtBlockTitle'
            text={
              <UnorderedList spacing={3}>
                <ListItem>
                  The largest master cabin in the class with an area of 80 m² with its own open deck of 30 m²
                </ListItem>
                <ListItem>
                  The largest VIP cabin in the class with an area of 50 m², with its own open deck of 30 m²
                </ListItem>
                <ListItem>
                  The largest guest cabins in the class with an area of 30 m² each
                </ListItem>
              </UnorderedList>
            }
          />
          <TextBlock 
            title='CONSTRUCTION'
            textStylesTitle='yachtBlockTitle'
            text={
              <UnorderedList spacing={3}>
                <ListItem>
                  Comfort and layout are much better, due to the large beam, which makes it possible to accommodate largeм living spaces
                </ListItem>
                <ListItem>
                  Natural stabilization due to the large beam 
                </ListItem>
                <ListItem>
                  The possibility to place an elevator, a helipad, and a swimming pool
                </ListItem>
              </UnorderedList>
            }
          />
        </Box>
        <Box>
          <AspectRatio ratio={isSmallerThan900 ? 1.5 : 1.8} maxW='100%'>
            <Img src='/first2.webp' alt='crystal160' />
          </AspectRatio>
        </Box>
      </Box>

      <Box 
        display='grid' 
        gridTemplateColumns={isSmallerThan500 ? '1fr' : '1fr 1fr'}
        columnGap={isSmallerThan500 ? 0 : isSmallerThan900 ? '2rem' : '4rem'}  
        mb={isSmallerThan900 ? '2rem' : '4rem'}
      >
        <AspectRatio ratio={isSmallerThan900 ? 1.5 : 1.8} maxW='100%'>
          <Img src='/first2.webp' alt='crystal160' />
        </AspectRatio>
        <Box>
          <TextBlock 
            mb={isSmallerThan900 ? '1.5rem' : '2rem'}
            title='TECHNOLOGIES' 
            textStylesTitle='yachtBlockTitle'
            text="The area of solar panels is 300 m² and storage batteries 2+ MW, allow to move or stand at an choral most without turning on the generator." 
            />
          <TextBlock 
            mb={isSmallerThan900 ? '1.5rem' : '2rem'}
            text="The combination of a large area of solar panels, storage batteries, makes you independent from marinas and ports." 
          />
          <TextBlock 
            text="The catamaran can be anchored practically without turning on diesel generators there for eliminating harmful emissions into the atmosphere. The hybrid system in combination with solar panels and a storage battery makes this catamaran the quiet test, most economical and environmentally friendly in this class, making it possible not to depend on refueling and docking for a long time." 
          />
        </Box>
      </Box>

      <Box display='flex' flexDirection='column' px={isSmallerThan900 ? '2rem' : isSmallerThan1200 ? '6rem' : '13rem'} mb={isSmallerThan900 ? '2rem' : '7rem'}>
        <Box width='25%' height='0.03rem' alignSelf='center' bg='text' mb='1.5rem' />
        <TextBlock
          textStyles='yachtBlockTitle' 
          propsText={{
            sx: {
              textAlign: 'center',
              mb: '1.5rem',
            }
          }}
          text='The most technologically advanced catamaran on the market. The lowest price on the market. Fast construction time – 18 months' />
        <Box width='25%' height='0.03rem' alignSelf='center' bg='text' />
      </Box>
      
      <AspectRatio ratio={16 / 9} maxW='100%' mb={isSmallerThan500 ? '0.8rem' : '1.5rem'}>
        <Img src='/first2.webp' alt='crystal160' />
      </AspectRatio>
      <Text textStyle='yachtsBlueTitle' as='h4' align='right' mb={isSmallerThan900 ? '2rem' : '5rem'}>crystal 130</Text>

      <Text textStyle='technologiesUppercaseText' as='h4' mb={isSmallerThan500 ? '0.8rem' : '1.5rem'}>MAIN SPECIFICATION</Text>
      <Box display='grid' gridTemplateColumns={isSmallerThan500 ? '1fr' : '1fr 1fr'} columnGap={isSmallerThan500 ? 0 : isSmallerThan1200 ? '2rem' : '4rem'}>
        <TextBlock
          propsTitle={{align: isSmallerThan500 ? 'left' : 'right'}}
          mb={isSmallerThan500 ? '0.8rem' : '0'}
          text={
            <List spacing={3}>
              <ListItem>
                Design: Crystal Yachts 
              </ListItem>
              <ListItem>
                Length: 40 m / 130” 
              </ListItem>
              <ListItem>
                Beam: 16 m / 52” 
              </ListItem>
              <ListItem>
                Draft: 2.2 m / 7,2’’
              </ListItem>
              <ListItem>
                Living space: 700 m² 
              </ListItem>
              <ListItem>
                Open space: 250 m² 
              </ListItem>
              <ListItem>
                Fuel: from 70 000 l/18 500 gl 
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
                Max. Speed (Diesel engines): 18 knots 
                Solar panels: 400 m² 
              </ListItem>
              <ListItem>
                Cruising Speed (electric-diesel): 10 knots
              </ListItem>
              <ListItem>
                Economical Speed (electric): 6 knots 
              </ListItem>
              <ListItem>
                Construction place: UAE 
              </ListItem>
              <ListItem>
                Hull: Aluminum 
              </ListItem>
              <ListItem>
                Superstructure: Aluminum 
              </ListItem>
              <ListItem>
                Classification: - MCA, RINA, BV 
              </ListItem>
              <ListItem>
                Unrestricted Guests: 12 in 6 apartments 
              </ListItem>
              <ListItem>
                Crew: Up to 7 crew members in 4 cabins
              </ListItem>
            </List>
          } 
        />
      </Box>
    </Box>
  )
})