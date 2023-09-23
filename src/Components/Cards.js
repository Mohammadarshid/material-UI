import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
const Cards = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component={"img"}
          height="140"
          image="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80"
          alt="test image"
        />

        <CardContent gutterBottom varient="h5" cpmponent="div">
          <Typography> web design</Typography>
          <Typography variant="body2">
            Support Free Content We use ads to keep our content free for you.
            Please allow ads and let sponsors fund your surfing. Thank you!
          </Typography>
          <CardActions>
            <Button size="small" color="primary">
              share
            </Button>
            <Button size="small" color="primary" onClick={() => setOpen(true)}>
              delete
            </Button>
          </CardActions>
        </CardContent>
      </Card>
      <Dialog open={false} onClose={() => setOpen(false)}>
        <DialogTitle>ARE you sure</DialogTitle>
        <DialogContent>
          <DialogContentText>
            are you sure to delete this product
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>share</Button>
          <Button> delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Cards;
