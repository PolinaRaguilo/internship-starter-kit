import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
  Container,
  CircularProgress,
} from '@material-ui/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recievedUsers } from '@/redux/actions/usersAction';
import '@/components/table/Main-table.css';
import OneItem from '@/components/table/one-item/One-item';
import { Link } from 'react-router-dom';

const MainTable = () => {
  const { usersData: users, isLoading, err } = useSelector(
    (state) => state.users,
  );
  const dispatch = useDispatch();
  const [checkedId, setIdChecked] = useState([]);
  const [direction, setDirection] = useState({
    directionName: 'asc',
    directionEmail: 'asc',
    directionPhone: 'asc',
  });

  const usersList = users.map((item) => {
    const { id, name, email, phone } = item;
    return (
      <OneItem
        key={id}
        id={id}
        name={name}
        email={email}
        phone={phone}
        checkedIdArr={checkedId}
        onSelectedId={setIdChecked}
      />
    );
  });

  const sortList = (criterion, direction) => {
    const newData = users.slice().sort((a, b) => {
      switch (direction) {
        case 'asc':
          return a[criterion].localeCompare(b[criterion]);
        case 'desc':
          return b[criterion].localeCompare(a[criterion]);
      }
    });
    dispatch(recievedUsers(newData));
  };

  const sortNameHandler = () => {
    setDirection({
      ...direction,
      directionName: direction.directionName === 'asc' ? 'desc' : 'asc',
    });
    sortList('name', direction.directionName);
  };

  const sortEmailHandler = () => {
    setDirection({
      ...direction,
      directionEmail: direction.directionEmail === 'asc' ? 'desc' : 'asc',
    });
    sortList('email', direction.directionEmail);
  };
  const sortPhoneHandler = () => {
    setDirection({
      ...direction,
      directionPhone: direction.directionPhone === 'asc' ? 'desc' : 'asc',
    });
    sortList('phone', direction.directionPhone);
  };
  const onDelete = () => {
    let res = users.filter((item) => !checkedId.includes(item.id));
    dispatch(recievedUsers(res));
  };

  if (isLoading) {
    return (
      <Container className="spinner__container">
        <CircularProgress color="secondary" />
      </Container>
    );
  }

  if (err) {
    return (
      <Typography variant="h2" className="main-title">
        Oops, error...
      </Typography>
    );
  }

  return (
    <Box className="table">
      <Typography variant="h2" className="main-title">
        Table of users
      </Typography>
      <Link to="/counter">Counter</Link>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" />
              <TableCell align="center">
                <Button className="btn__title" onClick={sortNameHandler}>
                  Name
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button className="btn__title" onClick={sortEmailHandler}>
                  Email
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button className="btn__title" onClick={sortPhoneHandler}>
                  Phone
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{usersList}</TableBody>
        </Table>
      </TableContainer>
      <Container className="wrapper__btn-delete">
        <Button
          variant="contained"
          color="secondary"
          className="btn__delete"
          onClick={onDelete}
        >
          Delete
        </Button>
      </Container>
    </Box>
  );
};

export default MainTable;
