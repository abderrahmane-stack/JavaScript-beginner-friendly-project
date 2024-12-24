const amount= document.getElementById('amount');
const fromCurrency= document.getElementById('fromCurrency');
const toCurrency= document.getElementById('toCurrency');
const convertBtn= document.getElementById('convertBtn');
const result =document.getElementById('result');
let newamount=0;

convertBtn.addEventListener('click',()=>{
  
  if (fromCurrency.value=='USD'){
    switch(toCurrency.value) {
      case "EUR":
        newamount= amount.value *0.96 +" EUR";
        break;
      case "DZ":
        newamount= amount.value*134.94 +" DZ";
        break;
      default:
        newamount= amount.value +' USD'
    }
  }else if (fromCurrency.value =='EUR'){
    switch(toCurrency.value) {
      case 'USD':
        newamount=amount.value *1.04+' USD';
        break;
      case "DZ":
        newamount=amount.value *140.08 +" DZ";
        break;
      default:
        newamount=amount.value +" EUR"  ;
    }
  }else{
    switch(toCurrency.value) {
      case "EUR":
        newamount=amount.value *0.0071 +" EUR" ;
        
        break;
      case 'USD':
        newamount=amount.value *0.0074+' USD';
        break;
      default:
        newamount=amount.value +' DZ';
    }
  }
  result.innerHTML = newamount;
});
