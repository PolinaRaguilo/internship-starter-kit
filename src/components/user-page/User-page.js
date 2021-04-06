import { Container, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import '@/components/user-page/User-page.css';

const UserPage = (props) => {
  const usersTableData = useSelector((state) => state.userReducer.usersData);
  const currentId = props.match.params.id;
  const currUser = usersTableData.find((item) => item.id === +currentId);
  return (
    <Container className="user-page__wrapper">
      <Typography variant="h3" className="user-page__title">
        User infromation
      </Typography>
      <Typography variant="h4">Name: {currUser.name}</Typography>
      <Typography variant="h4">Email: {currUser.email}</Typography>
      <Typography variant="h4">Website: {currUser.website}</Typography>
      <Typography variant="h4">City: {currUser.address.city}</Typography>
      <Typography variant="h4">Street: {currUser.address.street}</Typography>
      <Typography variant="h4">Suite: {currUser.address.suite} </Typography>
      <Typography variant="h4">Zipcode: {currUser.address.zipcode}</Typography>
      <Typography variant="h4">Website: {currUser.website}</Typography>
      <Typography variant="h4">Company: {currUser.company.name}</Typography>
    </Container>
  );
};

export default UserPage;
