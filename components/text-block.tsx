import { Text, Box, Flex, Image, useMediaQuery } from '@chakra-ui/react';
import React from 'react';


export const TextBlock = React.memo(({
  mb = '0rem',
  title,
  text,
  textStyles,
  propsTitle,
  propsText,
}:{
  mb?: string;
  title?: string;
  text: string;
  textStyles?: string;
  propsTitle?: {};
  propsText?: {};
}) => {
  
  return (<Box mb={mb}>
      {!!title ? <Text textStyle={textStyles} mb='1rem' casing='uppercase' {...propsTitle}>{title}</Text> : null}
      <Text textStyle={textStyles} {...propsText}>{text}</Text>
    </Box>
  )
})
