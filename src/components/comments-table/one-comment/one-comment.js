import { TableCell, TableRow } from '@material-ui/core';

const OneComment = (props) => {
  const { postId, nameComment, email, body } = props;

  const symbolsLine = [...body.replace(/\r?\n/g, '').split(' ').join('')];

  const uniqueSymbols = symbolsLine.reduce(
    (acc, curr) => (acc.includes(curr) || acc.push(curr), acc),
    [],
  );

  const unUniqueObject = symbolsLine.reduce((accSymb, curr) => {
    accSymb[curr] = (accSymb[curr] || 0) + 1;
    return accSymb;
  }, {});
  const unUnique = Object.values(unUniqueObject).filter((item) => item !== 1)
    .length;

  const singleSymbols = Object.values(unUniqueObject).filter(
    (item) => item == 1,
  ).length;

  return (
    <TableRow>
      <TableCell align="center">{postId}</TableCell>
      <TableCell align="center">{nameComment}</TableCell>
      <TableCell align="center">{email}</TableCell>
      <TableCell align="center">{body}</TableCell>
      <TableCell align="center">{uniqueSymbols.length}</TableCell>
      <TableCell align="center">{unUnique}</TableCell>
      <TableCell align="center">{singleSymbols}</TableCell>
    </TableRow>
  );
};

export default OneComment;
