import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import './Main-table.css';
import OneItem from './one-item/One-item';

const MainTable = () => {
  const [users, setUsers] = useState([]);
  // const [checkedId, setIdChecked] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((result) => setUsers(result));
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

  const onDelete = (id) => {
    const newData = users.slice().filter((item) => item.id !== id);
    setUsers(newData);
  };

  const onDeleteHandler = () => {
    onDelete(3);
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
      <Button
        variant="contained"
        color="secondary"
        className="btn__delete"
        onClick={onDeleteHandler}
      >
        Delete
      </Button>
    </div>
  );
};

export default MainTable;
