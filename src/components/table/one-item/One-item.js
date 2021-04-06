import { TableCell, TableRow } from '@material-ui/core';
import { Link } from 'react-router-dom';

const OneItem = (props) => {
  const { id, name, email, phone } = props;
  return (
    <TableRow>
      <TableCell align="center">{id}</TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{email}</TableCell>
      <TableCell align="center">{phone}</TableCell>
      <TableCell align="center">
        <Link to={`/user/${id}`}>More information</Link>
      </TableCell>
    </TableRow>
  );
};

export default OneItem;
