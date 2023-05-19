import FavoriteRestaurantIdb from '../../data/favorite-restaurants-idb';
import { createRestaurantItemTemplate, createLoading } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="space"> 
        <div class="content">
          <h1 class="content-label">Favorite Restaurant</h1>
          <div id="restaurant" class="posts"></div>
        </div>
      </div>
    `;
  },
  async renderLoading() {
    document.querySelector('.posts').innerHTML = createLoading();

    // $('.posts').html(createLoading());
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    // $('.loading-container').css('display', 'none');
    const loadingContainer = document.querySelector('.loading-container');
    loadingContainer.style.display = 'none';
    const restaurantContainer = document.querySelector('#restaurant');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
