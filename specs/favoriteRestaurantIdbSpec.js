import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavoriteRestaurantsIdb from '../src/scripts/data/favorite-restaurants-idb';

describe('Favorite Restorant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (
      await FavoriteRestaurantsIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurantsIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantsIdb);
});
