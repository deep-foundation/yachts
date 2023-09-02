import { Box, useRadio, useRadioGroup } from "@chakra-ui/react"
import React from "react"

export const RadioCard = React.memo(({children, item}:{children?: any; item?: any;}) => {
  const { getInputProps, getRadioProps } = useRadio(item)

  const input = getInputProps()
  const checkbox = getRadioProps()

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        borderWidth='1px'
        borderRadius='md'
        boxShadow='md'
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {children}
      </Box>
    </Box>
  )
})
