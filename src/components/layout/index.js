import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0 }}
          ></Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">SingUp</Button>
        </Toolbar>
      </AppBar>

      <Paper
        sax={{
          p: 9
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={15}></Grid>
          <Grid item xs={12}>
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)"
              }}
            >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfn-3QnIehZ7rKtLNbsP4FsOXNofoI7EWlg&usqp=CAU" />
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
