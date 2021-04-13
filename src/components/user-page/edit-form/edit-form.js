import { Button, Container, TextField, Typography } from '@material-ui/core';
import '@/components/user-page/edit-form/edit-form.css';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '@/config/constants';
import { useDispatch } from 'react-redux';
import { updateUsers } from '@/redux/actions/usersAction';

const EditForm = (props) => {
  const dispatch = useDispatch();

  const { name: userName, email, phone } = props.currentUser;

  const [newInformation, setNewInformation] = useState({
    userName,
    email,
    phone,
  });

  const onChangeInput = (e) => {
    const { id, value } = e.target;
    setNewInformation({
      ...newInformation,
      [id]: value,
    });
  };

  const onUpdateHandler = async (e) => {
    e.preventDefault();
    const newData = {
      ...props.currentUser,
      name: newInformation.userName,
      email: newInformation.email,
      phone: newInformation.phone,
    };
    try {
      await axios.put(`${API_URL}/users/${props.currentUser.id}`, newData);
      dispatch(updateUsers(newData));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container className="edit__wrapper">
      <Typography variant="h4" className="edit__title">
        Edit user
      </Typography>
      <form className="edit__form" onSubmit={onUpdateHandler}>
        <TextField
          variant="outlined"
          label="Name"
          className="edit__input"
          id="userName"
          onChange={onChangeInput}
          value={newInformation.userName}
        />
        <TextField
          variant="outlined"
          label="Email"
          className="edit__input"
          id="email"
          onChange={onChangeInput}
          value={newInformation.email}
        />
        <TextField
          variant="outlined"
          label="Phone"
          className="edit__input"
          id="phone"
          onChange={onChangeInput}
          value={newInformation.phone}
        />
        <Button
          color="secondary"
          variant="contained"
          className="edit-save__btn"
          type="submit"
        >
          Save changes
        </Button>
      </form>
    </Container>
  );
};

export default EditForm;
