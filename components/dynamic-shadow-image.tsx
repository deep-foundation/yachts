import { Box, Image, Img } from "@chakra-ui/react";


const DynamicShadowImage = ( {src, ...props}) => {
  return (
    <Box position="relative">
        <Img position="absolute"
                        inset={0}
                        filter="blur(16px)"
                        zIndex={0} src="black.jpg"
                        transform="translate(5px, -5px);"
                        width='100%' objectFit="cover"
                        {...props} />
        <Img src={src} zIndex={100} width='100%' 
                        objectFit="cover"
                        position="relative"
                        {...props} />
    </Box>
  );
};

export default DynamicShadowImage;
