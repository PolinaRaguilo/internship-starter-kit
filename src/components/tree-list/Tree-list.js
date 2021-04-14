import { Container, Typography } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';

const TreeList = () => {
  const [exp, setExp] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3002/listExperiences')
      .then((res) => setExp(res.data.items));
  }, []);

  console.log(exp);

  return (
    <Container>
      <Typography variant="h3">Tree List</Typography>
    </Container>
  );
};

export default TreeList;
