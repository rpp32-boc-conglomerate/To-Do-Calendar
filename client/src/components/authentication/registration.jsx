import React from 'react';
import $ from 'jquery';

import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';


function handleSubmit(e) {
  e.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get('email'),
    password: data.get('password'),
  });

  var url = 'http://localhost:3000/signup';
  console.log('in submit');
  var stringified = JSON.stringify(this.state);
  console.log('stringified: ', stringified);
  if (this.state.firstName !== '' && this.state.lastName !== '' && this.state.password !== '') {
    return new Promise((resolve, reject) => {
      $.ajax({
        'url': url,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        type: 'POST',
        contentType: 'application/json',
        data: {result: stringified},
        dataType: 'json',
        success: function (response) {
          resolve (response);
        },
        failure: function (response) {
          console.log('rejected');
          reject (response);
        }
      });
    });
  } else {
    console.log('invalid form input');
  }
}

export default function registrationForm() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
              Sign up
        </Typography>
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                  required
                  fullWidth
                  id="First Name"
                  label="First Name"
                  placeholder="First Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                  required
                  fullWidth
                  id="Last Name"
                  label="Last Name"
                  placeholder="Last Name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  id="Email"
                  label="Email"
                  placeholder="Email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  id="Password"
                  label="Password"
                  placeholder="Password"
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              >
                Submit
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Grid>

        </Box>
      </Box>
    </Container>
  );
};