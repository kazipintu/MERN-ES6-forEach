
{ // find will not allow more than one item. It will not show any array or multiple items. It will pick the first match. //
  const numbers = [3, 21, 12, 5, 56, 21, 3, 4, 5, 8, 29, 19, 20]

  const lessThanTwenty = numbers.find(number => number < 20);

  console.log(lessThanTwenty);
}


{
  const products = [
    { name: 'bottle', price: 20, color: 'blue' },
    { name: 'table', price: 230, color: 'dark' },
    { name: 'book', price: 120, color: 'blue' },
    { name: 'shirt', price: 200, color: 'green' },
  ]

  const productBlue = products.find(product => product.color == 'blue');
  console.log(productBlue);
}