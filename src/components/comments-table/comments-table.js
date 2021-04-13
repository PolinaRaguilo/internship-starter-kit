import {
  Box,
  CircularProgress,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import OneComment from '@/components/comments-table/one-comment/one-comment';
import '@/components/comments-table/comments-table.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchComments } from '@/redux/actions/commentsAction';

const CommentsTable = () => {
  const dispatch = useDispatch();
  const { commentsData: comments, isLoading, errComments } = useSelector(
    (state) => state.comments,
  );
  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  const commentsList = comments.map((item) => {
    const { id, postId, name, email, body } = item;
    return (
      <OneComment
        key={id}
        postId={postId}
        nameComment={name}
        email={email}
        body={body}
      />
    );
  });
  if (isLoading) {
    return (
      <Container className="spinner__container">
        <CircularProgress color="secondary" />
      </Container>
    );
  }
  if (errComments) {
    return (
      <Typography variant="h2" className="main-title">
        Oops, error...
      </Typography>
    );
  }
  return (
    <Box className="table__comments">
      <Typography variant="h3" className="title__comments">
        Comments page
      </Typography>
      <Link to="/" className="link__back">
        Back
      </Link>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Post id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Body</TableCell>
              <TableCell align="center">Unique Symbols</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{commentsList}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CommentsTable;
