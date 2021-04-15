import { Button, Container, Typography } from '@material-ui/core';
import '@/components/user-page/edit-form/edit-form.css';
import axios from 'axios';
import { API_URL } from '@/config/constants';
import { useDispatch } from 'react-redux';
import { updateUsers } from '@/redux/actions/usersAction';
import { useForm } from 'react-hook-form';
import FormController from '@/components/form-checking-controller/form-checking-controller';

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
        <FormController
          err={errors.userName}
          defaultParam={userName}
          labelName="Name"
          textHelp="Name is required!"
          rulesValidation={{ required: true }}
          name="userName"
          control={control}
        />
        <FormController
          err={errors.email}
          defaultParam={email}
          labelName="Email"
          textHelp="Email is required!"
          rulesValidation={{
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          }}
          name="email"
          control={control}
        />
        <FormController
          err={errors.phone}
          defaultParam={phone}
          labelName="Phone"
          textHelp="Invalid phone! Only numbers"
          rulesValidation={{
            required: true,
            pattern: /^[0-9]+$/,
          }}
          name="phone"
          control={control}
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
