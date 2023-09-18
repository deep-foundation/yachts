import { AspectRatio, Box, Img, List, ListItem, Text, UnorderedList, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { TextBlock, TextBlockYachtDescription } from '../text-block';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';


export const Crystal100 = React.memo(() => {
  const [isSmallerThan500] = useMediaQuery('(max-width: 500px)');
  const [isSmallerThan900] = useMediaQuery('(max-width: 900px)');
  const [isSmallerThan1200] = useMediaQuery('(max-width: 1200px)');

  const images = [
    {id: 1, src:'/yachts/crystal_100/4.png'},
    {id: 2, src:'/yachts/crystal_100/5.png'},
    {id: 3, src:'/yachts/crystal_100/6.png'},
    {id: 4, src:'/yachts/crystal_100/1.png'},
    {id: 5, src:'/yachts/crystal_100/2.png'},
    {id: 6, src:'/yachts/crystal_100/3.png'},
  ]

  return (<Box display='flex' flexDirection='column' p={isSmallerThan900 ? '2rem 2rem' : '4rem 8rem'}>
      <Text as='h1' textStyle='yachtBlueTitle' align='left'  mb={isSmallerThan900 ? '2rem' : '4rem'}>CRYSTAL 100</Text>

      <Box display='grid' gridTemplateColumns={isSmallerThan500 ? '1fr' : '1fr 1fr'} columnGap={isSmallerThan500 ? 0 : isSmallerThan900 ? '2rem' : '4rem'} mb={isSmallerThan900 ? '2rem' : '4rem'}>
        <Box mb={isSmallerThan500 ? '1rem' : 0}>
          <TextBlock 
            mb={isSmallerThan900 ? '0.5rem' : '1.5rem'}
            title='EXTERIOR' 
            textStylesTitle='yachtBlockTitle'
            text="Measuring an impressive 100 feet (approximately 30 meters) in length, the Crystal 100 boasts a refined and contemporary exterior design. Its elegant lines and low-profile hulls enhance its visual appeal while ensuring stability and comfort on the water. The catamaran's innovative design offers a large beam that provides abundant living space across its four decks." 
            />
          <TextBlock
            text="One of the most enchanting features of the Crystal 100 is its abundance of outdoor living spaces. The flybridge offers a perfect setting for al fresco dining, lounging in the sun, or enjoying breathtaking views. The aft cockpit provides a spacious area for socializing, and the bow area is equipped with comfortable seating and sun pads, offering a private retreat for relaxation."
          />
        </Box>
        <Box>
          <AspectRatio ratio={isSmallerThan900 ? 1.5 : 1.8} maxW='100%' mb={isSmallerThan900 ? '1.5rem' : '2rem'}>
            <Img src='/yachts/crystal_100/1.png' alt='crystal100' />
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
          <Img src='/yachts/crystal_100/2.png' alt='crystal100' />
        </AspectRatio>
        <Box mt={isSmallerThan500 ? '1rem' : 0}>
          <TextBlock 
            mb={isSmallerThan900 ? '0.5rem' : '1.5rem'}
            title='INTERIOR' 
            textStylesTitle='yachtBlockTitle'
            text="Step inside the Crystal 100, and you'll be greeted by opulent interiors crafted with the finest materials and attention to detail. The yacht can accommodate up to 12 guests in lavish ensuite cabins, including a stunning owner's suite with panoramic views. Every living space exudes sophistication, featuring exquisite furnishings, state-of-the-art entertainment systems, and panoramic windows that flood the interiors with natural light." 
          />
          <TextBlock
            text="The Crystal 100 is designed with versatility in mind. It offers a flexible layout that can be tailored to meet the unique preferences of its owner. Whether hosting glamorous events, family gatherings, or intimate get-togethers, the catamaran can easily adapt to any occasion. From the spacious saloon to the well-equipped galley, every area is thoughtfully designed to ensure comfort and convenience."
          />
        </Box>
      </Box>

      <Box display='grid' gridTemplateColumns={isSmallerThan500 ? '1fr' : '1fr 1fr'} columnGap={isSmallerThan500 ? 0 : isSmallerThan900 ? '2rem' : '4rem'} mb={isSmallerThan900 ? '2rem' : '7rem'}>
        <Box mb={isSmallerThan500 ? '1rem' : 0}>
          <TextBlock 
            mb={isSmallerThan900 ? '1.5rem' : '2rem'}
            title='TECHNOLOGIES' 
            textStylesTitle='yachtBlockTitle'
            text="The Crystal 100 is equipped with the latest technology to enhance its performance, safety, and energy efficiency. Its advanced navigation and control systems make operating the yacht a breeze for the crew, allowing for smooth sailing and precise maneuvering. The hybrid propulsion system further reduces not only maintenance costs but also fuel consumption and carbon emissions, aligning with the growing demand for eco-friendly yachting solutions." 
            />
        </Box>
        <Box>
          <AspectRatio ratio={isSmallerThan900 ? 1.5 : 1.8} maxW='100%'>
            <Img src='/yachts/crystal_100/3.png' alt='crystal100' />
          </AspectRatio>
        </Box>
      </Box>

      <Box display='flex' flexDirection='column' px={isSmallerThan900 ? '2rem' : isSmallerThan1200 ? '3rem' : '5rem'} mb={isSmallerThan900 ? '2rem' : '7rem'}>
        <Box width='25%' height='0.03rem' alignSelf='center' bg='text' mb='1.5rem' />
        <TextBlock
          textStyles='semiBoldText' 
          propsText={{
            sx: {
              textAlign: 'center',
              mb: '1.5rem',
            }
          }}
          text={[
            'The Crystal 100 is the epitome of luxury, style, and performance.',
            <br/>,
            'Its innovative design, spacious interiors, and cutting-edge technology set a new benchmark for superyachts. Whether sailing the open seas or anchored in an exclusive marina, the Crystal 100 promises an unforgettable yachting experience for those seeking the ultimate in comfort, elegance, and adventure. For those fortunate enough to step aboard this magnificent vessel, it is truly a journey into the world of unparalleled luxury and maritime excellence.',
           ]} />
        <Box width='25%' height='0.03rem' alignSelf='center' bg='text'  />
      </Box>
      
      <Text textStyle='yachtDetailUppercaseTitleText' align='left' mb={isSmallerThan900 ? '0.5rem' : '1rem'}>Video Review</Text>
      <AspectRatio ratio={16 / 9} maxW='100%' mb={isSmallerThan500 ? '0.8rem' : '1.5rem'}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QOvky3k0VC4?si=ytuYmwuuIYwd8QeJ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </AspectRatio>
      <Text textStyle='yachtsBlueTitle' as='h4' align='right' mb={isSmallerThan900 ? '2rem' : '5rem'}>crystal 100</Text>

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
                Length: 30. 5m / 100ft
              </ListItem>
              <ListItem>
                Beam: 13.7 m / 45ft
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
                Number of cabins: up to 6
              </ListItem>
              <ListItem>
                Water: 2000 L
              </ListItem>
              <ListItem>
                Hull material: Aluminum
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
                    <Img src={image.src} alt='crystal100' />
                    </SwiperSlide>)
                })
            }
            </Swiper>
      </AspectRatio>
    </Box>
  )
})