import UrlParser from '../../routes/url-parser';
import DataSource from '../../data/data-source';
import addReviewInitiator from '../../utils/add-review-initiator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantsIdb from '../../data/favorite-restaurants-idb';
import {
  createRestaurantDetailTemplate,
  createCustomerReviewItem,
  createLoading,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div class="space">
        <div class="content">
          <h1 class="content-label" id="mainContent"  tabindex="0"> Detail Restaurant</h1>
          <div id="restaurant" class="restaurant"></div>
          <div id="likeButtonContainer"></div>
        </div>
      </div>
    `;
  },

  async renderLoading() {
    // $('.restaurant').html(createLoading());
    document.querySelector('.restaurant').innerHTML = createLoading();
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DataSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('.restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    this._renderReviewItems(restaurant.customerReviews);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantsIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        description: restaurant.description,
      },
    });

    addReviewInitiator.init({
      inputAuthor: document.querySelector('.input-review-author'),
      inputReview: document.querySelector('.input-review-text'),
      id: restaurant.id,
      buttonSubmit: document.querySelector('.button-submit-review'),
    });
  },

  async _renderReviewItems(reviews) {
    const customerReviewsContainer = document.querySelector('.detail-customer-reviews-list');
    // const customerReviewsContainer = $('.detail-customer-reviews-list');
    let reviewItems = '';
    reviews.forEach((review) => {
      reviewItems += createCustomerReviewItem(review);
    });
    customerReviewsContainer.innerHTML = reviewItems;
  },
};

export default Detail;
