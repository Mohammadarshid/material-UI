import React, { useState } from "react";
import { Modal, Button, Box, Typography, Link } from "@mui/material";
const Modals = () => {
  const [open, SetOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => SetOpen(true)}> open Model</Button>
      <Modal open={open} onClose={() => SetOpen(false)}>
        <Box position="absolute" top="50%" left="50%">
          <Typography>this a model</Typography>
          <Button variant="contained" onClick={() => SetOpen(false)}>
            Cancel
          </Button>
        </Box>
      </Modal>
      <Link
        variant="h4"
        color="secondary"
        href="https://mail.google.com/mail/u/0/#inbox"
        underline="hover"
      >
        Navlink
      </Link>
    </div>
  );
};

export default Modals;
