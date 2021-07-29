



const addCheese = document.querySelector(".addCheese");
const removeCheese = document.querySelector('.removeCheese')
const addPepperoni = document.querySelector(".addPepperoni")
const removePepperoni = document.querySelector(".removePepperoni")
const addCombination = document.querySelector(".addCombination");
const removeCombination = document.querySelector(".removeCombination");
const addGarlic = document.querySelector(".addGarlic");
const removeGarlic = document.querySelector(".removeGarlic");
const addSalad = document.querySelector(".addSalad");
const removeSalad = document.querySelector(".removeSalad");
const addCalzone = document.querySelector(".addCalzone");
const removeCalzone = document.querySelector(".removeCalzone");
const addSamuel = document.querySelector(".addSamuel");
const removeSamuel = document.querySelector(".removeSamuel");
const addBecks = document.querySelector(".addBecks");
const removeBecks = document.querySelector(".removeBecks");
const addBudweiser = document.querySelector(".addBudweiser");
const removeBudweiser = document.querySelector(".removeBudweiser");
const finalize = document.querySelector(".finalize");
const payBox1 = document.querySelector(".payBox1")
const total1 = document.querySelector(".total1")
const total2 = document.querySelector(".total2");
const b = document.querySelector(".b")
const reset = document.querySelector(".reset");
const totalB = document.querySelector(".totalB")
let face = document.querySelector('.face');
let cart = document.querySelector('.cart'); 
let cartbody = document.querySelector('.cartbody');
let hidden = document.querySelector('.hidden');
let totalb = 0; 
let orderDescription = []; 
let total = 0; 
let totalBeforeTax = 0; 
let cheeseCount = 0; 
let arrayCheese = []; 
let arrayPepperoni = []; 
let pepperoniCount = 0; 
let combinationCount = 0; 
let arrayCombination = []; 
let arrayGarlic = [];
let garlicCount = 0; 
let arraySalad = [];
let saladCount = 0; 
let calzoneCount = 0;
let arrayCalzone = []; 
let SamuelCount = 0; 
let arraySamuel = [];
let BecksCount = 0; 
let arrayBecks = [];
let BudCount = 0; 
let arrayBud = [];
let cheso = document.querySelector('.cheso');
let pepo = document.querySelector('.pepo');
let combo = document.querySelector('.combo');
let twisto = document.querySelector('.twisto');
let salado = document.querySelector('.salado');
let calo = document.querySelector('.calo');
let budo = document.querySelector('.budo');
let becko = document.querySelector('.becko');
let samo = document.querySelector('.samo');
let subtotal = document.querySelector('.subtotal')
const cheesePizza = {
    description: "Four Cheese Pizza",
    price: 17,
}
const PepperoniPizza = {
    description: "Pepperoni Pizza",
    price: 22,
}

const CombinationPizza = {
    description: "Combination Pizza",
    price: 26,
}
const garlicTwists = {
    description: "Garlic Twists",
    price: 7,
}
const Salad = {
    description:"Garden Salad",
    price: 7,
}
const Calzone = {
    description: "Calzone",
    price: 13,
}
const Samuel = {
    description: "60 oz Sam's Pitcher",
    price: 12,
}
const Becks = {
    description: "60 oz Beck's Pitcher",
    price: 16,
}
const Bud = {
    description: "60 oz Bud Pitcher",
    price: 11,
}

