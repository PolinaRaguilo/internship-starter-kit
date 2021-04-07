import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recievedUsers } from '../../redux/actions/usersAction';
import './Main-table.css';
import OneItem from './one-item/One-item';

const MainTable = () => {
  const users = useSelector((state) => state.users.usersData);
  const dispatch = useDispatch();

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
    dispatch(recievedUsers(newData));
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
  return (
    <>
      <h2 className="main-title">Table of users</h2>
      <TableContainer className="table">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <button className="btn__title" onClick={sortIdHandler}>
                  id
                </button>
              </TableCell>
              <TableCell align="center">
                <button className="btn__title" onClick={sortNameHandler}>
                  Name
                </button>
              </TableCell>
              <TableCell align="center">
                <button className="btn__title" onClick={sortEmailHandler}>
                  Email
                </button>
              </TableCell>
              <TableCell align="center">
                <button className="btn__title" onClick={sortPhoneHandler}>
                  Phone
                </button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{usersList}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MainTable;
