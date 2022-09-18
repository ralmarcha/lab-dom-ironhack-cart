// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerText = subtotal;
  return subtotal;
}

function calculateAll() {
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // ITERATION 2
  const productList = document.querySelectorAll('.product');
  let total = 0;
  productList.forEach((product) => {
    total += updateSubtotal(product);
  });

  // ITERATION 3
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const removeChild = target.parentNode.parentNode;
  console.log(removeChild);

  const parent = removeChild.parentNode;
  console.log(parent);

  parent.removeChild(removeChild);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const name = document.querySelectorAll('.create-product input')[0].value;

  const price = document.querySelectorAll('.create-product input')[1].value;

  createNewProductRow(name, price);

  clearInputFields();
}

function clearInputFields() {
  [...document.querySelectorAll('.create-product input')].forEach((field) => {
    field.value = '';
  });
}

// ITERATION 5

function createNewProductRow(name, price) {
  const cart = document.querySelector('tbody');

  const trProduct = document.createElement('tr');
  trProduct.className = 'product';

  const tdName = document.createElement('td');
  const nameSpan = document.createElement('span');
  tdName.className = 'name';
  nameSpan.innerText = name;
  tdName.appendChild(nameSpan);

  const tdPrice = document.createElement('td');
  tdPrice.className = 'price';
  tdPrice.innerText = '€';
  const tdPriceContent = document.createElement('span');
  tdPriceContent.innerText = price;
  tdPrice.appendChild(tdPriceContent);

  const tdQuantity = document.createElement('td');
  tdQuantity.className = 'quantity';
  const quantityInput = document.createElement('input');
  quantityInput.type = 'number';
  quantityInput.value = 0;
  quantityInput.placeholder = 'Qauntity';
  quantityInput.min = 0;
  tdQuantity.appendChild(quantityInput);

  const tdSubtotal = document.createElement('td');
  tdSubtotal.className = 'subtotal';
  tdSubtotal.innerText = '€';
  const subtotalSpan = document.createElement('span');
  subtotalSpan.innerText = 0;
  tdSubtotal.appendChild(subtotalSpan);

  const tdAction = document.createElement('td');
  tdAction.className = 'action';
  const buttonAction = document.createElement('button');
  buttonAction.className = 'btn btn-remove';
  buttonAction.innerText = 'Remove';
  buttonAction.addEventListener('click', removeProduct);
  tdAction.appendChild(buttonAction);

  trProduct.appendChild(tdName);
  trProduct.appendChild(tdPrice);
  trProduct.appendChild(tdQuantity);
  trProduct.appendChild(tdSubtotal);
  trProduct.appendChild(tdAction);

  cart.appendChild(trProduct);
}

function createProduct() {
  const productName = document.querySelector('.product-name');
  const productPrice = document.querySelector('.product-price');

  const addToList = document.querySelector('tbody');
  addToList.innerHTML += `
      <tr class="product">
      <td class="name">
        <span>${productName.value}</span>
      </td>
      <td class="price">$<span>${productPrice.value}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>
  `;
  removeBtn = document.querySelectorAll('.btn-remove');
  [...removeBtn].map((elem) =>
    elem.addEventListener('click', function (e) {
      removeProduct(e);
    })
  );

  productName.value = '';
  productPrice.value = 0;
}

const removeProductVariable = document.querySelectorAll('btn-remove');

removeProductVariable.forEach((productButton) => {
  productButton.addEventListener('click'), removeProduct;
});

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

document.querySelectorAll('.btn-remove').forEach((productButton) => {
  productButton.addEventListener('click', removeProduct);
});
document.querySelector('#create').addEventListener('click', createProduct);
