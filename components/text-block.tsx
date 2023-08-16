import { Box, Text } from '@chakra-ui/react';
import React from 'react';


export const TextBlock = React.memo(({
  mb = '0rem',
  as = 'h3',
  title,
  text,
  textStyles = 'regularTextBlock',
  textStylesTitle = 'regularTextTitle',
  propsTitle,
  propsText,
}:{
  mb?: string;
  as?: any;
  title?: string;
  text: any;
  textStyles?: string;
  textStylesTitle?: string;
  propsTitle?: {};
  propsText?: {};
}) => {
  
  return (<Box mb={mb}>
      {!!title ? <Text as={as} textStyle={textStylesTitle} mb='1rem' casing='uppercase' {...propsTitle}>{title}</Text> : null}
      <Text textStyle={textStyles} {...propsText}>{text}</Text>
    </Box>
  )
});

export const TextBlockYachtDescription = React.memo(({
  mb = '0rem',
  title,
  as = 'h3',
  text,
  textStyles = 'yachtsDescription',
  textStylesTitle = 'yachtsBlueTitle',
  casingTitle = 'uppercase',
  onClick,
  propsTitle,
  propsText,
}:{
  mb?: string;
  title?: string;
  as?: any;
  text: any;
  textStyles?: string;
  textStylesTitle?: string;
  casingTitle?: any;
  onClick?: () => void;
  propsTitle?: {};
  propsText?: {};
}) => {
  
  return (<Box mb={mb} onClick={onClick}>
      <Text textStyle={textStylesTitle} as={as} mb='1rem' casing={casingTitle} {...propsTitle}>{title}</Text>
      <Text textStyle={textStyles} {...propsText}>{text}</Text>
    </Box>
  )
})
