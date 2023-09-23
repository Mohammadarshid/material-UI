import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const List = () => {
  return (
    <div>
      <Typography variant="h3">Amir Khan</Typography>
      <List sx={{ width: 250, background: "grey" }}>
        <ListItem>
          <ListItemButton>{">"}</ListItemButton>
          <ListItemText primary="mohammad" />
        </ListItem>
      </List>
    </div>
  );
};

export default List;
