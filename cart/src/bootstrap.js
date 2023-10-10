import faker from 'faker';


const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  el.innerHTML = cartText;
}

const el = document.querySelector('#dev-cart');

if (process.env.NODE_ENV === 'development' && el) {
  mount(el);
}

export default mount;