function addCheeseToTotal(){
 totalBeforeTax = totalBeforeTax + 17; 
 cheeseCount ++; 
alert('A delicious four cheese pizza has been added to your order', )
arrayCheese.push(cheesePizza.description);
console.log(totalBeforeTax);
 console.log(arrayCheese);

}
function removeCheeseFromOrder(){
    if (cheeseCount > 0){
       cheeseCount --; 
       totalBeforeTax = totalBeforeTax - 17; 
    arrayCheese.pop();
    alert('A delicious four cheese pizza has been deleted from your order', )
    }
    else {
        alert("You didn't add any of our four cheese pizzas to your order")
    }
 
    console.log(totalBeforeTax);
    console.log(arrayCheese);
    //console.log(array);
   }

   function addPepperoniToTotal(){
    totalBeforeTax = totalBeforeTax + 22; 
    pepperoniCount ++; 
   alert('A savory Pepperoni pizza has been added to your order', )
   arrayPepperoni.push(PepperoniPizza.description);
   console.log(totalBeforeTax);
    console.log(arrayPepperoni);
   
   }
   function removePepperoniFromOrder(){
       if (pepperoniCount> 0){
          pepperoniCount --; 
          totalBeforeTax = totalBeforeTax - 22; 
       arrayPepperoni.pop();
       alert('A savory Pepperoni pizza has been deleted from your order', )
        
       }
       else {
           alert("You didn't add any of our pepperoni pizzas to your order")
       }
    
       console.log(totalBeforeTax);
       console.log(arrayPepperoni);
       //console.log(array);
      }

      function addCombinationToTotal(){
        totalBeforeTax = totalBeforeTax + 26; 
        combinationCount ++; 
       alert('A Hot Combination Pizza has been added to your order', )
       arrayCombination.push(CombinationPizza.description);
       console.log(totalBeforeTax);
        console.log(arrayCombination);
       
       }
       function removeCombinationFromOrder(){
           if (combinationCount> 0){
              combinationCount --; 
              totalBeforeTax = totalBeforeTax - 26; 
           arrayCombination.pop();
           alert('A hot combination pizza has been deleted from your order', )
           }
           else {
               alert("You didn't add any of our Combination pizzas to your order")
           }
        
           console.log(totalBeforeTax);
           console.log(arrayCombination);
           //console.log(array);
          }


          function addGarlicToOrder(){
            totalBeforeTax = totalBeforeTax + 7; 
            garlicCount ++; 
           alert('A crunchy order of Twists has been added to your order', )
           arrayGarlic.push(garlicTwists.description);
           console.log(totalBeforeTax);
            console.log(arrayGarlic);
           
           }
           function removeGarlicFromOrder(){
               if (garlicCount > 0){
                 garlicCount --; 
                  totalBeforeTax = totalBeforeTax - 7; 
               arrayGarlic.pop();
               alert('A crunchy order of Garlic Twists has been deleted from your order', )
               }
               else {
                   alert("You didn't add any of Garlic Twists to your order")
               }
            
               console.log(totalBeforeTax);
               console.log(arrayGarlic);
               //console.log(array);
              }


              function addSaladToOrder(){
                totalBeforeTax = totalBeforeTax + 7; 
                saladCount ++; 
               alert('A fresh Garden Salad has been added to your order', )
               arraySalad.push(Salad.description);
               console.log(totalBeforeTax);
                console.log(arraySalad);
               
               }
               function removeSaladFromOrder(){
                   if (saladCount > 0){
                     saladCount --; 
                      totalBeforeTax = totalBeforeTax - 7; 
                   arraySalad.pop();
                   alert('A fresh Garden Salad has been deleted from your order', ) 
                   }
                   else {
                       alert("You didn't add anyGarden Salads to your order")
                   }
                
                   console.log(totalBeforeTax);
                   console.log(arraySalad);
                   //console.log(array);
                  }


                  function addCalzoneToOrder(){
                    totalBeforeTax = totalBeforeTax + 13; 
                    calzoneCount ++; 
                   alert('A hot Calzone has been added to your order', )
                   arrayCalzone.push(Calzone.description);
                   console.log(totalBeforeTax);
                    console.log(arrayCalzone);
                   
                   }
                   function removeCalzoneFromOrder(){
                       if (calzoneCount > 0){
                         calzoneCount --; 
                          totalBeforeTax = totalBeforeTax - 13; 
                       arrayCalzone.pop();
                       alert('A hot calzone has been deleted from your order', )   
                       }
                       else {
                           alert("you didn't add anyGarden Salads to your order")
                       }
                    
                       console.log(totalBeforeTax);
                       console.log(arrayCalzone);
                       //console.log(array);
                      }

                      
                  function addSamToOrder(){
                    totalBeforeTax = totalBeforeTax + 12; 
                    SamuelCount ++; 
                   alert('A Sams cold pitcher has been added to your order', )
                   arraySamuel.push(Samuel.description);
                   console.log(totalBeforeTax);
                    console.log(arraySamuel);
                   
                   }
                   function removeSamFromOrder(){
                       if (SamuelCount > 0){
                         SamuelCount --; 
                          totalBeforeTax = totalBeforeTax - 12; 
                       arraySamuel.pop();
                       alert('A Sams cold pitcher  has been deleted from your order', )  
                       }
                       else {
                           alert("you didn't have a Sam's pitchers in your order")
                       }
                    
                       console.log(totalBeforeTax);
                       console.log(arraySamuel);
                       //console.log(array);
                      }
                      function addBecksToOrder(){
                        totalBeforeTax = totalBeforeTax + 16; 
                        BecksCount ++; 
                       alert('An ice cold Becks pitcher has been added to your order', )
                       arrayBecks.push(Becks.description);
                       console.log(totalBeforeTax);
                        console.log(arrayBecks);
                       
                       }
                       function removeBecksFromOrder(){
                           if (BecksCount> 0){
                             BecksCount --; 
                              totalBeforeTax = totalBeforeTax - 16; 
                           arrayBecks.pop();
                           alert('An ice cold becks pitcher has been deleted from your order', )
                           }
                           else {
                               alert("you didn't have a Beck's pitchers in your order")
                           }
                        
                           console.log(totalBeforeTax);
                           console.log(arrayBecks);
                           //console.log(array);
                          }
                          function addBudToOrder(){
                            totalBeforeTax = totalBeforeTax + 11; 
                            BudCount ++; 
                           alert('A chilled Buds pitcher has been added to your order', )
                           arrayBud.push(Bud.description);
                           console.log(totalBeforeTax);
                            console.log(arrayBud);
                           
                           }
                           function removeBudFromOrder(){
                               if (BudCount> 0){
                                 BudCount --; 
                                  totalBeforeTax = totalBeforeTax - 11; 
                               arrayBud.pop();
                               alert('A chilled Buds pitcher has deleted from your order', )
                               }
                               else {
                                   alert("You didn't have a Bud pitchers in your order")
                               }
                            
                               console.log(totalBeforeTax);
                               console.log(arrayBud);
                               //console.log(array);
                              }


      function animateTotal(){
 orderDescription = [...arrayCheese, ...arrayPepperoni, ...arrayCombination, ...arrayBecks, ...arrayBud, ...arraySamuel, ...arrayCalzone, ...arrayGarlic, ...arraySalad]

          total = totalBeforeTax;
          let salesTax = .0825 * total; 
          totalb = `${total + salesTax}`; 
          totalb = Number(totalb)
          totalb = totalb.toFixed(2);
          
          finalize.disabled = true; 
           b.className = "payBox1"
           face.className = 'faceAnimate'
           console.log("Nope!")
           total1.textContent = ` Price: $ ${total}` 
           totalB.textContent = `Price + tax: $ ${totalb}`
           total2.textContent = `Items List: ${orderDescription}`
      }   
      
      
      
      function resetOrder(){
          total = 0; 
          totalBeforeTax = 0; 
          total1.textContent = "Total before Tax"; 
          total2.textContent = "No items in cart";
          totalB.textContent = "Total + Tax (8.25)"
          orderDescription = []; 
          arrayBecks = [];
          arrayBud = []; 
          arraySamuel = []; 
          arrayCalzone = [];
          arrayGarlic = [];
          arraySalad = [];
          arrayCheese = [];
          arrayCombination = [];
          arrayPepperoni = []; 
          finalize.disabled = false; 
          totalb = 0; 
      }


      function showCart(){
          cartbody.classList.toggle('hidden');
          cheso.textContent = cheeseCount; 
          pepo.textContent = pepperoniCount;
          combo.textContent = combinationCount;
          twisto.textContent = garlicCount;
          calo.textContent = calzoneCount;
          salado.textContent = saladCount;
          budo.textContent = BudCount;
          becko.textContent = BecksCount;
          samo.textContent = SamuelCount;
       subtotal.textContent = totalBeforeTax; 
      }
     

