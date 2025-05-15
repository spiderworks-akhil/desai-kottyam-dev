import * as React from "react"
import PropTypes from "prop-types"
import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import Typography from "@mui/material/Typography"
import Form from "../components/FormMajesticMount"
import Dropdown from "../components/Dropdown"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}))

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
}

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <div className="mob-bottom-fixed-ele sm:hidden fixed">
        <div className="mob-bottom-fixed-ele-block-item bottom-0 w-full">
          <a className="fixed-btn" onClick={handleClickOpen}>
            Enquire Now
          </a>
          <a
            className="fixed-btn"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=9847528000&text=I%20would%20like%20to%20know%20more%20about%20Desai%20Kottayam%20projects. "
            class="sticky-btn flex items-center justify-center gap-2 bg-[#1CC273] text-[#fff] text-[16px] font-[700] p-[12px_12px_12px_12px] w-full rounded-[25px]"
          >
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.0165 18.0144C7.43629 18.0144 5.89326 17.6054 4.51754 16.806L1.0039 18.0144L1.72894 14.2963C0.594901 12.7532 0 10.9313 0 8.99791C0 4.03419 4.03419 0 8.99791 0C13.9616 0 17.9958 4.03419 17.9958 8.99791C18.0144 13.9802 13.9802 18.0144 9.0165 18.0144ZM4.68487 15.3374L4.96373 15.5047C6.19071 16.2669 7.58502 16.6759 9.0165 16.6759C13.2366 16.6759 16.6759 13.2366 16.6759 9.0165C16.6759 4.79641 13.2366 1.35712 9.0165 1.35712C4.79641 1.35712 1.35712 4.79641 1.35712 9.0165C1.35712 10.7269 1.91485 12.3628 2.99311 13.72L3.17902 13.9616L2.78861 15.988L4.68487 15.3374Z"
                fill="white"
              ></path>
              <path
                d="M4.45036 6.23767C4.48184 5.68827 4.78379 5.18498 5.1487 4.77307C5.28509 4.61911 5.4362 4.49486 5.57904 4.47557C5.97307 4.42006 6.48702 4.42006 6.62407 4.69764C6.74217 4.93684 7.21649 6.17921 7.3454 6.5182C7.3673 6.57578 7.38952 6.63256 7.40012 6.69325C7.41831 6.79735 7.42688 6.97812 7.32647 7.15889C7.29116 7.22247 7.24416 7.29187 7.19269 7.36109C6.94982 7.68769 6.56326 8.06445 6.79539 8.39876C7.00097 8.69485 7.30934 9.25002 7.96035 9.95323C8.41644 10.4459 9.16682 10.8386 9.57529 11.0297C9.76399 11.1179 10.0004 11.2051 10.1532 11.0636C10.2729 10.9343 10.8876 10.1044 10.8899 10.1013C10.89 10.1012 10.8898 10.1013 10.8899 10.1013C10.8922 10.0981 11.0973 9.82464 11.421 9.99024C11.6434 10.1041 12.378 10.4945 12.8208 10.7303C13.0526 10.8537 13.3397 10.986 13.3397 11.2486C13.3397 11.5262 13.2369 12.1924 13.0314 12.4145C12.8258 12.6365 12.209 13.3398 11.3011 13.3398C10.3931 13.3398 8.21733 12.544 7.05236 11.2856C5.8874 10.0273 4.8595 8.76888 4.61965 7.60302C4.48568 7.00486 4.43087 6.57771 4.45036 6.23767Z"
                fill="white"
              ></path>
            </svg>
            Chat with Us
          </a>
             
        </div>
      </div>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          className="bg-[#10375C]"
          id="customized-dialog-title"
          onClose={handleClose}
        ></BootstrapDialogTitle>
        <DialogContent className="bg-[#10375C]" dividers>
          <div className="popup-form">
            <Form />
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  )
}
