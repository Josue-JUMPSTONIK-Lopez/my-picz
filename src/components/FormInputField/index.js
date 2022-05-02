import React from 'react'
import { FormControl, InputLabel, Input, FormHelperText, FormLabel} from '@mui/material';

export const FormInputField = (props) => {
  return (
    <FormControl>
          <InputLabel shrink htmlFor={props.htmlFor}>{props.labelContent}</InputLabel>
          <Input type={props.type} id={props.htmlFor} aria-describedby={props.describedby} />
          <FormHelperText id="name-text"></FormHelperText>
    </FormControl>
  )
}

// htmlfor='', labelContent='', type='', describedby=''
