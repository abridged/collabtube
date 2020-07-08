import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function SortBy() {
  return (
    <FormControl component="fieldset" className="max-w-sms">
      <FormLabel component="legend">Sort By</FormLabel>
      <RadioGroup row aria-label="sort" name="sort" defaultValue="new">

        <FormControlLabel
          value="new"
          control={<Radio color="primary" />}
          label="New"
          labelPlacement="end"
        />
        
        <FormControlLabel
          value="hot"
          control={<Radio color="primary" />}
          label="Hot"
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );
}