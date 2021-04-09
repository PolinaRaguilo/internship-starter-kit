import { TableCell, TableRow } from '@material-ui/core';

const OneComment = () => {
  return (
    <TableRow>
      <TableCell align="center">postId</TableCell>
      <TableCell align="center">name</TableCell>
      <TableCell align="center">email</TableCell>
      <TableCell align="center">body</TableCell>
    </TableRow>
  );
};

export default OneComment;
