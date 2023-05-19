class FavoriteRestaurantSearchPresenter {
  constructor({ favoriteRestaurants }) {
    this._listenToSearchRequestByUser();
    this._favoriteRestaurants = favoriteRestaurants;
  }

  _listenToSearchRequestByUser() {
    this._queryElement = document.getElementById('query');
    this._queryElement.addEventListener('change', (event) => {
      this._searchRestaurants(event.target.value);
    });
  }

  async _searchRestaurants(latestQuery) {
    this._latestQuery = latestQuery.trim();

    let foundRestaurant;
    if (this.latestQuery.length > 0) {
      foundRestaurant = await this._favoriteRestaurants.searchRestaurant(this.latestQuery);
    } else {
      foundRestaurant = await this._favoriteRestaurants.searchRestaurant();
    }
    this._showFoundRestaurants(foundRestaurant);

    // const foundRestaurant = await this._favoriteRestaurants.searchRestaurant(this.latestQuery);
    // this._showFoundRestaurants(foundRestaurant || []);
  }

  // eslint-disable-next-line class-methods-use-this
  _showFoundRestaurants(restaurants) {
    const html = restaurants.reduce(
      (carry, restaurant) => carry.concat(`
          <li class="restaurant">
            <span class="restaurant__title">${restaurant.title || '-'}</span>
          </li>
        `),
      '',
    );

    document.querySelector('.restaurants').innerHTML = html;
    document.getElementById('restaurant-search-container')
      .dispatchEvent(new Event('restaurants:searched:updated'));
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestaurantSearchPresenter;
