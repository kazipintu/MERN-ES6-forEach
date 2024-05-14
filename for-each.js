
{ // forEach will returns boolean, or true false of any condition. t will not return any other data-type. //
  const numbers = [3, 21, 12, 5, 56, 21, 3, 4, 5, 8, 29, 19, 20]

  const lessThanTwenty = numbers.forEach(number => console.log(number < 20));

  //console.log(lessThanTwenty);

}


{
  const products = [
    { name: 'bottle', price: 20, color: 'blue' },
    { name: 'table', price: 230, color: 'dark' },
    { name: 'book', price: 120, color: 'blue' },
    { name: 'shirt', price: 200, color: 'green' },
  ]

  const productBlue = products.forEach(product => console.log(product.color == 'blue'));
  //console.log(productBlue);
}