import { TableCell, TableRow, Checkbox } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OneItem = (props) => {
  const { id, name, email, phone } = props;
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    if (props.checkedIdArr.includes(id) && checked === false) {
      let newI = props.checkedIdArr.filter((item) => item !== id);
      props.onSelectedId(newI);
    }
    if (checked) {
      props.onSelectedId((oldItems) => [...oldItems, id]);
    }
  }, [checked]);

  return (
    <TableRow>
      <TableCell align="center">
        <Checkbox checked={checked} onChange={handleChange} />
      </TableCell>
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
