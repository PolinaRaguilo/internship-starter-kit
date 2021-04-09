import MainTable from '@/components/table/Main-table';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserPage from '@/components/user-page/User-page';
import { useEffect } from 'react';
import { fethcUsers } from '@/redux/actions/usersAction';
import { useDispatch } from 'react-redux';
import CommentsTable from '@/components/comments-table/comments-table';
import { fetchComments } from '@/redux/actions/commentsAction';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fethcUsers());
    dispatch(fetchComments());
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainTable} />
        <Route path="/user/:id" component={UserPage} />
        <Route exact path="/comments" component={CommentsTable} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
