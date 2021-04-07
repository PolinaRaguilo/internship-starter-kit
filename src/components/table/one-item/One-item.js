import { TableCell, TableRow } from '@material-ui/core';

const OneItem = (props) => {
  const { id, name, email, phone } = props;
  return (
    <TableRow>
      <TableCell align="center">{id}</TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{email}</TableCell>
      <TableCell align="center">{phone}</TableCell>
    </TableRow>
  );
};

export default OneItem;
