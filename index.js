// var inputElement = document.getElementById('item');

// inputElement.addEventListener('keydown', function(event) {

//     if (event.key === 'Enter') {

//         var input = inputElement.value;
//         console.log(input);
//         document.getElementById("item").value="";
//         document.getElementById("item").placeholder="New item...";

//         var result = document.createElement('li');
//         // result.className+='li-element';
//         var str='';
//         str+='<span class="close">&times;</span>';
//         input+=str;
//         result.innerHTML = input;
        
//         document.getElementById('input-item').appendChild(result);
//         var c=document.getElementsByClassName("close");
        
//         var i;

//         for (i = 0; i < c.length; i++) {
//         c[i].addEventListener("click", function() {
//             this.parentElement.style.display = 'none';
//         });
//         }
        
//             var listItems = document.querySelectorAll("#input-item li");
          
//             listItems.forEach(function(item) {
//               item.addEventListener("click", function() {
//                 // Toggle the 'selected' class on click
//                 this.classList.toggle("selected");
//               });
//             });
       
//         event.preventDefault();
//     }
// });
var inputElement = document.getElementById('nameInput');
const items=[];
inputElement.addEventListener('keydown', function(event) {

     if (event.key === 'Enter') {
       var inp= document.getElementById('nameInput').value;
       inp=inp.trim();
       if(inp.length==0){alert("Arey yaar..."  +"\n"+"Enter an item first😉");}
       else{
       document.getElementById("nameInput").value="";
       document.getElementById("nameInput").placeholder="New item...";
       let itm=new Itemlist(inp);
       items.push(itm);
       renderObjectList(itm);
       }
    }
});


function renderObjectList(object) {
               var myList= document.getElementById('list-item');
                
                var li = document.createElement("li");
                li.classList.add("item");
                li.textContent = object.getItem(); 
                var span = document.createElement("span");
                span.classList.add("close");
                var timesSign = document.createTextNode("×");
                
                li.addEventListener("click", function() {
                    let a=object.done_status;
                    object.set_done_status(!a);
                    this.classList.toggle("marked");
                    updateCounts();
                  });
               
                  span.addEventListener('click', function() {
                    let k=object.done_status;
                    
                    object.set_del_status(true);
                    li.remove();
                    updateCounts();
                });
                span.appendChild(timesSign);
                
                li.appendChild(span);

                myList.appendChild(li);
                console.log(items);

                updateCounts();

                
  }


function Itemlist(item) {
    this.del_status=false;
    this.done_status=false;
    this.item=item;
   
    
    this.getItem=function() {
      return this.item;
    };
    this.set_del_status = function(value) {
        this.del_status= value; 
      };
    
      this.set_done_status = function(value) {
        this.done_status=value;
      };
}

function updateCounts() {
      const shoppingList = document.getElementById('list-item').getElementsByTagName('li');
      let markedCount = 0;
      let unmarkedCount = 0;

      for (let i = 0; i < shoppingList.length; i++) {
          if (shoppingList[i].classList.contains('marked')) {
              markedCount++;
          } else {
              unmarkedCount++;
          }
      }

      document.getElementById('marked-Count').textContent = markedCount;
      document.getElementById('unmarked-Count').textContent = unmarkedCount;
  }
var hid=false;

var hide=document.getElementById('hide');
  hide.addEventListener("click",function(){
    hid?showItems():hideItems();
  });
function hideItems(){

        const shoppingList = document.getElementById('list-item').getElementsByTagName('li');
        hide.innerHTML="<b>show all items</b>";
        for (let i = 0; i < shoppingList.length; i++) {
          if (shoppingList[i].classList.contains('marked')) {
            shoppingList[i].style.display="none";
          } else {
            shoppingList[i].style.display="block";
          }
      }
      hid=true;
}
function showItems(){
        const shoppingList = document.getElementById('list-item').getElementsByTagName('li');
        hide.innerHTML="<b>Hide marked</b>";
        for (let i = 0; i < shoppingList.length; i++) {
          
            shoppingList[i].style.display="block";
          
      }
      hid=false;
}