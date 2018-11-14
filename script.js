const httprequest= new XMLHttpRequest();


document.getElementById("searchbutton").addEventListener("click", function(){
    
   httprequest.open("GET","request.php?q=definition",true)
   httprequest.send()
   httprequest.onreadystatechange= function(){
       if (httprequest.readyState=== XMLHttpRequest.DONE){
         if(httprequest.status===200)  {
             
       alert(httprequest.responseText)
         }
       }
   }
});



