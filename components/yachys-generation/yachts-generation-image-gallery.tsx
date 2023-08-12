import { Box, Button, HStack, Img, Skeleton, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { Grid } from './grid-gallery';


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
  // items,
  containerProps = {},
}:{
  // items: any;
  containerProps?: {};
}) => {
  const [selectedId, setSelectedId] = useState(null);

  return (<Grid photos={items} />
  // <Box display='flex' flexDir='column' alignItems='center' justifyContent='center' w='100%' h='100%' {...containerProps}>
  //     {items.map(item => (
  //       <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
  //         <motion.img src={item.src} alt={item.alt} />
  //       </motion.div>
  //     ))}

  //     <AnimatePresence>
  //       {selectedId && (
  //         <motion.div layoutId={selectedId}>
  //           <motion.img src={items.find(item => item.id === selectedId).src} alt={items.find(item => item.id === selectedId).alt} />
  //           <motion.button onClick={() => setSelectedId(null)} />
  //         </motion.div>
  //       )}
  //     </AnimatePresence>
  //   </Box>
  ) 
})


 