import { Box } from '@chakra-ui/react';
import React from 'react';
import { TextBlock } from '../text-block';


export const TechnologiesCard = React.memo(({
  title, 
  description, 
  textStylesTitle
}:{
  title?: string; 
  description?: string; 
  textStylesTitle?: string;
}) => {
    return (<Box boxShadow='0 2px 2px 2px rgba(0, 0, 0, 5%)' p='1rem'>
        <TextBlock title={title} text={description} textStylesTitle={textStylesTitle} />
      </Box>
    );
});