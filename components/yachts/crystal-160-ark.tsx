import { AspectRatio, Box, Img, List, ListItem, Text, UnorderedList, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { TextBlock, TextBlockYachtDescription } from '../text-block';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';


export const Crystal160Ark = React.memo(() => {
  const [isSmallerThan500] = useMediaQuery('(max-width: 500px)');
  const [isSmallerThan900] = useMediaQuery('(max-width: 900px)');
  const [isSmallerThan1200] = useMediaQuery('(max-width: 1200px)');

  const images = [
    {id: 3, src:'/yachts/crystal_160_ark/1.webp'},
    {id: 4, src:'/yachts/crystal_160_ark/2.webp'},
    {id: 5, src:'/yachts/crystal_160_ark/3.webp'},
    {id: 6, src:'/yachts/crystal_160_ark/4.webp'},
    {id: 7, src:'/yachts/crystal_160_ark/5.webp'},
  ]


  return (<Box display='flex' flexDirection='column' p={isSmallerThan900 ? '2rem 2rem' : '4rem 8rem'} >
      <Text as='h1' textStyle='yachtBlueTitle' align='left'  mb={isSmallerThan900 ? '2rem' : '4rem'}>CRYSTAL 160 The Ark</Text>

      <Box display='grid' 
          justify-items="center"
          align-items="center"
          gridTemplateColumns={isSmallerThan500 ? '1fr' : '1fr 1fr'} 
          columnGap={isSmallerThan500 ? 0 : isSmallerThan900 ? '2rem' : '4rem'} 
          mb={isSmallerThan900 ? '2rem' : '4rem'}>
        <Box mb={isSmallerThan500 ? '1rem' : 0}>
          <TextBlock 
            mb={isSmallerThan900 ? '0.5rem' : '1.5rem'}
            title='EXTERIOR' 
            textStylesTitle='yachtBlockTitle'
            text="The exterior design style is dictated by maximum efficiency and beauty. The exterior design strongly influences the power consumption of the main engines, so our main objective was to seamlessly combine aerodynamics, many solar panels and impressive open decks. The number of protruding structural elements has been reduced to a minimum. The catamaran has ideal proportions between the hull and the superstructure. The superstructure is integrated into the hull volume for efficient aerodynamics The superstructure is glazed around the perimeter to the full height of the deck. The roof of the superstructure is visually separated from the hull, fully solar-paneled and sloped on the perimeter to reduce wind resistance both on the sides and on the stern." 
            />
          <TextBlock
            text="This will waste less energy in keeping the catamaran on course in headwinds and maneuvering, allowing for more precise and efficient steering. Such a solution reduces the noise created by strong winds. All external ladders are hidden as much as possible for better visibility and cleaner design. The stern consists of three open decks which give the impression of solidity and comfort at the same time."
          />
        </Box>
        <Box display="grid">
          <AspectRatio ratio={isSmallerThan900 ? 1.5 : 1.8} maxW='100%' my={isSmallerThan900 ? '1.5rem' : '2rem'}>
            <Img loading="lazy" src='/yachts/crystal_160_ark/5.webp' alt='crystal160ark' />
          </AspectRatio>
          </Box>
      </Box>

      <Box display='grid' gridTemplateColumns={isSmallerThan500 ? '1fr' : '1fr 1fr'} columnGap={isSmallerThan500 ? 0 : isSmallerThan900 ? '2rem' : '4rem'} mb={isSmallerThan900 ? '2rem' : '4rem'}>
        <AspectRatio 
          ratio={isSmallerThan900 ? 1.5 : 1.8} 
          w='100%'
          height={isSmallerThan500 ? '100%' : 'auto'}
          mr={isSmallerThan500 ? 0 : isSmallerThan900 ? '2rem' : '4rem'}
        >
          <Img loading="lazy" src='/yachts/crystal_160_ark/2.webp' alt='crystal160ark' />
        </AspectRatio>
        <Box mt={isSmallerThan500 ? '1rem' : 0}>
          <TextBlock 
            mb={isSmallerThan900 ? '0.5rem' : '1.5rem'}
            title='INTERIOR' 
            textStylesTitle='yachtBlockTitle'
            text="The most important advantage of a catamaran over a monohull is its beam, since a catamaran can be almost twice as wide as a monohull for the same length. A catamaran consists of two hulls connected by a bridge. Interiors will include more than 10 000 square feet or 1000 square meters and huge amount of deck space which can be configured to owner’s needs." 
          />
          <TextBlock
            text={[
              "There are 6 suites on the catamaran, it is already wrong to call such premises as cabins.",
              <br/>,
              <UnorderedList>
                <ListItem>Master suit 120m2 with 50m2 of open deck area;</ListItem>
                <ListItem>VIP suit 100m2 with 80m2 of open deck area;</ListItem>
                <ListItem>4 Guest suits 40m2.</ListItem>
              </UnorderedList>,
              "All suits have walk-in wardrobe. Salon with dining area, luxury lounge zone and etc. 200m2+.",
            ]}
          />
        </Box>
      </Box>

      <Box display='grid' gridTemplateColumns={isSmallerThan500 ? '1fr' : '1fr 1fr'} columnGap={isSmallerThan500 ? 0 : isSmallerThan900 ? '2rem' : '4rem'} mb={isSmallerThan900 ? '2rem' : '7rem'}>
        <Box mb={isSmallerThan500 ? '1rem' : 0}>
          <TextBlock 
            mb={isSmallerThan900 ? '1.5rem' : '2rem'}
            title='Natural Stabilization' 
            textStylesTitle='yachtBlockTitle'
            text="The large beam of a catamaran gives natural stabilization, which is less in amplitude than a monohull. Excellent stabilization at anchor and underway, plus a large interior volume, make this catamaran a real big, comfortable residence for the whole family, where you'll forget you're in open seas." 
            />
          <TextBlock 
            mb={isSmallerThan900 ? '1.5rem' : '2rem'}
            title='TECHNOLOGIES' 
            textStylesTitle='yachtBlockTitle'
            text="In addition, the large beam makes it possible to integrate 400 m2 of solar panels and 150 m2 of retractable panels into the aerodynamic silhouette, and at the same time has huge open decks for recreation. This large number of solar panels makes it perfectly possible to do without a generator and even to store energy for night use. The Skysail system will allow you to sail at 3-6 knots in favorable weather. The catamaran is technologically and structurally suitable for the installation of hydrogen-based fuel cells. The ventilation system allows a significant reduction of energy consumption for air conditioning, as well as improved air quality in all interior spaces. The use of these energy systems, and the optimization of energy consumption on yacht, gives enormous autonomy. You will be able to travel and live aboard in remote parts of the world without having to worry about where to refuel or dock." 
            />
        </Box>
        <Box display="grid" my={isSmallerThan900 ? '0rem' : '2.5rem'}>
          <AspectRatio ratio={isSmallerThan900 ? 1.5 : 1.8} maxW='100%'>
            <Img loading="lazy" src='/yachts/crystal_160_ark/4.webp' alt='crystal160ark' />
          </AspectRatio>
        </Box>
      </Box>

      <Box display='flex' flexDirection='column' px={isSmallerThan900 ? '2rem' : isSmallerThan1200 ? '3rem' : '5rem'} mb={isSmallerThan900 ? '2rem' : '7rem'}>
        <Box width='25%' height='0.05rem' alignSelf='center' bg='text' mb='1.5rem' />
        <TextBlock
          textStyles='semiBoldText' 
          propsText={{
            sx: {
              textAlign: 'center',
              mb: '1.5rem',
            }
          }}
          text="This catamaran is a large autonomous yacht that is ready to move you anywhere in the world in comfort" />
        <Box width='25%' height='0.05rem' alignSelf='center' bg='text'  />
      </Box>
      
      <Text textStyle='yachtDetailUppercaseTitleText' align='left' mb={isSmallerThan900 ? '0.5rem' : '1rem'}>Video Review</Text>
      <AspectRatio ratio={16 / 9} maxW='100%' mb={isSmallerThan500 ? '0.8rem' : '1.5rem'}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/TSlHn0ursok?si=9X36GZrFdUb9Q3sF" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </AspectRatio>
      <Text textStyle='yachtsBlueTitle' as='h4' align='right' mb={isSmallerThan900 ? '2rem' : '5rem'}>Crystal 160 The Ark</Text>

      <Text textStyle='yachtDetailUppercaseTitleS48Text' align={ isSmallerThan500 ? 'center':'left'}  mb={isSmallerThan500 ? '0.8rem' : '1.5rem'}>MAIN SPECIFICATION</Text>
      <Box display='grid' gridTemplateColumns={isSmallerThan500 ? '1fr' : '1fr 1fr'} columnGap={isSmallerThan500 ? 0 : isSmallerThan1200 ? '2rem' : '4rem'} mb={isSmallerThan900 ? '2rem' : '4rem'}>
        <Box 
            mb={isSmallerThan500 ? '0.8rem' : '0'}
            textStyle="yachtDetailRegularText"
            >
            <List spacing={3}>
              <ListItem>
                Type: Catamaran
              </ListItem>
              <ListItem>
                Length: 50 m 
              </ListItem>
              <ListItem>
                Beam: 18 m
              </ListItem>
              <ListItem>
                Guest cabins: 6 (12 guests)
              </ListItem>
            </List>
          </Box>

          <Box 
            textAlign={isSmallerThan500 ? 'left' : 'right'}
            textStyle="yachtDetailSemiboldText"
            >
            <List spacing={3}>
              <ListItem>
                Solar panels: 400+ sq.m.
              </ListItem>
              <ListItem>
                Batteries: 1000+ kWh
              </ListItem>
              <ListItem>
                Hybrid propulsion
              </ListItem>
              <ListItem>
                Range: 10000+ NM
              </ListItem>
            </List>
         </Box>
      </Box>
      
      <AspectRatio ratio={16 / 9} maxW='100%' mb={isSmallerThan900 ? '2rem' : '5rem'}>
        <Swiper navigation={true} modules={[Navigation, Pagination]} className="mySwiper">
            {
                images.map(image => {
                return (<SwiperSlide>
                    <Img loading="lazy" src={image.src} alt='crystal160ark' />
                    </SwiperSlide>)
                })
            }
        </Swiper>
      </AspectRatio>
    </Box>
  )
})