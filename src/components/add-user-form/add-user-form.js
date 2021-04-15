import { Button, Container, TextField, Typography } from '@material-ui/core';
import '@/components/add-user-form/add-user-form.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '@/config/constants';
import { useDispatch } from 'react-redux';
import { fethcUsers } from '@/redux/actions/usersAction';
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';

const AddUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();

  const addUser = async (data) => {
    try {
      await axios.post(`${API_URL}/users`, {
        id: nanoid(5),
        ...data,
      });
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
      <form action="submit" onSubmit={handleSubmit(addUser)}>
        <Container>
          <TextField
            error={errors.name ? true : false}
            label="Name"
            variant="outlined"
            className="add-input"
            helperText={errors.name && 'Name is required!'}
            {...register('name', { required: true })}
          />
        </Container>
        <Container>
          <TextField
            error={errors.email ? true : false}
            label="Email"
            variant="outlined"
            className="add-input"
            helperText={errors.email && 'Invalid email!'}
            {...register('email', {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            })}
          />
        </Container>
        <Container>
          <TextField
            error={errors.phone ? true : false}
            label="Phone"
            variant="outlined"
            className="add-input"
            helperText={errors.phone && 'Invalid phone! Only numbers'}
            {...register('phone', {
              required: true,
              pattern: /^[0-9]+$/,
            })}
          ></TextField>
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
