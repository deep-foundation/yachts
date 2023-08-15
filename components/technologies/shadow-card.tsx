import { Box } from '@chakra-ui/react';
import React from 'react';


export const TechnologiesCard = React.memo(({title, description}:{title?: string; description?: string}) => {
    return (<Box boxShadow='0 2px 2px 2px rgba(0, 0, 0, 5%)' p='1rem'>
        <Box>
            {title}
        </Box>
        <Box>
            {description}
        </Box>
      </Box>
    );
});