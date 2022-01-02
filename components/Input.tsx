import {Input as ChakraInput, InputProps as ChakraInputProps} from "@chakra-ui/core";
import React from "react";

const Input: React.FC<ChakraInputProps> = (props) => {
    return (
        <ChakraInput
            height="50px"
            backgroundColor="gray.800"
            focusBorderColor="purple.500"
            borderRadius="sm"
            placeholder="E-mail"
            {...props}
        />
    )
}

export default Input