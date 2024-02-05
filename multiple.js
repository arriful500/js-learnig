const price =  7000;
if(price >=10000){
  const discount =  price * 5/100;
  const payAmount = price - discount;
  console.log(payAmount);
}
else if (price <= 5000 ){
  const discount = price * 2/100 ;
  payAmount = price-discount;
  console.log(payAmount)
}
else{
  console.log(price)
}