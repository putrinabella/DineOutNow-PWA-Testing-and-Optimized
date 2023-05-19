import listRestaurant from '../views/pages/restaurant';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': listRestaurant, // default page
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
