import { useState } from "react";
import {
  Container,
  TextField,
  Grid,
  Typography,
  Divider,
  Button,
  Alert,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { handleUpdateChangesClick } from "./EditCardPage";
import { inputsValueObject } from "../CreateCardPage/inputValue";

const EditCardPage = () => {
  const navigate = useNavigate();
  const [inputsValue, setInputValue] = useState(inputsValueObject);
  const { id: _id } = useParams();
  const [errorsState, setErrorsState] = useState(null);

  const handleInputChange = (e) => {
    setInputValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = () => {
    handleUpdateChangesClick(inputsValue, setErrorsState, navigate, _id);
  };

  return (
    <Container sx={{ mt: 12 }}>
      <Typography variant="h3" sx={{ mb: 1, padding: "10px", pb: "0px" }}>
        Edit Card{" "}
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, padding: "3px", ml: "7px" }}>
        Put a new values in the correct input
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Grid container flexDirection={"column"} sx={{ width: "60vw" }}>
        <TextField
          id="title"
          label="Title"
          variant="outlined"
          sx={{ mt: "10px" }}
          onChange={handleInputChange}
          value={inputsValue.title}
          required
        />
        {errorsState && errorsState.title && (
          <Alert severity="warning">{errorsState.title}</Alert>
        )}
        <TextField
          id="subtitle"
          label="SubTitle"
          variant="outlined"
          sx={{ mt: "10px" }}
          onChange={handleInputChange}
          value={inputsValue.subtitle}
          required
        />
        {errorsState && errorsState.subtitle && (
          <Alert severity="warning">{errorsState.subtitle}</Alert>
        )}
        <TextField
          id="phone"
          label="Phone Number"
          variant="outlined"
          sx={{ mt: "10px" }}
          onChange={handleInputChange}
          value={inputsValue.phone}
          required
        />
        {errorsState && errorsState.phone && (
          <Alert severity="warning">{errorsState.phone}</Alert>
        )}
        <TextField
          id="description"
          label="Description"
          variant="outlined"
          sx={{ mt: "10px" }}
          onChange={handleInputChange}
          value={inputsValue.description}
          required
        />
        {errorsState && errorsState.description && (
          <Alert severity="warning">{errorsState.description}</Alert>
        )}
        <TextField
          id="web"
          label="Web"
          variant="outlined"
          sx={{ mt: "10px" }}
          onChange={handleInputChange}
          value={inputsValue.web}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          sx={{ mt: "10px" }}
          onChange={handleInputChange}
          value={inputsValue.email}
          required
        />
        {errorsState && errorsState.email && (
          <Alert severity="warning">{errorsState.email}</Alert>
        )}
        <TextField
          id="url"
          label="Url"
          variant="outlined"
          sx={{ mt: "10px" }}
          onChange={handleInputChange}
          value={inputsValue.url}
        />
        <TextField
          id="alt"
          label="Alt"
          variant="outlined"
          sx={{ mt: "10px" }}
          onChange={handleInputChange}
          value={inputsValue.alt}
        />
        <TextField
          id="state"
          label="State"
          variant="outlined"
          sx={{ mt: "10px" }}
          onChange={handleInputChange}
          value={inputsValue.state}
        />
        <TextField
          id="country"
          label="Country"
          variant="outlined"
          sx={{ mt: "10px" }}
          onChange={handleInputChange}
          value={inputsValue.country}
          required
        />
        {errorsState && errorsState.country && (
          <Alert severity="warning">{errorsState.country}</Alert>
        )}
        <TextField
          id="city"
          label="City"
          variant="outlined"
          sx={{ mt: "10px" }}
          onChange={handleInputChange}
          value={inputsValue.city}
          required
        />
        {errorsState && errorsState.city && (
          <Alert severity="warning">{errorsState.city}</Alert>
        )}
        <TextField
          id="street"
          label="Street"
          variant="outlined"
          sx={{ mt: "10px" }}
          onChange={handleInputChange}
          value={inputsValue.street}
          required
        />
        {errorsState && errorsState.street && (
          <Alert severity="warning">{errorsState.street}</Alert>
        )}
        <TextField
          id="houseNumber"
          label="House Number"
          variant="outlined"
          sx={{ mt: "10px" }}
          onChange={handleInputChange}
          value={inputsValue.houseNumber}
          required
        />
        {errorsState && errorsState.houseNumber && (
          <Alert severity="warning">{errorsState.houseNumber}</Alert>
        )}
        <TextField
          id="zip"
          label="Zip"
          variant="outlined"
          sx={{ mt: "10px" }}
          onChange={handleInputChange}
          value={inputsValue.zip}
        />
        <Grid container spacing={2}>
          <Grid item lg={8} md={8} sm={8} xs>
            <Button
              variant="outlined"
              sx={{
                mt: 2,
                width: "100%",
                ml: "0%",
                bgcolor: "lightskyblue",
                color: "white",
              }}
              onClick={handleClick}
            >
              Update Changes
            </Button>
          </Grid>
          <Grid item xs sx={{ mb: 2 }}>
            <Link to={ROUTES.MYCARDS}>
              <Button
                variant="outlined"
                sx={{
                  mt: 2,
                  width: "100%",
                  ml: "0%",
                  bgcolor: "navy",
                }}
              >
                Discard Changes
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default EditCardPage;
