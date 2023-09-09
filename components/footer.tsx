import React, { useState } from 'react';
import { Box, Divider, Flex, HStack, IconButton, Img, Link, Spacer, Text, useMediaQuery } from '@chakra-ui/react';
import { buttonArray } from './array-menu-button';
import { NavigationButton } from './navigation';
import { motion } from 'framer-motion';


export const Footer = React.memo(({page, setPage}:{page?: string; setPage?: (value) => void}) => {
  const [selected, setSelected] = useState(1);
  const [hover, setHover] = useState(1);
  const [isSmallerThan945] = useMediaQuery('(max-width: 945px)');
  const [isSmallerThan600] = useMediaQuery('(max-width: 600px)');

  return (<Box as='footer' w='100%' boxShadow='0 2px 2px 0 #f3f3f3' bg='gray.100'>
      <Flex direction='column' align='flex-start' p={isSmallerThan600 ? '2rem 1rem' : isSmallerThan945 ? '2rem 2rem': '2rem 12rem'}>
        <Img
          src="/logo.svg"
          alt="Cristal Yacht Logo"
          sx={{mb: '1rem'}}
        />
        <Box w='100%' h='0.06rem' bg='text' sx={{mb: '1rem'}} />
        <Flex direction={isSmallerThan600 ? 'column' : 'row'} align='flex-start' justify='space-between' w='100%'>
          <Flex 
            direction='column' 
            align='flex-start'
            sx={{
              mr: isSmallerThan600 ? 0 : '1rem', 
              mb: isSmallerThan600 ? '1.5rem' : 0, 
              '&>*:not(:last-of-type)': {
                mb: '1rem',
              }
            }}
          >
            {buttonArray.map((button) => (
              <NavigationButton
                key={button.id}
                ariaLabel={button.ariaLabel}
                href={button.href}
                variant={button.variant}
                name={button.name}
                onClick={(page) => {
                  setSelected(button.id);
                  setPage(button.href);
                }} 
                onKeyDown={(event: { key: string }) => event.key === 'Enter' ? setSelected(button.id) : null} 
                tabIndex={button.id}
                selected={(button.href === page)}
                styles={{
                  fontWeight: button.id === selected ? '800' : '600',
                }}
                stylesButton={{ height: 'max-content', pl: 0 }}
                textStyle='downMenu'
                onHoverStart={() => {
                  setHover(button.id);
                }}
                onHoverEnd={() => setHover(0)}
              />
            ))}
          </Flex>
          <Flex direction='column' sx={{mb: isSmallerThan600 ? '1rem' : 0}}>
            <Text textStyle='downMenu' sx={{mb: isSmallerThan600 ? '0.5rem' : '1rem'}}>Contact</Text>
            <Link href='mailto:crystalyachtuae@gmail.com' sx={{mb: '0.3rem'}}>
              <Text>Crystalyachtuae@gmail.com</Text>
            </Link>
            <Link href='tel:+971 58 575 7979'>
              +971 58 575 7979
            </Link>
          </Flex>
          <Spacer />
          <HStack spacing='2rem' alignSelf='center'>
            <IconButton aria-label='our youtube channel' size='lg' bg='white' icon={<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.8 0.5H5.20003C2.50003 0.5 0.400024 2.7 0.400024 5.5V12.5C0.400024 15.2 2.60003 17.5 5.20003 17.5H18.8C21.5 17.5 23.6 15.3 23.6 12.5V5.5C23.7 2.8 21.5 0.5 18.8 0.5ZM15.5 9.3L9.10003 12.4C8.90003 12.5 8.70003 12.4 8.70003 12.2V5.8C8.70003 5.6 8.90003 5.5 9.10003 5.6L15.5 8.9C15.7 9 15.7 9.2 15.5 9.3Z" fill="#D7D7D7"/>
              </svg>}
            />
            <IconButton aria-label='our instagram channel' size='lg' bg='white' icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.29971C15.1 2.29971 15.5 2.29971 16.8 2.39971C17.9 2.49971 18.6 2.59971 19 2.79971C19.5 2.99971 19.9 3.29971 20.4 3.69971C20.8 4.09971 21.1 4.49971 21.3 5.09971C21.5 5.49971 21.7 6.09971 21.7 7.29971C21.8 8.49971 21.8 8.89971 21.8 12.0997C21.8 15.1997 21.8 15.5997 21.7 16.8997C21.6 17.9997 21.5 18.6997 21.3 19.0997C21.1 19.5997 20.8 19.9997 20.4 20.4997C20 20.8997 19.6 21.1997 19 21.3997C18.6 21.5997 18 21.7997 16.8 21.7997C15.6 21.8997 15.2 21.8997 12 21.8997C8.89997 21.8997 8.49998 21.8997 7.19998 21.7997C6.09998 21.6997 5.39998 21.5997 4.99998 21.3997C4.49998 21.1997 4.09998 20.8997 3.59998 20.4997C3.19998 20.0997 2.89998 19.6997 2.69998 19.0997C2.49997 18.6997 2.29998 18.0997 2.29998 16.8997C2.19998 15.6997 2.19998 15.2997 2.19998 12.0997C2.19998 8.99971 2.19998 8.59971 2.29998 7.29971C2.39998 6.19971 2.49997 5.49971 2.69998 5.09971C2.89998 4.59971 3.19998 4.19971 3.59998 3.69971C3.99998 3.29971 4.39998 2.99971 4.99998 2.79971C5.39998 2.59971 5.99998 2.39971 7.19998 2.39971C8.49998 2.39971 8.89997 2.29971 12 2.29971ZM12 0.199707C8.79998 0.199707 8.39998 0.199707 7.09998 0.299707C5.79998 0.399707 4.99998 0.599707 4.19998 0.799707C3.39998 1.09971 2.79998 1.49971 2.09998 2.19971C1.39998 2.89971 0.999975 3.49971 0.699975 4.29971C0.399975 4.99971 0.199975 5.89971 0.199975 7.19971C0.099975 8.49971 0.0999756 8.89971 0.0999756 12.0997C0.0999756 15.2997 0.099975 15.6997 0.199975 16.9997C0.299975 18.2997 0.499975 19.0997 0.699975 19.8997C0.999975 20.6997 1.39998 21.2997 2.09998 21.9997C2.79998 22.6997 3.39998 23.0997 4.19998 23.3997C4.89998 23.6997 5.79998 23.8997 7.09998 23.8997C8.39998 23.9997 8.79998 23.9997 12 23.9997C15.2 23.9997 15.6 23.9997 16.9 23.8997C18.2 23.7997 19 23.5997 19.8 23.3997C20.6 23.0997 21.2 22.6997 21.9 21.9997C22.6 21.2997 23 20.6997 23.3 19.8997C23.6 19.1997 23.8 18.2997 23.8 16.9997C23.9 15.6997 23.9 15.2997 23.9 12.0997C23.9 8.89971 23.9 8.49971 23.8 7.19971C23.7 5.89971 23.5 5.09971 23.3 4.29971C23 3.49971 22.6 2.89971 21.9 2.19971C21.2 1.49971 20.6 1.09971 19.8 0.799707C19.1 0.499707 18.2 0.299707 16.9 0.299707C15.6 0.199707 15.2 0.199707 12 0.199707Z" fill="#D7D7D7"/>
                <path d="M12 6C8.7 6 6 8.7 6 12C6 15.3 8.7 18 12 18C15.3 18 18 15.3 18 12C18 8.7 15.3 6 12 6ZM12 15.9C9.8 15.9 8.1 14.1 8.1 12C8.1 9.8 9.9 8.1 12 8.1C14.2 8.1 15.9 9.9 15.9 12C15.9 14.2 14.2 15.9 12 15.9Z" fill="#D7D7D7"/>
                <path d="M19.6999 5.69981C19.6999 6.49981 19.0999 7.09981 18.2999 7.09981C17.4999 7.09981 16.8999 6.49981 16.8999 5.69981C16.8999 4.89981 17.4999 4.2998 18.2999 4.2998C19.0999 4.2998 19.6999 4.89981 19.6999 5.69981Z" fill="#D7D7D7"/>
              </svg>}
            />
          </HStack>
        </Flex>
      </Flex>
    </Box>
  )
})