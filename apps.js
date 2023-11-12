

 
const totalPrice = document.getElementById('totalPrice');
const discount = document.getElementById('discount');
const totalTK = document.getElementById('total-tk');
const PurchaseBtn = document.getElementById('Purchase-btn');
const change = document.getElementById('change');

 
 
const addProduct = (price) => {
    let prevPrice = parseFloat(totalPrice.innerText);
    let total  = prevPrice + parseFloat(price);
    
    totalPrice.innerText = total;
    totalTK.innerText = total;
    
    if ( total > 200 ){ 
       
      PurchaseBtn.removeAttribute('disabled');
      let totalPersen = total / 100 * 20 ;
      discount.innerText = totalPersen;
  
      let totalTKTotal = total - totalPersen;
      totalTK.innerText = totalTKTotal;

      area("name")
    }  
    
  
}

   
 


 function area(name){
      const change  = document.getElementById('change');

      const p = document.createElement('p');
      p.innerHTML = name;

      change.appendChild(p);

 }