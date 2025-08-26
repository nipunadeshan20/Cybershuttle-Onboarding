import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function OutlinedButton({ children,className }) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" className={className}>{children}</Button>
    </Stack>
  );
}
