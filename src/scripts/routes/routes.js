import Detail from '../views/pages/detail';
import Favourite from '../views/pages/favourite';
import Home from '../views/pages/home';

const routes = {
    '/': Home,
    '/home': Home,
    '/favourites': Favourite,
    '/detail/:id': Detail,
};

export default routes;
