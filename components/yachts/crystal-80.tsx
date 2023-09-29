import { AspectRatio, Box, Img, List, ListItem, Text, UnorderedList, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { TextBlock, TextBlockYachtDescription } from '../text-block';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

export const Crystal80 = React.memo(() => {
  const [isSmallerThan500] = useMediaQuery('(max-width: 500px)');
  const [isSmallerThan900] = useMediaQuery('(max-width: 900px)');
  const [isSmallerThan1200] = useMediaQuery('(max-width: 1200px)');

  const images = [
    {id: 1, src:'/yachts/crystal_80/4.jpg'},
    {id: 2, src:'/yachts/crystal_80/1.jpg'},
    {id: 3, src:'/yachts/crystal_80/2.jpg'},
    {id: 4, src:'/yachts/crystal_80/3.jpg'},
  ]

  return (<Box display='flex' flexDirection='column' p={isSmallerThan900 ? '2rem 2rem' : '4rem 8rem'}>
      <Text as='h1' textStyle='yachtBlueTitle' align='left'  mb={isSmallerThan900 ? '2rem' : '2rem'}>CRYSTAL 80</Text>

      <Box display='grid' gridTemplateColumns={isSmallerThan500 ? '1fr' : '1fr 1fr'} columnGap={isSmallerThan500 ? 0 : isSmallerThan900 ? '2rem' : '4rem'} mb={isSmallerThan900 ? '2rem' : '0rem'}>
        <Box mb={isSmallerThan500 ? '1rem' : 0}
          display="inline-grid"
          justify-items="center"
          margin="auto"
          align-items="center"
          // border="2px solid black"
        >
          <TextBlock 
            mb={isSmallerThan900 ? '0.5rem' : '3.5rem'}
            title='EXTERIOR' 
            textStylesTitle='yachtBlockTitle'
            text="The exterior features wide deck spaces, perfect for outdoor relaxation and entertainment. There's a flybridge with helm controls and seating, an aft deck for dining, and forward trampolines for lounging. The stern often includes hydraulic platforms for easy water access or launching tenders and water toys." 
            />
        </Box>
        <Box>
          <AspectRatio ratio={isSmallerThan900 ? 1.5 : 1.8} maxW='100%' mb={isSmallerThan900 ? '1.5rem' : '2rem'}>
            <Img src='/yachts/crystal_80/1.jpg' alt='crystal80' />
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
          <Img src='/yachts/crystal_80/2.jpg' alt='crystal80' />
        </AspectRatio>
        <Box 
          pt={isSmallerThan500 ? '1rem' : 0}
          display="inline-grid"
          justify-items="center"
          margin="auto"
          align-items="center"
        >
          <TextBlock 
            title='INTERIOR' 
            textStylesTitle='yachtBlockTitle'
            text="The interior is an epitome of luxury and comfort. It includes multiple spacious cabins to accommodate several guests, each equipped with private bathrooms. A fully equipped modern kitchen (or galley), a dining area, and a lounge complete the living spaces. The interior design is customizable, with high-end finishes like teak wood, marble, and premium textiles." 
          />
        </Box>
      </Box>

      <Box display='grid' gridTemplateColumns={isSmallerThan500 ? '1fr' : '1fr 1fr'} columnGap={isSmallerThan500 ? 0 : isSmallerThan900 ? '2rem' : '4rem'} mb={isSmallerThan900 ? '2rem' : '7rem'}>
        <Box mb={isSmallerThan500 ? '1rem' : 0}>
          <TextBlock 
            mb={isSmallerThan900 ? '1.5rem' : '2rem'}
            title='TECHNOLOGIES' 
            textStylesTitle='yachtBlockTitle'
            text="The boat's hybrid propulsion system includes a set of diesel engines and electric motors powered by high-capacity batteries. This design allows for versatile operation modes: solely on electric power for short distances and slow speeds, solely on diesel for higher speeds and longer distances, or a combination of both for optimized performance." 
            />
          <TextBlock 
            title='ADVANCED TECHNOLOGY'
            textStylesTitle='yachtBlockTitle'
            text="The hybrid 80-foot catamaran can be equipped with advanced technology. This includes navigation and autopilot systems, sophisticated energy management systems, solar panels to supplement battery charging." 
          />
        </Box>
        <Box>
          <AspectRatio ratio={isSmallerThan900 ? 1.5 : 1.8} maxW='100%'>
            <Img src='/yachts/crystal_80/3.jpg' alt='crystal80' />
          </AspectRatio>
        </Box>
      </Box>

      <Box display='flex' flexDirection='column' px={isSmallerThan900 ? '2rem' : isSmallerThan1200 ? '6rem' : '13rem'} mb={isSmallerThan900 ? '2rem' : '7rem'}>
        <Box width='25%' height='0.05rem' alignSelf='center' bg='text' mb='1.5rem' />
        <TextBlock
          textStyles='semiBoldText' 
          propsText={{
            sx: {
              textAlign: 'center',
              mb: '1.5rem',
            }
          }}
          text='This catamaran is a large autonomous yacht that is ready to move you anywhere in the world in comfort' />
        <Box width='25%' height='0.05rem' alignSelf='center' bg='text' />
      </Box>
      
      <Text textStyle='yachtDetailUppercaseTitleText' align='left' mb={isSmallerThan900 ? '0.5rem' : '1rem'}>Video Review</Text>
      <AspectRatio ratio={16 / 9} maxW='100%' mb={isSmallerThan500 ? '0.8rem' : '1.5rem'}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/hVmetNLf4xw?si=DEQ7JyuEqb8RCIbH" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </AspectRatio>
      <Text textStyle='yachtsBlueTitle' as='h4' align='right' mb={isSmallerThan900 ? '2rem' : '5rem'}>crystal 80</Text>

      <Text textStyle='yachtDetailUppercaseTitleS48Text' align={ isSmallerThan500 ? 'center':'left'}  mb={isSmallerThan500 ? '0.8rem' : '1.5rem'}>MAIN SPECIFICATION</Text>
      <Box display='grid' gridTemplateColumns={isSmallerThan500 ? '1fr' : '1fr 1fr'} columnGap={isSmallerThan500 ? 0 : isSmallerThan1200 ? '2rem' : '4rem'} mb={isSmallerThan900 ? '2rem' : '4rem'}>
        <TextBlock 
          mb={isSmallerThan500 ? '0.8rem' : '0'}
          textStyles="yachtDetailRegularText"
          text={
            <List spacing={3}>
              <ListItem>
                Type: Catamaran
              </ListItem>
              <ListItem>
                Length: 24.4 m / 80ft
              </ListItem>
              <ListItem>
                Beam: 12 m / 39ft
              </ListItem>
              <ListItem>
                Draft: 1.4 m / 4.5ft
              </ListItem>
              <ListItem>
                Class: MCA, RINA, BV Unrestricted
              </ListItem>
            </List>
          } 
        />

        <TextBlock 
          propsText={{align: isSmallerThan500 ? 'left' : 'right'}}
          textStyles="yachtDetailSemiboldText"
          text={
            <List spacing={3}>
              <ListItem>
                Solar power generation: 25 kWp
              </ListItem>
              <ListItem>
                Batteries: 250+ kWh
              </ListItem>
              <ListItem>
                Range - 3500 Nm
              </ListItem>
              <ListItem>
                Guest cabins – 4-6 (8-12 guests sleeps)
              </ListItem>
              <ListItem>
                Crew cabins - 2 (4 crew sleeps)
              </ListItem>
              <ListItem>
                Hull: Aluminum
              </ListItem>
            </List>
          } 
        />
      </Box>
      
      <AspectRatio ratio={16 / 9} maxW='100%' mb={isSmallerThan900 ? '2rem' : '5rem'}>
        <Swiper navigation={true} modules={[Navigation, Pagination]} className="mySwiper">
          {
            images.map(image => {
              return (<SwiperSlide>
                  <Img src={image.src} alt='crystal80' />
                </SwiperSlide>)
            })
          }
        </Swiper>
      </AspectRatio>
    </Box>
  )
})