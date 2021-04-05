import { TableCell, TableRow, Checkbox } from '@material-ui/core';
import { useState } from 'react';

const OneItem = (props) => {
  const { id, name, email, phone } = props;
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <TableRow>
      <TableCell align="center">
        <Checkbox checked={checked} onChange={handleChange} />
        {id}
      </TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{email}</TableCell>
      <TableCell align="center">{phone}</TableCell>
    </TableRow>
  );
};

export default OneItem;
