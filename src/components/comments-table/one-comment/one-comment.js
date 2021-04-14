import { TableCell, TableRow } from '@material-ui/core';

const OneComment = (props) => {
  const { postId, nameComment, email, body } = props;

  const uniqueSymbols = [
    ...body.replace(/\r?\n/g, '').split(' ').join(''),
  ].reduce((acc, curr) => (acc.includes(curr) || acc.push(curr), acc), []);

  return (
    <TableRow>
      <TableCell align="center">{postId}</TableCell>
      <TableCell align="center">{nameComment}</TableCell>
      <TableCell align="center">{email}</TableCell>
      <TableCell align="center">{body}</TableCell>
      <TableCell align="center">{uniqueSymbols.length}</TableCell>
    </TableRow>
  );
};

export default OneComment;
