import { Button, Container, TextField, Typography } from '@material-ui/core';
import '@/components/add-user-form/add-user-form.css';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config/constants';
import { useDispatch } from 'react-redux';
import { fethcUsers } from '../../redux/actions/usersAction';
import { nanoid } from 'nanoid';

const AddUserForm = () => {
  const initialUser = {
    name: '',
    email: '',
    phone: '',
  };
  const [newUser, setNewUser] = useState(initialUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const onInputChange = (e) => {
    const { id, value } = e.target;
    setNewUser({
      ...newUser,
      [id]: value,
    });
  };

  const addUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/users`, {
        id: nanoid(5),
        ...newUser,
      });
      setNewUser(initialUser);
      dispatch(fethcUsers());
      history.push('/');
    } catch (err) {
      console.log(err);
      alert('Try again!');
    }
  };
  return (
    <div className="add-wrapper">
      <Typography variant="h4" className="add-title">
        Add new user
      </Typography>
      <form action="submit" onSubmit={addUser}>
        <Container>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            className="add-input"
            value={newUser.name}
            onChange={onInputChange}
          />
        </Container>
        <Container>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            className="add-input"
            value={newUser.email}
            onChange={onInputChange}
          />
        </Container>
        <Container>
          <TextField
            id="phone"
            label="Phone"
            variant="outlined"
            className="add-input"
            value={newUser.phone}
            onChange={onInputChange}
          />
        </Container>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className="add-btn"
        >
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
