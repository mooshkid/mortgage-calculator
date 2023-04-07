import React from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";

const SliderComponent = ({ defaultValue, min, max, step, onChange, value, label, unit, amount }) => {
  return (
    <>
      <Stack my={4}>
        <Stack spacing={1}>
          <Typography variant="subtitle1">{label}</Typography>
          <Typography variant="h5">{unit}{amount}</Typography>
        </Stack>
        <Slider
          defaultValue={defaultValue}
          step={step}
          marks
          min={min}
          max={max}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={onChange}
          value={value}
        />
        <Stack direction='row' justifyContent='space-between'>
          <Typography variant='caption' color='text.secondary'>{unit}{min}</Typography>
          <Typography variant='caption' color='text.secondary'>{unit}{max}</Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default SliderComponent;
