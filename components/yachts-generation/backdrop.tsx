import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { Box, Center, Portal, useOutsideClick } from '@chakra-ui/react';


const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100,
  duration: 2
}

const invitationForm = {
  active: {
    scale: 1,
    opacity: 1,
    display: 'flex',
    transition: spring 
  },
  inactive: {
    scale: 0,
    opacity: 0,
    display: 'none',
    transition: spring 
  }
}

const backdrop = {
  active: {
    scale: 1,
    opacity: 1,
    display: 'flex',
    transition: spring 
  },
  inactive: {
    scale: 0,
    opacity: 0,
    display: 'none',
    transition: spring 
  }
}

export const Backdrop = React.memo(({
  portalOpen = false, 
  onClosePortal,
  children,
}:{
  portalOpen: boolean; 
  onClosePortal: () => any;
  children: any;
}) => {
  const control = useAnimation();
  const ref = useRef<any>();
  useOutsideClick({
    ref: ref,
    handler: onClosePortal,
  })

  useEffect(() => {
    if (portalOpen === true) {
      control.start("active"); 
    } else {
      control.start("inactive");
    }
  }, [control, portalOpen]);
  
return (<AnimatePresence>
      <Center 
        as={motion.div}
        animate={control}
        initial={portalOpen ? 'active' : 'inactive'}
        variants={backdrop}
        exit={'inactive'}
        width='100%' 
        height='100%'
        position='absolute'
        top={0}
        left={0}
        zIndex={3}
        backdropFilter={portalOpen ? `
          blur(3px) 
          contrast(1.2)` : ''}
        backdropInvert='25%'
      >
        {portalOpen && <AnimatePresence>
            <Box 
              as={motion.div} 
              animate={control} 
              exit={'inactive'}
              variants={invitationForm} 
              overflow='hidden'
              ref={ref}
              flexDir='column'
              alignItems='center'
              justifyContent='center'
            >
              {children}
            </Box>
          </AnimatePresence>
        }
      </Center>
    </AnimatePresence>)
  })
