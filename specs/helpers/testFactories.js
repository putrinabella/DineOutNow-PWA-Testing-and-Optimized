import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurants-idb';
import addReviewInitiator from '../../src/scripts/utils/add-review-initiator';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestaurantIdb,
    restaurant,
  });
};

const createAddReviewInitiatorWithRestaurant = async (restaurant) => {
  await addReviewInitiator.init({
    inputAuthor: document.querySelector('.input-review-author'),
    inputReview: document.querySelector('.input-review-text'),
    id: restaurant.id,
    buttonSubmit: document.querySelector('.button-submit-review'),
  });
};

// eslint-disable-next-line import/prefer-default-export
export {
  createLikeButtonPresenterWithRestaurant,
  createAddReviewInitiatorWithRestaurant,
};
