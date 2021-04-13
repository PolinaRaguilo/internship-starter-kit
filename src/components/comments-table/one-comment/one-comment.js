import { TableCell, TableRow } from '@material-ui/core';

const OneComment = (props) => {
  const { postId, nameComment, email, body } = props;

  //в правильном ли я направлении вообще?

  const uniqueSymbols = new Set([...body.split(' ').join('')]);

  return (
    <TableRow>
      <TableCell align="center">{postId}</TableCell>
      <TableCell align="center">{nameComment}</TableCell>
      <TableCell align="center">{email}</TableCell>
      <TableCell align="center">{body}</TableCell>
      <TableCell align="center">{uniqueSymbols.size}</TableCell>
    </TableRow>
  );
};

export default OneComment;
