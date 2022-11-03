addButton= document.getElementById("toButton");
inputArea= document.getElementById("inputfield");
doContainer=document.getElementById("toDoContainer");

addButton.addEventListener('click', function(){
   var paragraph= document.createElement('p')
   paragraph.classList.add('para_style');
   paragraph.innerText= inputArea.value;
   doContainer.appendChild(paragraph);
   inputArea.value="";

   paragraph.addEventListener('click',function(){
      paragraph.style.textDecoration="line-through";

     
   })
   paragraph.addEventListener('dblclick',function(){
    doContainer.removeChild(paragraph);
})
})