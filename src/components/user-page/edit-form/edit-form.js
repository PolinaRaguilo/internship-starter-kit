import { Button, Container, TextField, Typography } from '@material-ui/core';
import '@/components/user-page/edit-form/edit-form.css';
import axios from 'axios';
import { API_URL } from '@/config/constants';
import { useDispatch } from 'react-redux';
import { updateUsers } from '@/redux/actions/usersAction';
import { Controller, useForm } from 'react-hook-form';

const EditForm = (props) => {
  const { name: userName, email, phone } = props.currentUser;

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { userName, email, phone } });

  const onUpdateHandler = async (data) => {
    const newData = {
      ...props.currentUser,
      name: data.userName,
      email: data.email,
      phone: data.phone,
    };
    try {
      await axios.put(`${API_URL}/users/${props.currentUser.id}`, newData);
      props.setEdit(false);
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
      <form className="edit__form" onSubmit={handleSubmit(onUpdateHandler)}>
        <Controller
          name="userName"
          render={({ field }) => (
            <TextField
              error={errors.userName ? true : false}
              variant="outlined"
              label="Name"
              className="edit__input"
              helperText={errors.userName && 'Name is required!'}
              {...field}
            />
          )}
          control={control}
          rules={{ required: true }}
          defaultValue={userName}
        />
        <Controller
          name="email"
          render={({ field }) => (
            <TextField
              error={errors.email ? true : false}
              variant="outlined"
              label="Email"
              className="edit__input"
              helperText={errors.email && 'Invalid email!'}
              {...field}
            />
          )}
          control={control}
          rules={{
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          }}
          defaultValue={email}
        />
        <Controller
          name="phone"
          render={({ field }) => (
            <TextField
              error={errors.phone ? true : false}
              variant="outlined"
              label="Phone"
              className="edit__input"
              helperText={errors.phone && 'Invalid phone! Only numbers'}
              {...field}
            />
          )}
          control={control}
          rules={{
            required: true,
            pattern: /^[0-9]+$/,
          }}
          defaultValue={phone}
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
