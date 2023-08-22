import { React, useState } from 'react'
import { Button, Dialog, TextField, Typography, styled, Box} from '@mui/material'


const Container = styled(Box)`
  width: 100vh;
  height: 80vh;
`
const Loginimage = styled(Box)`
  background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 85%;
  height:auto;
  width: 40%;
  padding: 45px 40px;
`

const Wrapper = styled(Box)`
  display:flex;
  padding: 45px 40px; 
  flex-direction: column;
  & > button {
    margin-top: 20px
  },
  height: 100vh;

`

const RequestOtpButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #FFFFFF;
  height: 40px;
  font-weight: 500;
  border-radius: 2px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);  
  &:hover{
    background: #fb641b;
  }
`
const ExistingUserButton = styled(Button)`
  color:#2874f0;
  border-radius:2px;
  height: 40px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
  &:hover{
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);  
  }

`
const CreatAccount = styled(Typography)`
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
  font-size: 12px;
  text-align: center;
  margin-top: auto;
`
const initialAccountvalues = {
  login: {
    view: 'login',
    heading: "Login",
    tagline: "Get access to your Orders, Wishlist and Recommendations"

  },
  signup: {
    view: 'signup',
    heading: "Looks like you're new here!",
    tagline: "Sign up with your mobile number to get started"
  }

}

const UserDataFormate = {
  firstname:'',
  lastname:'',
  username:'',
  email:'',
  phone:'',

}
function LoginDialog({ open, setOpen }) {

  const [account, toggleAccount] = useState(initialAccountvalues.login);
  const [userdata, setUserdata] = useState(UserDataFormate);
  
  const closeToggle = () => {
    setOpen(false);
    toggleAccount(initialAccountvalues.login);
  }

  const openSignupDialog = () => {
    toggleAccount(initialAccountvalues.signup)
  }
  const openLoginDialog = () => {
    toggleAccount(initialAccountvalues.login)
  }
  
  const saveUserData = (e) =>{
    setUserdata({...userdata,[e.target.name]: e.target.value}); 
  }

  const handleSignupButton=()=>{
    console.log(userdata);
  }
  return (
    <Dialog open={open} onClose={closeToggle} PaperProps={{ sx: { maxWidth: "unset" } }}>
      <Container>
        <Box style={{ display: "flex", height: "100%" }}>
          <Loginimage>
            <Typography style={{ color: "#ffffff", fontWeight: 600 }} variant='h5'>{account.heading}</Typography>
            <Typography style={{ marginTop: 18, color: "#dbdbdb" }}>{account.tagline}</Typography>
          </Loginimage>
          {(account.view === 'login') ?
            <Wrapper>
              <TextField label="Enter Email / Mobile number" variant='standard' InputLabelProps={{ style: { fontSize: 14}}} />
              <Typography style={{ fontSize: "12px", fontWeight: "400", color: "#878787", marginTop: 20 }}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
              <RequestOtpButton>Request OTP</RequestOtpButton>
              <CreatAccount onClick={openSignupDialog}>New to Flipkart? Create an account</CreatAccount>
            </Wrapper> :
            <Wrapper>
              <TextField label="Firstname" variant='standard' name='firstname' onChange={saveUserData} />
              <TextField label="Lastname" variant='standard' name='lastname' onChange={saveUserData}/>
              <TextField label="Username" variant='standard' name='username' onChange={saveUserData}/>
              <TextField label="Email" variant='standard' name='email' onChange={saveUserData}/>
              <TextField label="Phone" variant='standard' name='phone' onChange={saveUserData}/>
              <Typography style={{ fontSize: "12px", fontWeight: "400", color: "#878787", marginTop: 20 }}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
              <RequestOtpButton style={{fontWeight: 600}} onClick={handleSignupButton}>CONTINUE</RequestOtpButton>
              <ExistingUserButton style={{ textTransform: "none" }} onClick={openLoginDialog}>Existing User? Log in</ExistingUserButton>
            </Wrapper>
          }
        </Box>
      </Container>
    </Dialog>
  )
}

export default LoginDialog