import MainTable from '@/components/table/Main-table';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserPage from './components/user-page/User-page';
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainTable} />
      <Route path="/user/:id" component={UserPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
