import { Box } from '@mui/material'
import React from 'react'
import NagivationBar from './NagivationBar'

export default function Home_pages() {
  return (
    <>
      <Box sx={{width:'100%',position:'relative',top:'100px',display:'flex'}}>
      <NagivationBar/>
      <Box sx={{position:'relative',display:'block'}}>
      <h1>Home-page</h1>
      
      </Box>
      
      </Box>
    </>
  )
}
