import DataSource from '../../data/data-source';
import { createRestaurantItemTemplate, createLoading } from '../templates/template-creator';
import '../components/hero-content';
import '../components/signature-content';

const Restaurant = {
  async render() {
    return `
    <hero-content></hero-content>
      <div class="content">
      <h1 class="content-label" id="mainContent"  tabindex="0">Explore Restaurant</h1>
      <h4 class="content-sub">
        Discover the best dining experiences in Indonesia with our curated
        list of restaurants
      </h4>
        <div id="restaurant" class="posts">
        </div>
      </div>    
      <signature-content></signature-content>  
    `;
  },

  async renderLoading() {
    // $('.posts').html(createLoading());
    document.querySelector('.posts').innerHTML = createLoading();
  },

  async afterRender() {
    const restaurants = await DataSource.restaurantList();
    // $('.loading-container').css('display', 'none');
    const loadingContainer = document.querySelector('.loading-container');
    loadingContainer.style.display = 'none';
    const restaurantContainer = document.querySelector('#restaurant');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Restaurant;
