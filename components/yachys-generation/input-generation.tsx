import { Flex, HStack, Input, Select, Text } from "@chakra-ui/react";
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
    
    return (<Flex direction='row' align='center' {...stackProps}>
      <Text textStyle='generationFormItem' {...textProps} mr='0.5rem'>{title}</Text>
      <Input
        variant='outline'
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        size='md'
        type={type}
        focusBorderColor='blue'
        {...inputProps}
      />
      {select ? <Select>
        <option value="meter">m</option>
        <option value="foot">ft</option>
        <option value="yard">yd</option>
      </Select> : null}
    </Flex>
  )
})

export const SelectGeneration = React.memo(({
  placeholder,
  value,
  handleChange,
}:{
  placeholder?: string;
  value?: string;
  handleChange?: (event) => void;
}) => {

let nums = _.rangeRight(10, 0);
  console.log(nums);
      
  return (<HStack alignSelf='normal'>
      <Text textStyle='generationFormItem'>number of decks</Text>
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
    </HStack>
  )
})