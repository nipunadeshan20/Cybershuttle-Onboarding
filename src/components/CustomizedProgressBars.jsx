import * as React from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6.5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[300],
    ...theme.applyStyles?.('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#000000ff',
    ...theme.applyStyles?.('dark', {
      backgroundColor: '#3a3a3aff',
    }),
  },
}));

export default function CustomizedProgressBar({ value = 50 }) {
  return (
    <Box sx={{ width: '100%' }}>
      <BorderLinearProgress variant="determinate" value={value} />
    </Box>
  );
}
