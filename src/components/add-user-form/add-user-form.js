import { Button, Container, TextField, Typography } from '@material-ui/core';
import '@/components/add-user-form/add-user-form.css';
import { Link } from 'react-router-dom';

const AddUserForm = () => {
  return (
    <div className="add-wrapper">
      <Typography variant="h4" className="add-title">
        Add new user
      </Typography>
      <form action="submit">
        <Container>
          <TextField
            id="Name"
            label="Name"
            variant="outlined"
            className="add-input"
          />
        </Container>
        <Container>
          <TextField
            id="Email"
            label="Email"
            variant="outlined"
            className="add-input"
          />
        </Container>
        <Container>
          <TextField
            id="Phone"
            label="Phone"
            variant="outlined"
            className="add-input"
          />
        </Container>
        <Button variant="contained" color="secondary" className="add-btn">
          Add
        </Button>
      </form>
      <Link to="/" className="link-back">
        Back
      </Link>
    </div>
  );
};

export default AddUserForm;
