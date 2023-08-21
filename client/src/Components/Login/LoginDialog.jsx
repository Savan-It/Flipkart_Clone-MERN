import React from 'react'
import { Dialog } from '@mui/material'

function LoginDialog({open, setOpen}) {

  const closeToggle = ()=>{
    setOpen(false)
  }
  return (
    <Dialog open={open} onClose={closeToggle}>
      hellp
    </Dialog>
  )
}

export default LoginDialog