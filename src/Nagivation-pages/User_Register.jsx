import React, { useState } from 'react';
import { Box, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import NagivationBar from './NagivationBar';

export default function User_Register() {
  const [formData, setFormData] = useState({
    fristname: '',
    fatherName: '',
    lastName: '',
    eductions: '',
    collouge: '',
    grade: '',
    prnNumber: '',
    mobile: '',
    email: '',
    village: '',
    City: '',
    State: '',
  });

  const [errors, setErrors] = useState({
    fristname: false,
    fatherName: false,
    lastName: false,
    eductions: false,
    collouge: false,
    grade: false,
    prnNumber: false,
    mobile: false,
    email: false,
    village: false,
    City: false,
    State: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: value.trim() === '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if any field is empty
    if (Object.values(errors).some((error) => error)) {
      alert('Please fill in all required fields.');
      return;
    }

    // Show confirmation dialog
    const confirmed = window.confirm('Are you sure you want to save this data?');
    if (!confirmed) return;

    try {
      const response = await fetch('http://localhost:3010/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const result = await response.json();
        console.log('Form Data Submitted:', result);
        // Clear the form after successful submission
        setFormData({
          fristname: '',
          fatherName: '',
          lastName: '',
          eductions: '',
          collouge: '',
          grade: '',
          prnNumber: '',
          mobile: '',
          email: '',
          village: '',
          City: '',
          State: '',
        });
        // Optionally show success message or redirect
      } else {
        console.error('Error submitting data:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <>
      <Box sx={{ width: '100%', position: 'relative', top: '100px', display: 'flex', justifyContent: 'center' }}>
        <NagivationBar />
        <Box sx={{ width: '900px', position: 'relative', display: 'block', padding: '16px', boxShadow: 5 }}>
          <h1>User-Register Page</h1>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Box sx={{ display: 'flex', gap: '16px' }}>
                <TextField
                  label="First Name"
                  name="fristname"
                  value={formData.fristname}
                  onChange={handleInputChange}
                  error={errors.fristname}
                  helperText={errors.fristname && 'First Name is required'}
                  fullWidth
                  required
                />
                <TextField
                  label="Father Name"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  error={errors.fatherName}
                  helperText={errors.fatherName && 'Father Name is required'}
                  fullWidth
                  required
                />
                <TextField
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  error={errors.lastName}
                  helperText={errors.lastName && 'Last Name is required'}
                  fullWidth
                  required
                />
              </Box>
              <Box sx={{ display: 'flex', gap: '16px' }}>
                <TextField
                  label="Education"
                  name="eductions"
                  value={formData.eductions}
                  onChange={handleInputChange}
                  error={errors.eductions}
                  helperText={errors.eductions && 'Education is required'}
                  fullWidth
                  required
                />
                <TextField
                  label="College"
                  name="collouge"
                  value={formData.collouge}
                  onChange={handleInputChange}
                  error={errors.collouge}
                  helperText={errors.collouge && 'College is required'}
                  fullWidth
                  required
                />
                <TextField
                  label="Grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                  error={errors.grade}
                  helperText={errors.grade && 'Grade is required'}
                  fullWidth
                  required
                />
              </Box>
              <Box sx={{ display: 'flex', gap: '16px' }}>
                <TextField
                  label="PRN Number"
                  name="prnNumber"
                  value={formData.prnNumber}
                  onChange={handleInputChange}
                  error={errors.prnNumber}
                  helperText={errors.prnNumber && 'PRN Number is required'}
                  fullWidth
                  required
                />
                <TextField
                  label="Mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  error={errors.mobile}
                  helperText={errors.mobile && 'Mobile is required'}
                  fullWidth
                  required
                />
                <TextField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={errors.email}
                  helperText={errors.email && 'Email is required'}
                  fullWidth
                  required
                />
              </Box>
              <Box sx={{ display: 'flex', gap: '16px' }}>
                <TextField
                  label="Village"
                  name="village"
                  value={formData.village}
                  onChange={handleInputChange}
                  error={errors.village}
                  helperText={errors.village && 'Village is required'}
                  fullWidth
                  required
                />
                <TextField
                  label="City"
                  name="City"
                  value={formData.City}
                  onChange={handleInputChange}
                  error={errors.City}
                  helperText={errors.City && 'City is required'}
                  fullWidth
                  required
                />
                <TextField
                  label="State"
                  name="State"
                  value={formData.State}
                  onChange={handleInputChange}
                  error={errors.State}
                  helperText={errors.State && 'State is required'}
                  fullWidth
                  required
                />
              </Box>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
}
