import {
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
import { useEffect, useState } from 'react';
import { API_URL } from '../../config/constants';
import './Main-table.css';
import OneItem from './one-item/One-item';

const MainTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [onError, setError] = useState(false);
  useEffect(() => {
    fetch(`${API_URL}/users`)
      .then((response) => response.json())
      .then((result) => {
        setUsers(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);
  const usersList = users.map((item) => {
    const { id, name, email, phone } = item;
    return <OneItem key={id} id={id} name={name} email={email} phone={phone} />;
  });

  const sortList = (criterion) => {
    const newData = users.slice().sort((a, b) => {
      if (criterion === 'id') {
        if (a[criterion] < b[criterion]) return -1;
        if (a[criterion] > b[criterion]) return 1;
        return 0;
      } else {
        if (a[criterion].toLowerCase() < b[criterion].toLowerCase()) return -1;
        if (a[criterion].toLowerCase() > b[criterion].toLowerCase()) return 1;
        return 0;
      }
    });
    setUsers(newData);
  };

  const sortIdHandler = () => {
    sortList('id');
  };

  const sortNameHandler = () => {
    sortList('name');
  };

  const sortEmailHandler = () => {
    sortList('email');
  };
  const sortPhoneHandler = () => {
    sortList('phone');
  };
  const usersTable = (
    <>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Button className="btn__title" onClick={sortIdHandler}>
                  id
                </Button>
              </TableCell>
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
        <Button variant="contained" color="secondary" className="btn__delete">
          Delete
        </Button>
      </Container>
    </>
  );
  return (
    <>
      <div className="table">
        <Typography variant="h2" className="main-title">
          {onError ? 'Oops, error...' : 'Table of users'}
        </Typography>
        {loading ? (
          <Container className="spinner__container">
            <CircularProgress color="secondary" />
          </Container>
        ) : null}
        {!(loading || onError) ? usersTable : null}
      </div>
    </>
  );
};

export default MainTable;
