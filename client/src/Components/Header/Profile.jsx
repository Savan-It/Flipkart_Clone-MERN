import { styled, Box, Typography, MenuItem, Menu } from "@mui/material"
import { useState} from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const LogoutMenu = styled(Menu)`
    
`

const Profile =({account, setAccount})=>{

    const[open,setOpen] = useState(false)

    
    const handleOpen =(event)=>{
        setOpen(event.currentTarget)
    }

    const handleClose =()=>{
        setOpen(false);
    }
    const handleLogout =()=>{
        setAccount('')

    }
    return(
        <>
            <Box>
                <Typography onClick={handleOpen} style={{marginTop: 3, cursor:'pointer'}}>{account}</Typography>
                <LogoutMenu
                    anchorEl={open}
                    open={Boolean(open)}
                    onClose={handleClose}
                    style={{marginTop: 5}}
                  >
                    <MenuItem onClick={handleLogout}>
                  <PowerSettingsNewIcon color="primary" fontSize="small"/>
                    <Typography style={{marginLeft: "12px"}}>
                    Logout
                    </Typography>
                    </MenuItem>
                  </LogoutMenu>
            </Box>
        </>
    )
}

export default Profile;