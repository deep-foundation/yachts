import React, { useState } from 'react';
import { Box, Button, Hide, Link, Menu, MenuButton, MenuItem, MenuItemOption, MenuList, MenuOptionGroup, Show, Text, useMediaQuery } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { buttonArray } from './array-menu-button';


export const NavigationButton = React.memo(({ 
  ariaLabel='home button', 
  href = '/', 
  variant = 'ghost',  
  onClick,
  onKeyDown,
  tabIndex = 0,
  styles,
  stylesButton,
  textStyle = 'upperMenu',
  name = 'home',
  underline = null,
  onHoverStart = () => {},
  onHoverEnd = () => {},
  selected = false,
}:{ 
  ariaLabel: string; 
  href?: string; 
  variant?: string;
  onClick?: (value) => void;  
  onKeyDown?: (event: { key: string }) => void;
  tabIndex?: number;
  textStyle?: string;
  styles?: {};
  stylesButton?: {};
  name?: string; 
  underline?: React.ReactNode;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  selected?: boolean;
}) => {
  
  return (<Button
      aria-label={ariaLabel}
      variant={variant}
      onClick={onClick}
      tabIndex={tabIndex}
      sx={{
        position: 'relative',
        ...stylesButton,
      }}
    >
      <AnimatePresence>
        <Text
          as={motion.h2}
          onHoverStart={onHoverStart}
          onHoverEnd={onHoverEnd}
          whileHover={{
            fontWeight: '800',
            scale: 1.05,
          }}
          initial={{
            fontWeight: '600',
            scale: 1,
          }}
          exit={{
            fontWeight: '600',
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
            textDecoration: selected ? 'underline' : 'none', 
            ...styles
          }}
          textStyle={textStyle}

        >
          {name}
        </Text>
      </AnimatePresence>
      {underline}
    </Button>
  )
})

export const Navbar = React.memo(({page, setPage}:{page?: string; setPage?: (value) => void}) => {
  const [selected, setSelected] = useState(1);
  const [hover, setHover] = useState(1);
  const [isSmallerTha600] = useMediaQuery('(max-width: 600px)');
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const [isSmallerThan1350] = useMediaQuery('(max-width: 1350px)');

  return (<Box as='header' w='100%' h='max-content' boxShadow='0 2px 2px 0 #f3f3f3'>
      <Box display='flex' justifyContent='space-between' alignItems='center' w='100%' h='max-content' p={isSmallerThan800 ? '1rem 1rem' : isSmallerThan1350 ? '1rem 2rem' : '1rem 4rem'}>
        <Box>
          <img
            src={isSmallerThan800 ? "/mob-logo.svg" : "/logo.svg"}
            alt="Cristal Yacht Logo"
          />
        </Box>
        <Show below='sm'>
          <Menu>
            <MenuButton>menu</MenuButton>
            <MenuList zIndex={100}>
            {buttonArray.map((button) => (
              <MenuItem as='button' 
                key={button.id}
                onClick={() => {
                  setSelected(button.id);
                  setPage(button.href);
                }}
              >{button.name}</MenuItem>))}
            </MenuList>
          </Menu>
        </Show>
        <Hide below='sm'>
          <Box 
            display='flex' 
            justifyContent='flex-end'
            alignItems='center'
            width='100%'
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
                styles={{
                  scale: button.id === selected ? 1.05 : 1,
                }}
                onHoverStart={() => {
                  setHover(button.id);
                }}
                onHoverEnd={() => setHover(0)}
                underline={
                  (button.href === page) ? 
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
        </Hide>
      </Box>
    </Box>
  )
})
