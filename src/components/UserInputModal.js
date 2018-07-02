import React, { Component } from "react";
import { Modal, Typography, Button, TextField } from "@material-ui/core";

const styles = {
  ModalStyle: {
    top: "50%",
    left: "50%",
    backgroundColor: "#fff",
    transform: "translate(125%,25%)",
    height: "fit-content",
    padding: 20
  },
  bootstrapInput: {
    borderRadius: 4,
    border: "1px solid #ced4da",
    fontSize: 20,
    marginTop: 25,
    padding: "10px 12px",
    width: 300,
    height: 150,
    fontFamily: "Source Sans Pro",
    "&:focus": {
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  },
  button: {
    backgroundColor: "#26A65C",
    color: "#fff",
    margin: "10px",
    fontWeight: 700,
    fontFamily: "Source Sans Pro",
    fontSize: 14
  }
};

class UserInputModal extends Component {
  render() {
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.open}
        onClose={this.props.close}
      >
        <div style={styles.ModalStyle}>
          <Typography variant="title" id="modal-title">
            Text in a modal
          </Typography>
          <TextField
            multiline
            rowsMax="7"
            InputProps={{
              disableUnderline: true,
              style: styles.bootstrapInput
            }}
          />
          <br />
          <Button variant="flat" style={styles.button}>
            Post
          </Button>
        </div>
      </Modal>
    );
  }
}

export default UserInputModal;