addCheese.addEventListener('click', addCheeseToTotal);
removeCheese.addEventListener('click', removeCheeseFromOrder);

addPepperoni.addEventListener('click', addPepperoniToTotal )
removePepperoni.addEventListener('click', removePepperoniFromOrder)

addCombination.addEventListener('click', addCombinationToTotal);
removeCombination.addEventListener('click', removeCombinationFromOrder); 

addGarlic.addEventListener("click", addGarlicToOrder);
removeGarlic.addEventListener('click', removeGarlicFromOrder)

addSalad.addEventListener('click', addSaladToOrder);
removeSalad.addEventListener('click', removeSaladFromOrder);

addCalzone.addEventListener('click', addCalzoneToOrder);
removeCalzone.addEventListener('click', removeCalzoneFromOrder);


addSamuel.addEventListener('click', addSamToOrder);
removeSamuel.addEventListener('click', removeSamFromOrder);


addBecks.addEventListener('click', addBecksToOrder);
removeBecks.addEventListener('click', removeBecksFromOrder);


addBudweiser.addEventListener('click', addBudToOrder);
removeBudweiser.addEventListener('click', removeBudFromOrder);


finalize.addEventListener('click', animateTotal);

reset.addEventListener('click', resetOrder);
cart.addEventListener('click',showCart)