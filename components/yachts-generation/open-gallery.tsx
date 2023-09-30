import { Box, IconButton, Img, useMediaQuery } from '@chakra-ui/react';
import { AnimatePresence, MotionConfig, motion, useScroll } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb"; 
// import { DetailView } from './yachts-generation-image-gallery';


const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const OpenGallery = React.memo(({
  onClick,
  containerProps = {},
  selectedImage,
  photos,
  ...props
}:{
  onClick?: () => void;
  containerProps?: {};
  selectedImage: any;
  photos: any;
  [key:string]: any;
}) => {
  const [isSmallerThan767] = useMediaQuery('(max-width: 767px)', {
    ssr: true,
    fallback: false,
  });
  const [isSmallerThan590] = useMediaQuery('(max-width: 590px)', {
    ssr: true,
    fallback: false,
  });
  const [[photo, direction], setPhoto] = useState([selectedImage, 0]);

  const paginate = (newDirection: number) => {
    setPhoto([photo + newDirection, newDirection]);
  };

  // const { src, alt } = photos.find(
  //   (photo) => photo.id === props.selectedImage
  // );
  // console.log('src123', src);

  return (<><Box as={motion.div}
      sx={{
        zIndex: 1,
        width: '100%',
        background: 'rgba(206 198 198 / 7%)',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        willChange: 'opacity',
        pointerEvents: 'auto',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      //@ts-ignore
      transition={{ delay: 0.15 }}
      onClick={(e) => {props.onClose();}}
    />
      <AnimatePresence initial={false} custom={direction}>
        <Box as={motion.div}
          sx={{
            zIndex: 1,
            width: '70vmax',
            maxWidth: '100%',
            // height: '60vmin',
            position: 'fixed',
            top: isSmallerThan590 ? 'calc(50% - 30vh)' : 'calc(40% - 30vh)',
            left: isSmallerThan590 ? 0 : 'calc(50% - 35vw)',
            cursor: 'zoom-out',
            borderRadius: '0.5rem',
            border: 'thin solid #E5E5E5',
            overflow: 'hidden',
          }}
        >
          <Box as={motion.img}
            key={photos[photo]?.id}
            src={photos[photo]?.src}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            width='100%'
            height='100%'
            // loading='lazy'
            //@ts-ignore
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
          {photo > 0 && (<IconButton as={motion.div}
            aria-label='previous'
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0, pointerEvents: "none" }}
            whileHover={{ opacity: 1 }}
            sx={{
              position: 'absolute', 
              left: '2%',
              top: '50%',
              transform: 'translateY(-50%)',
              borderRadius: '50%',
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
            }}
            onClick={() => paginate(-1)}
            icon={<TbArrowBigLeft />}
          />)}
          {photo < photos.length && (<IconButton as={motion.div}
            aria-label='next'
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0, pointerEvents: "none" }}
            whileHover={{ opacity: 1 }}
            sx={{
              position: 'absolute',
              right: '2%',
              top: '50%',
              transform: 'translateY(-50%)',
              // width: '8%',
              // height: '8%',
              borderRadius: '50%',
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
            }}
            onClick={() => paginate(1)}
            icon={<TbArrowBigRight />}
          />)}
        </Box>
      </AnimatePresence>
  </>
  )
})
