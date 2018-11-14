const httprequest= new XMLHttpRequest();
const field = document.getElementById("searchfield")



document.getElementById("searchbutton").addEventListener("click", function(){
    
   httprequest.open("GET",`request.php?q=${field.value}`,true)
   httprequest.send()
   httprequest.onreadystatechange= function(){
       if (httprequest.readyState=== XMLHttpRequest.DONE){
         if(httprequest.status===200)  {
             
       alert(httprequest.responseText)
         }
       }
   }
});

