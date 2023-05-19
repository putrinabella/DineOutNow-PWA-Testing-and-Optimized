import FavoriteRestaurantsIdb from '../src/scripts/data/favorite-restaurants-idb';
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';

describe('Restaurant Idb Contract Test Implemementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantsIdb
      .getAllRestaurants())
      .forEach(async (restaurant) => {
        await FavoriteRestaurantsIdb.deleteRestaurant(restaurant.id);
      });
  });
  itActsAsFavoriteRestaurantModel(FavoriteRestaurantsIdb);
});
