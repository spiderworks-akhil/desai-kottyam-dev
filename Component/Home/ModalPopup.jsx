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
      <div className="flex">
        <a
          href="tel:+919847528000"
          variant="outlined"
          className="book-now-btn navbar-btn bg-[#10375c] px-4 py-2 rounded-md text-white hover:text-[#fff] hover:bg-[#1CC273]"
        >
          Call Now
        </a>

        <a
          variant="outlined"
          className="book-now-btn btn-2 navbar-btn bg-[#4D26D7] px-4 py-2 rounded-md text-white  hover:text-[#fff] hover:bg-[#1CC273]"
          onClick={handleClickOpen}
        >
          Book Now
        </a>
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
