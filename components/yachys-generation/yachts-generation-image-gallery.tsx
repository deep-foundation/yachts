import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Box, Img, useMediaQuery } from "@chakra-ui/react";

const items = [
  { id: '1', src: 'first1.webp', alt: 'alt' },
  { id: '2', src: 'first1.webp', alt: 'alt' },
  { id: '3', src: 'first1.webp', alt: 'alt' },
  { id: '5', src: 'first1.webp', alt: 'alt' },
  { id: '6', src: 'first1.webp', alt: 'alt' },
  { id: '7', src: 'first1.webp', alt: 'alt' },
  { id: '8', src: 'first1.webp', alt: 'alt' },
  { id: '9', src: 'first1.webp', alt: 'alt' },
  { id: '14', src: 'first1.webp', alt: 'alt' },
  { id: '24', src: 'first1.webp', alt: 'alt' },
  { id: '34', src: 'first1.webp', alt: 'alt' },
  { id: '44', src: 'first1.webp', alt: 'alt' },
  { id: '54', src: 'first1.webp', alt: 'alt' },
  { id: '64', src: 'first1.webp', alt: 'alt' },
];

export const GenerationImageGallery = React.memo(({ 
  delayPerPixel = 0.0008, 
  photos = items, 
}:{
  delayPerPixel?: number;
  photos?: any;
}) => {
  const originOffset = useRef({ top: 0, left: 0 });
  const controls = useAnimation();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    controls.start("visible");
  }, []);

  return (<>
      <Box as={motion.div} initial="hidden" animate={controls} variants={{}} gridColumn='2 / 3' textAlign='center'
      >
        {photos.map((photo, i) => {
          return (<>
            <Thumbnail 
              key={photo.id} 
              setSelected={setSelected} 
              i={i}
              originIndex={26}
              delayPerPixel={delayPerPixel}
              originOffset={originOffset}
              id={photo.id}
              src={photo.src}
              alt={photo.alt}
            />

            {selected 
            ? (<DetailView 
                photos={photos}
                selected={selected} 
                onClose={() => setSelected(null)} 
                src={photo.src}
                alt={photo.alt}
              />) 
            : null}
          </>)
        })}
      </Box>
    </>
  );
})

const Thumbnail = React.memo(({ 
  delayPerPixel, 
  i, 
  originIndex, 
  originOffset,
  ...props
}:{
  delayPerPixel: number;
  i: number;
  originIndex: number;
  originOffset: any;
  [key:string]: any;
}) => {
  const delayRef = useRef(0);
  const offset = useRef({ top: 0, left: 0 });
  const ref = useRef(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    offset.current = {
      top: element.offsetTop,
      left: element.offsetLeft
    };

    if (i === originIndex) {
      originOffset.current = offset.current;
    }
  }, [delayPerPixel]);

  useEffect(() => {
    const dx = Math.abs(offset.current.left - originOffset.current.left);
    const dy = Math.abs(offset.current.top - originOffset.current.top);
    const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    delayRef.current = d * delayPerPixel;
  }, [delayPerPixel]);

  useEffect(() => {
    const img = new Image();
    img.src = props.src;
  }, []);

  const [isSmallerThan650] = useMediaQuery('(max-width: 650px)');

  return (<Box as={motion.div}
      sx={{
        margin: '0.5rem',
        display: 'inline-block',
        height: isSmallerThan650 ? '15vh' : '15vmax',
        width: isSmallerThan650 ? '40vw' : '20vmax',
        backgroundColor: 'blue.100',
        borderRadius: '0.5rem',
        overflow: 'hidden',
      }}
      ref={ref} 
      variants={itemVariants} 
      custom={delayRef} 
    >
      <Img as={motion.img}
        layoutId={props.id}
        src={props.src}  //`https://picsum.photos/id/${i}/800`
        alt={props.alt}
        onTap={() => props.setSelected(props.id)}
        sx={{
          width: '100%',
          height: '100%',
          margin: '0 1rem 1rem 0',
          cursor: 'pointer',
        }}
      />
    </Box>
  )
})

const DetailView = React.memo(({
  photos, 
  ...props
}:{
  photos?: any;
  [key:string]: any;
}) => {
  const { src, alt } = photos.find(
    (photo) => photo.id === props.selected
  );

  return (<>
      <Box as={motion.div}
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
        onTap={props.onClose}
      />

      <Box as={motion.div}
        sx={{
          zIndex: 1,
          width: '500px',
          height: '281px',
          position: 'fixed',
          top: 'calc(50% - 140px)',
          left: 'calc(50% - 250px)',
          cursor: 'zoom-out',
          borderRadius: '0.5rem',
          border: 'thin solid #E5E5E5',
          overflow: 'hidden',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        //@ts-ignore
        transition={{ delay: 0.15 }}
        onTap={props.onClose}
      >
        <Img as={motion.img}
          layoutId={props.selected}
          src={src}  //`https://picsum.photos/id/${i}/800`
          alt={alt}
          onTap={() => props.onClose}
          sx={{
            width: '100%',
            height: '100%',
            margin: '0 1rem 1rem 0',
            cursor: 'pointer',
          }}
        />
      </Box>
    </>
  );
})

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5
  },
  visible: delayRef => ({
    opacity: 1,
    scale: 1,
    transition: { delay: delayRef.current }
  })
};
