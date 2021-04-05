import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import './Main-table.css';
import OneItem from "./one-item/One-item";

const MainTable = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(result => setUsers(result))
  }, [])
  const usersList = users.map(item => {
    const {id, name, email, phone} = item;
    return(
      <OneItem key={id}
      id={id}
      name={name}
      email={email}
      phone={phone}/>
    )
  })
  return (
    <>
      <h2 className="main-title">Table of users</h2>
      <TableContainer className='table'>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">id</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {usersList}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default MainTable;
