import { Box, Text } from '@chakra-ui/react';
import React from 'react';


export const TextBlock = React.memo(({
  mb = '0rem',
  title,
  text,
  textStyles = 'regularTextBlock',
  textStylesTitle = 'regularTextTitle',
  propsTitle,
  propsText,
}:{
  mb?: string;
  title?: string;
  text: string;
  textStyles?: string;
  textStylesTitle?: string;
  propsTitle?: {};
  propsText?: {};
}) => {
  
  return (<Box mb={mb}>
      {!!title ? <Text textStyle={textStylesTitle} mb='1rem' casing='uppercase' {...propsTitle}>{title}</Text> : null}
      <Text textStyle={textStyles} {...propsText}>{text}</Text>
    </Box>
  )
})
