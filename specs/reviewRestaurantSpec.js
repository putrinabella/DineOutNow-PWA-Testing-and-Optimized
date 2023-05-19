import { createAddReviewInitiatorWithRestaurant } from './helpers/testFactories';

describe('Review a Restaurant', () => {
  const addReviewContainer = () => {
    document.body.innerHTML = '<div id="customer-review"></div>';
  };

  const addFormInput = (name, review) => {
    const formInput = `
    <div class="customer-review">
    <form class="add-review-form">
      <input value="${name}" tabindex="0" aria-label="memasukan penulis" class="input-review-author" type="text" placeholder="Input Author" />
      <input value="${review}" tabindex="0" aria-label="memasukan review" class="input-review-text" type="text" placeholder="Input Review" />
      <button tabindex="0" aria-label="kirim review" class="button-submit-review" type="submit">Add Review</button>
    </form>
  </div>

  <div class="customer-review">
    <ul tabindex="0" aria-label="List customer review" class="detail-customer-reviews-list">
    </ul>
    </div>
    `;

    document.body.innerHTML += formInput;
  };

  beforeEach(() => {
    addReviewContainer();
  });

  it('should add review in input containing name, text, and id', async () => {
    addFormInput('test', 'test');
    createAddReviewInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('.input-review-author').value).toBe('test');
    expect(document.querySelector('.input-review-text').value).toBe('test');
  });

  it('should review will not be added if id is not available', async () => {
    addFormInput('test-author', 'test-text');
    await createAddReviewInitiatorWithRestaurant({ id: ' ' });
    document.querySelector('.button-submit-review').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(document.querySelector('#swal2-html-container').textContent).toEqual('restaurant id not valid');
    }, 1000);
  });

  it('should the review will not be added if the name is not filled', async () => {
    addFormInput('', 'test-text');
    await createAddReviewInitiatorWithRestaurant({ id: 'w7jca3irwykfw1e867' });
    document.querySelector('.button-submit-review').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(document.querySelector('#swal2-html-container').textContent).toEqual('please re-enter the input correctly');
    }, 1000);
  });

  it('should the review will not be added if the review body/text is not filled', async () => {
    addFormInput('test-name', '');
    await createAddReviewInitiatorWithRestaurant({ id: 'w7jca3irwykfw1e867' });
    document.querySelector('.button-submit-review').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(document.querySelector('#swal2-html-container').textContent).toEqual('please re-enter the input correctly');
    }, 1000);
  });

  it('should be able to store review data name, id, and texts', async () => {
    addFormInput('test-name', 'test-author');
    await createAddReviewInitiatorWithRestaurant({ id: 'w7jca3irwykfw1e867' });
    document.querySelector('.button-submit-review').dispatchEvent(new Event('click'));

    setTimeout(() => {
      expect(document.querySelectorAll('.customer-review-item .customer-review-name').slice(-1).textContent).toEqual('test-name');
      expect(document.querySelectorAll('.customer-review-item .customer-review-body').slice(-1).textContent).toEqual('test-author');
    }, 1000);
  });
});
