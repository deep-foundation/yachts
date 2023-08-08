import React, { useState } from 'react';
import { Box, Button, Link, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';


const NavigationButton = React.memo(({ 
  ariaLabel='home button', 
  href = '/', 
  variant = 'ghost',  
  onClick,
  onKeyDown,
  tabIndex = 0,
  textStyle,
  name = 'home',
  underline = null,
  onHoverStart = () => {},
  onHoverEnd = () => {},
}:{ 
  ariaLabel: string; 
  href?: string; 
  variant?: string;
  onClick?: (value) => void;  
  onKeyDown?: (event: { key: string }) => void;
  tabIndex?: number;
  textStyle?: {};
  name?: string; 
  underline?: React.ReactNode;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}) => {
  return (<Button
      aria-label={ariaLabel}
      as='a' 
      variant={variant}
      href={href}
      onClick={onClick}
      tabIndex={tabIndex}
      sx={{
        position: 'relative',
      }}
    >
      <AnimatePresence>
        <Text
          as={motion.div}
          onHoverStart={onHoverStart}
          onHoverEnd={onHoverEnd}
          whileHover={{
            fontWeight: '600',
            scale: 1.05,
          }}
          initial={{
            fontWeight: '300',
            scale: 1,
          }}
          exit={{
            fontWeight: '300',
            scale: 1,
            origin: 1,
          }}
          // @ts-ignore
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
          }}
          color='text'
          sx={{
            ...textStyle
          }}
        >
          {name}
        </Text>
      </AnimatePresence>
      {underline}
    </Button>
  )
})

const buttonArray = [
  {
    id: 1,
    ariaLabel: 'home button',
    href: '/',
    variant: 'ghost',
    name: 'Home'
  },
  {
    id: 2,
    ariaLabel: 'yachts button',
    href: 'yachts',
    variant: 'ghost',
    name: 'Yachts'
  },
  {
    id: 3,
    ariaLabel: 'technologies button',
    href: 'technologies',
    variant: 'ghost',
    name: 'Technologies'
  },
  {
    id: 4,
    ariaLabel: 'yachts generation button',
    href: 'yachts-generation',
    variant: 'ghost',
    name: 'Yachts generation'
  },
]

export const Navbar = React.memo(({setPage}:{setPage?: (value) => void}) => {
  const [selected, setSelected] = useState(1);
  const [hover, setHover] = useState(1);

  return (<Box as='header' w='100%' h='100%' boxShadow='0 2px 2px 0 #f3f3f3'>
      <Box display='flex' justifyContent='space-between' alignItems='center' w='100%' h='max-content' p='1rem 4rem'>
        <Box>
          <img
            src="/logo.svg"
            alt="Cristal Yacht Logo"
          />
        </Box>
        <Box 
          display='flex' 
          justifyContent='center' 
          alignItems='center'
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
                setPage(page == button.href);
                console.log('page', page);
              }}  
              onKeyDown={(event: { key: string }) => event.key === 'Enter' ? setSelected(button.id) : null} 
              tabIndex={button.id}
              textStyle={{
                fontWeight: button.id === selected ? '600' : '300',
              }}
              onHoverStart={() => {
                setHover(button.id);
              }}
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
      </Box>
    </Box>
  )
})
