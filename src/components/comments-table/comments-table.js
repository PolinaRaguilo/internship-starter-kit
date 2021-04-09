import {
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
import { useSelector } from 'react-redux';

const CommentsTable = () => {
  const { commentsData: comments } = useSelector((state) => state.comments);
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
  return (
    <div className="table__comments">
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
            </TableRow>
          </TableHead>
          <TableBody>{commentsList}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CommentsTable;
