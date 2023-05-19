import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<div class="post-item">

    <picture>
          <source media="(max-width: 300px)" data-srcset="${CONFIG.BASE_IMAGE_SMALL_URL}${restaurant.pictureId}">
          <source media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE_MEDIUM_URL}${restaurant.pictureId}">
          <img tabindex="0" aria-label="gambar restoran"  class="lazyload thumbnail" data-src="${CONFIG.BASE_IMAGE_MEDIUM_URL}${restaurant.pictureId}" alt="Gambar suasana di restaurant ${restaurant.name}">
    </picture>
  
    <div class="city">
    <p>📌
      ${restaurant.city}</span></p>
  </div>
  <div class="resto-content">
    <h3><a href="/#/detail/${restaurant.id}" class="title">${
  restaurant.name
}</a></h3>
    <p class="rating">Rating: ${restaurant.rating}</p>
    <p class="description">${restaurant.description}</p>
  </div>
</div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<div class="flex-container">
  <div class="flex-item">
    <div class="cardDetail">
    <picture>
    <source media="(max-width: 300px)" data-srcset="${CONFIG.BASE_IMAGE_SMALL_URL}${restaurant.pictureId}">
    <source media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE_MEDIUM_URL}${restaurant.pictureId}">
    <img tabindex="0" aria-label="gambar restoran"  class="lazyload thumbnail" data-src="${CONFIG.BASE_IMAGE_MEDIUM_URL}${restaurant.pictureId}" alt="Gambar suasana di restaurant ${restaurant.name}">
</picture>
      <div class="place">
        <p>📌 ${restaurant.city}</p>
      </div>
      <p>Address: ${restaurant.address}</p>
    </div>
  </div>

  <div class="flex-item">
    <div class="containDetail">
      <div class="titleDetail">${restaurant.name}
      </div>
      <div class="ratingDetail">
        <h3>Rating: ${restaurant.rating} / 5</h3>
      </div>
      <div class="typeResto">
        <ul>
          ${restaurant.categories
    .map(
      (category) => `
          <li>
            <p>${category.name}</p>
          </li>
          `,
    )
    .join('')}
        </ul>
      </div>
      <div class="descriptionDetail">
        <h3>Description</h3>
        <p>${restaurant.description}</p>
      </div>
      <div class="foods">
        <h3>Foods</h3>
        <p>${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</p>
      </div>
      <div class="drinks">
        <h3>Drinks</h3>
        <p>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
      </div>
    </div>
  </div>
  <div class="flex-item">
    <h3>Customer Reviews</h3>
    <div class="customer-review">
    <ul tabindex="0" aria-label="List customer review" class="detail-customer-reviews-list">
    </ul>
    </div>
  </div>

  <div class="flex-item">
    <h3>Add Your Reviews</h3>
    <div class="customer-review">
      <form class="add-review-form">
        <input tabindex="0" aria-label="memasukan penulis" class="input-review-author" type="text" placeholder="Input Author" />
        <input tabindex="0" aria-label="memasukan review" class="input-review-text" type="text" placeholder="Input Review" />
        <button tabindex="0" aria-label="kirim review" class="button-submit-review" type="submit">Add Review</button>
      </form>
    </div>
  </div>
</div>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
<button   tabindex="0"
aria-label="tombol menyukai"  id="likeButton" class="like">
  <i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
<button   tabindex="0"
aria-label="tombol batal menyukai" id="likeButton" class="like">
  <i class="fa fa-heart" aria-hidden="true"></i>
</button>
`;

const createCustomerReviewItem = (review) => `
  <li class="customer-review-item">
  <img src="./public/images/assets/Cust.png" alt="Cust Icon" />
  <div>
    <p class="name">${review.name}</p>
    <p class="review">${review.review}</p>
    <p class="date">${review.date}</p>
  </div>  
  </li>
`;

const createLoading = () => `
  <div class="loading-container">
    <h1 tabindex="0" aria-label="loading screen" >Loading ...</h1>
  </div>
`;

const createEmptyRestaurant = () => `
  <div class='empty-container'>
    <h1 tabindex="0" class="empty-heading" aria-label="Restoran kosong">Restaurant List Are Empty</h1>
  </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createCustomerReviewItem,
  createLoading,
  createEmptyRestaurant,
};
