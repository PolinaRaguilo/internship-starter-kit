import MainTable from '@/components/table/Main-table';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserPage from '@/components/user-page/User-page';
import { useEffect } from 'react';
import { fethcUsers } from '@/redux/actions/usersAction';
import { useDispatch } from 'react-redux';
import CommentsTable from '@/components/comments-table/comments-table';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fethcUsers());
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/user/:id" component={UserPage} />
        <Route path="/comments" component={CommentsTable} />
        <Route path="/" component={MainTable} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
