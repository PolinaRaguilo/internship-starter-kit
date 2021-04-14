import MainTable from '@/components/table/Main-table';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import UserPage from '@/components/user-page/User-page';
import { useEffect } from 'react';
import { fethcUsers } from '@/redux/actions/usersAction';
import { useDispatch } from 'react-redux';
import AddUserForm from '@/components/add-user-form/add-user-form';
import CommentsTable from '@/components/comments-table/comments-table';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fethcUsers());
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainTable} />
        <Route path="/user/:id" component={UserPage} />
        <Route path="/add_user" component={AddUserForm} />
        <Route path="/comments" component={CommentsTable} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
