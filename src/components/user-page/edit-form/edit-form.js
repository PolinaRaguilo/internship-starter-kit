import { Button, Container, TextField, Typography } from '@material-ui/core';
import '@/components/user-page/edit-form/edit-form.css';

const EditForm = () => {
  return (
    <Container className="edit__wrapper">
      <Typography variant="h4" className="edit__title">
        Edit user
      </Typography>
      <form className="edit__form">
        <TextField variant="outlined" label="Name" className="edit__input" />
        <TextField variant="outlined" label="Email" className="edit__input" />
        <TextField variant="outlined" label="Website" className="edit__input" />
        <TextField variant="outlined" label="City" className="edit__input" />
        <TextField variant="outlined" label="Street" className="edit__input" />
        <TextField variant="outlined" label="Suite" className="edit__input" />
        <TextField variant="outlined" label="Zipcode" className="edit__input" />
        <TextField variant="outlined" label="Company" className="edit__input" />
        <Button
          color="secondary"
          variant="contained"
          className="edit-save__btn"
        >
          Save changes
        </Button>
      </form>
    </Container>
  );
};

export default EditForm;
