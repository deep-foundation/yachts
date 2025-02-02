import { Box, Img, Skeleton,SkeletonCircle, useMediaQuery } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { GenerationButton } from "./yachts-generation-image";
import { OpenGallery } from "./open-gallery";
import { useDeep } from "@deep-foundation/deeplinks/imports/client";


const itemVariants = {
  hidden: {
    opacity: 0.0,
    scale: 0.5
  },
  visible: delayRef => ({
    opacity: 1,
    scale: 1,
    transition: { delay: delayRef.current }
  })
};

export const GenerationImageGallery = React.memo(({ 
  delayPerPixel = 0.0008, 
  // photos, 
  drawResultTypeId,
  isPublishedTypeId,
  onWriteNewDescription,
  hidden = false,
}:{
  delayPerPixel?: number;
  // photos?: any;
  drawResultTypeId: number,
  isPublishedTypeId: number,
  onWriteNewDescription?: () => void;
  hidden?: boolean;
}) => {
  const originOffset = useRef({ top: 0, left: 0 });
  const controls = useAnimation();
  const [selected, setSelected] = useState(null);
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');

  const deep = useDeep();
  const {data: gallery_data} = deep.useDeepQuery({
    _and: [
          {type_id: {_eq: drawResultTypeId }},
          {in: {type_id: {_eq: isPublishedTypeId}}}
        ]
  });
  gallery_data.sort((a,b) => -(a.id - b.id));
  const photos = gallery_data.map((item) => {
      return {
        key: item.id,
        id: item.id,
        src: item.value.value.img_url,
        alt: item.value.value.error ?? 'yacht'
      }
    })
  

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
    });
  }, []);
  // console.log('galery', photos)
  return (<>
      <Box as={motion.div} initial={{opacity: 0,scale: 0.5}} animate={controls} gridColumn={isSmallerThan800 ? '1 / 4' : '2 / 3'} textAlign='center' overflowY={isSmallerThan800 ? 'hidden' : 'unset'} height='60vh'
      >
       {hidden === false ? <GenerationButton 
          variant='blackBgSolid' 
          text='write a new description' 
          buttonProps={{ 
            mb: '2rem',
            width: isSmallerThan800 ? '80%' : '30%',
          }} 
          onClick={onWriteNewDescription} 
        /> : null}
        <Box 
          overflowY='scroll' 
          height='100%'
          display="flex" 
          flexWrap="wrap" 
          justifyContent={"center"}>
          {photos.map((photo, i) => {
            return (<Box key={photo.id}>
              {<Thumbnail 
              display="flex"
                setSelected={setSelected} 
                i={i}
                originIndex={26}
                delayPerPixel={delayPerPixel}
                originOffset={originOffset}
                id={photo.id}
                src={photo.src}
                alt={photo.alt}
              /> }

             
              {/* {selected 
              ? (<DetailView 
                    photos={photos}
                    selected={selected} 
                    onClose={() => setSelected(null)} 
                    src={photo.src}
                    alt={photo.alt}
                  />) 
              : null} */}
            </Box>)
          })}
          {selected !==null 
            ? (<OpenGallery 
                  photos={photos}
                  selectedImage={selected} 
                  onClose={() => setSelected(null)} 
                  // src={photo.src}
                  // alt={photo.alt}
                />) 
            : null}
        </Box>
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
  [x:string]: any;
}) => {
  const delayRef = useRef(0);
  const offset = useRef({ top: 0, left: 0 });
  const ref = useRef(null);

  useEffect(() => {
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
  
  // useEffect(() => {
  //   const img = new Image();
  //   img.src = props.src;
  // }, []);

  const [isSmallerThan650] = useMediaQuery('(max-width: 650px)');
  const [isLoaded, setIsLoaded] = useState(false);
  return (
  
    <Box as={motion.div}
      sx={{
        margin: '0.5rem',
        display: 'inline-block',
        height: isSmallerThan650 ? '15vh' : '15vmax',
        width: isSmallerThan650 ? '40vw' : '20vmax',
        backgroundColor: 'blue.100',
        borderRadius: '0.5rem',
        // borderWidth: '4px',
        overflow: 'hidden',
      }}
      ref={ref} 
      variants={itemVariants} 
      custom={delayRef}  
    >
    <Skeleton isLoaded={isLoaded}
    sx={{
      width: '100%',
      height: '100%',
      margin: '0 1rem 1rem 0',
      cursor: 'pointer',
    }}>
        <Img loading="lazy" as={motion.img}
          // zIndex={1}
          layoutId={props.id}
          src={props.src}
          alt={props.alt}
          onLoad={() => setIsLoaded(true)}
          onTap={(e) => {props.setSelected(i)}}
          sx={{
            width: '100%',
            height: '100%',
            margin: '0 1rem 1rem 0',
            cursor: 'pointer',
          }}
        />
      </Skeleton>
    </Box>
  )
})

// export const DetailView = React.memo(({
//   photos, 
//   ...props
// }:{
//   photos?: any;
//   [key:string]: any;
// }) => {
//   const { src, alt } = photos.find(
//     (photo) => photo.id === props.selected
//   );

//   return (<>
//       <Box as={motion.div}
//         sx={{
//           zIndex: 1,
//           width: '100%',
//           background: 'rgba(206 198 198 / 7%)',
//           position: 'fixed',
//           top: 0,
//           bottom: 0,
//           left: '50%',
//           transform: 'translateX(-50%)',
//           willChange: 'opacity',
//           pointerEvents: 'auto',
//         }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         //@ts-ignore
//         transition={{ delay: 0.15 }}
//         onTap={props.onClose}
//       />

//       <Box as={motion.div}
//         sx={{
//           zIndex: 1,
//           width: '500px',
//           maxWidth: '100%',
//           height: '281px',
//           position: 'fixed',
//           top: 'calc(50% - 140px)',
//           left: 'calc(50% - 250px)',
//           cursor: 'zoom-out',
//           borderRadius: '0.5rem',
//           border: 'thin solid #E5E5E5',
//           overflow: 'hidden',
//         }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         //@ts-ignore
//         transition={{ delay: 0.15 }}
//         onTap={props.onClose}
//       >
//         <Img loading="lazy" as={motion.img}
//           layoutId={props.selected}
//           src={src}  //`https://picsum.photos/id/${i}/800`
//           alt={alt}
//           onTap={() => props.onClose}
//           sx={{
//             width: '100%',
//             height: '100%',
//             margin: '0 1rem 1rem 0',
//             cursor: 'pointer',
//           }}
//         />
//       </Box>
//     </>
//   );
// })