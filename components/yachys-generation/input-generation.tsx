import { Box, Flex, HStack, Input, Select, Text } from "@chakra-ui/react";
import React from "react";
import _ from 'lodash';

export const InputGeneration = React.memo(({
  title,
  placeholder,
  value,
  handleChange,
  select = false,
  type = 'number',
  stackProps,
  inputProps,
  textProps,
}:{
  title?: string;
  placeholder?: string;
  value?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  select?: boolean;
  type?: string;
  stackProps?: {};
  inputProps?: {};
  textProps?: {};
}) => {
    
    return (<Box display='flex' flexDir='row' alignItems='center' {...stackProps}>
      {!!title ? <Text textStyle='generationFormItem' mr='0.5rem' {...textProps}>{title}</Text> : null}
      <Input
        variant='outline'
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        size='md'
        type={type}
        focusBorderColor='blue.300'
        mr={select ? '1rem' : '0'}
        {...inputProps}
      />
      {select ? <Select>
        <option value="meter">m</option>
        <option value="foot">ft</option>
        <option value="yard">yd</option>
      </Select> : null}
    </Box>
  )
})

export const SelectGeneration = React.memo(({
  stackProps,
  placeholder,
  value,
  handleChange,
}:{
  stackProps?: {};
  placeholder?: string;
  value?: string;
  handleChange?: (event) => void;
}) => {

  let nums = _.rangeRight(10, 0);
      
  return (<Box display='flex' flexDir='row' alignSelf='normal' {...stackProps}>
      <Text textStyle='generationFormItem' mr='0.5rem'>number of decks</Text>
      <Select
        variant='outline'
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        size='md'
        focusBorderColor='blue'
      >
        {nums.map((num) => {
          return <option value={num}>{num}</option>
        })}
      </Select>
    </Box>
  )
})