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
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import './Main-table.css';
import OneItem from './one-item/One-item';

const MainTable = () => {
  const [users, setUsers] = useState([]);
  const [checkedId, setIdChecked] = useState([]);
  const getData = async () => {
    try {
      const responseData = await fetch(
        'https://jsonplaceholder.typicode.com/users',
      ).then((response) => response.json());
      setUsers(responseData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const usersList = users.map((item) => {
    const { id, name, email, phone } = item;
    return (
      <OneItem
        key={id}
        id={id}
        name={name}
        email={email}
        phone={phone}
        onSelectedId={setIdChecked}
      />
    );
  });

  const sortList = (criterion) => {
    const newData = users.slice().sort((a, b) => {
      if (criterion === 'id') {
        return a[criterion] - b[criterion];
      } else {
        return a[criterion].localeCompare(b[criterion]);
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

  //не работает
  const onDelete = () => {
    for (let i = 0; i < checkedId.length; i++) {
      // if (checkedId.includes(1)) {
      setUsers(
        users.filter((item) =>
          checkedId.includes(item.id) ? item.id !== checkedId[i] : null,
        ),
      );
      // }
    }
  };

  return (
    <div className="table">
      <Typography variant="h2" className="main-title">
        Table of users
      </Typography>
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
        <Button
          variant="contained"
          color="secondary"
          className="btn__delete"
          onClick={onDelete}
        >
          Delete
        </Button>
      </Container>
    </div>
  );
};

export default MainTable;
