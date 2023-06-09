import Swal from 'sweetalert2';
import DataSource from '../data/data-source';
import {
  createCustomerReviewItem,
} from '../views/templates/template-creator';

const addReviewInitiator = {
  async init({
    inputAuthor,
    inputReview,
    id,
    buttonSubmit,
  }) {
    this._inputAuthor = inputAuthor;
    this._inputReview = inputReview;
    this._id = id;
    this._buttonSubmit = buttonSubmit;
    await this._submitReviewHandler();
  },

  async _submitReviewHandler() {
    this._buttonSubmit.addEventListener('click', async (event) => {
      event.preventDefault();
      const name = this._inputAuthor.value;
      const review = this._inputReview.value;
      if (this._isInputExist(name, review)) {
        const dataReview = {
          id: this._id,
          name,
          review,
        };
        const response = await DataSource.addReview(dataReview);
        if (await response.error) {
          await Swal.fire({
            icon: 'error',
            title: 'Network Problem',
            text: response.message,
          });
        } else {
          await this._renderReviewItems(response);
          await Swal.fire({
            icon: 'success',
            title: 'Your review has been added',
          });
        }
      } else {
        await Swal.fire({
          icon: 'error',
          title: 'Input is still empty',
          text: 'please re-enter the input correctly',
        });
      }
    });
  },

  _isInputExist(name, review) {
    return name !== '' && review !== '';
  },

  async _renderReviewItems(reviews) {
    const customerReviewsContainer = document.querySelector('.detail-customer-reviews-list');
    let reviewItems = '';
    reviews.forEach((review) => {
      reviewItems += createCustomerReviewItem(review);
    });
    customerReviewsContainer.innerHTML = reviewItems;
  },
};

export default addReviewInitiator;
