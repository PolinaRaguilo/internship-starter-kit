import MainTable from '@/components/table/Main-table';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserPage from '@/components/user-page/User-page';
import { useEffect } from 'react';
import { fethcUsers } from '@/redux/actions/usersAction';
import { useDispatch } from 'react-redux';
import Counter from '@/components/counter/counter';

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
        <Route path="/counter" component={Counter} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
