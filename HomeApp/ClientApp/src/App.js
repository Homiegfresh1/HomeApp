import './custom.css'
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/views/Home';
import Groceries from './components/views/Groceries';
import Recipes from './components/views/Recipes';

const App = () => {
    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/Groceries' component={Groceries} />
            <Route exact path='/Recipes' component={Recipes} />
        </Layout>
    );
}

export default App;