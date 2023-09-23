import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormLabel,
  RadioGroup,
  Radio,
  Typography,
} from "@mui/material";

const Form = () => {
  const [inputs, setInputs] = useState({
    Name: "",
    Email: "",
    Password: "",
    course: "",
    terms: false,
    gender: "",
  });
  //input change func
  const handle = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };
  //form handling
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <>
      <Typography variant="h4"> Form</Typography>
      <form onSubmit={handlesubmit}>
        <TextField
          value={inputs.Name}
          onChange={handle}
          name="Name"
          type="Name"
          variant="outlined"
          placeholder="Name"
          sx={{ margin: "20px" }}
        />
        <br />
        <TextField
          value={inputs.Email}
          onChange={handle}
          name="Email"
          type="Email"
          variant="outlined"
          placeholder="Email"
          sx={{ margin: "20px" }}
        />
        <br />
        <TextField
          value={inputs.Password}
          onChange={handle}
          name="Password"
          type="Password"
          variant="outlined"
          placeholder="Password"
          sx={{ margin: "20px" }}
        />
        <br />

        <FormControl fullWidth sx={{ size: "20px" }}>
          <InputLabel id="menu">Courses</InputLabel>
          <Select
            label="course"
            value={inputs.course}
            onChange={handle}
            name="course"
          >
            <MenuItem value={"mongodb"}> mongodb</MenuItem>
            <MenuItem value={"express js"}> expressjs</MenuItem>
            <MenuItem value={"node js"}> node js</MenuItem>
          </Select>
        </FormControl>
        <br />
        <FormGroup sx={{ margin: "20px" }}>
          <FormControlLabel
            label=" i agree T&C"
            control={
              <Checkbox
                onChange={() =>
                  setInputs((prevState) => ({
                    ...prevState,
                    terms: !inputs.terms,
                  }))
                }
              />
            }
          />
        </FormGroup>
        <br />
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup name="gender" onChange={handle}>
            <FormControlLabel
              value={"male"}
              label={"male"}
              control={<Radio />}
            />
            {/* <FormControlLabel value={"male"} label={"other"} control={<Radio />} /> */}
            {/* <FormControlLabel value={"male"} label="male" control={<Radio />} /> */}
            <FormControlLabel
              value={"female"}
              label="female"
              control={<Radio />}
            />{" "}
          </RadioGroup>
        </FormControl>
        <br />
        <Button type="submit"> submit</Button>
      </form>
    </>
  );
};

export default Form;
