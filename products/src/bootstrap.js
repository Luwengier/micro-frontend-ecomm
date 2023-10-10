import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 10; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
}

const el = document.querySelector('#dev-products');

if (process.env.NODE_ENV === 'development' && el) {
  mount(el);
}


export default mount;