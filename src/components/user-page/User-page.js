import { Button, Container, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import '@/components/user-page/User-page.css';
import { useParams } from 'react-router';
import EditForm from './edit-form/edit-form';
import { useState } from 'react';

const UserPage = () => {
  const usersTableData = useSelector((state) => state.users.usersData);
  const isLoading = useSelector((state) => state.users.isLoading);

  const [isEdit, setEdit] = useState(false);

  const { id: currentId } = useParams();

  const editHandler = () => {
    setEdit(!isEdit);
  };

  if (isLoading) {
    return <Typography variant="h4">Loading...</Typography>;
  }
  const currUser = usersTableData.find((item) => item.id === +currentId);

  if (!currUser) {
    return <Typography variant="h4">No such user...</Typography>;
  }

  const { name: userNAme, email, website } = currUser;
  const { city, street, suite, zipcode } = currUser.address;
  const { name } = currUser.company;

  return (
    <Container className="user-page__wrapper">
      <Typography variant="h3" className="user-page__title">
        User infromation
      </Typography>
      <Container>
        <Typography variant="h4">Name: {userNAme}</Typography>
        <Typography variant="h4">Email: {email}</Typography>
        <Typography variant="h4">Website: {website}</Typography>
        <Typography variant="h4">City: {city}</Typography>
        <Typography variant="h4">Street: {street}</Typography>
        <Typography variant="h4">Suite: {suite} </Typography>
        <Typography variant="h4">Zipcode: {zipcode}</Typography>
        <Typography variant="h4">Company: {name}</Typography>
      </Container>
      <Button
        variant="contained"
        color={isEdit ? 'primary' : 'secondary'}
        onClick={editHandler}
      >
        {isEdit ? 'Close edit' : 'Edit User'}
      </Button>
      {isEdit && <EditForm />}
    </Container>
  );
};

export default UserPage;
