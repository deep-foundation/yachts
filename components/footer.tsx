import React, { useState } from 'react';
import { Box, Divider, Flex, Spacer } from '@chakra-ui/react';
import { buttonArray } from './array-menu-button';
import { NavigationButton } from './navigation';
import { motion } from 'framer-motion';


export const Footer = React.memo(() => {
  const [selected, setSelected] = useState(1);
  const [hover, setHover] = useState(1);

  return (<Box as='footer' w='100%' boxShadow='0 2px 2px 0 #f3f3f3' bg='textGray'>
      <Flex direction='column' align='flex-start'>
        <img
          src="/logo.svg"
          alt="Cristal Yacht Logo"
        />
        <Divider color='text' />
        <Flex direction='row' align='center' justify='space-between' w='100%' p='1rem 4rem'>
          <Box>
            {buttonArray.map((button) => (
              <NavigationButton
                key={button.id}
                ariaLabel={button.ariaLabel}
                href={button.href}
                variant={button.variant}
                name={button.name}
                onClick={(page) => {
                  setSelected(button.id);
                  // setPage(page == button.href);
                  // console.log('page', page);
                }}  
                onKeyDown={(event: { key: string }) => event.key === 'Enter' ? setSelected(button.id) : null} 
                tabIndex={button.id}
                styles={{
                  fontWeight: button.id === selected ? '500' : '300',
                }}
                onHoverStart={() => {
                  setHover(button.id);
                }}
                textStyle=''
                onHoverEnd={() => setHover(0)}
                underline={
                  (button.id === selected) || button.id === hover ? 
                    <Box
                      as={motion.div}
                      layoutId="underline"
                      sx={{ 
                        width: '100%',
                        height: '0.02rem',
                        borderRadius: '0.2rem',
                        position: 'absolute',
                        bottom: 0, 
                        bg: 'text',
                      }}
                    /> 
                  : null
                }
              />
            ))}
          </Box>
          <Box>
          </Box>
          <Spacer />
          <Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
})