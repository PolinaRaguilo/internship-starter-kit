import { TableCell, TableRow } from '@material-ui/core';

const OneComment = (props) => {
  const { postId, nameComment, email, body } = props;
  return (
    <TableRow>
      <TableCell align="center">{postId}</TableCell>
      <TableCell align="center">{nameComment}</TableCell>
      <TableCell align="center">{email}</TableCell>
      <TableCell align="center">{body}</TableCell>
    </TableRow>
  );
};

export default OneComment;
