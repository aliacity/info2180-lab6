const httprequest= new XMLHttpRequest();
const field = document.getElementById("searchfield")
const result = document.getElementById("result")
const all = document.getElementById("alldefs")


document.getElementById("searchbutton").addEventListener("click", function(){
    
   httprequest.open("GET",`request.php?q=${field.value}`,true)
   httprequest.send()
   httprequest.onreadystatechange= function(){
       if (httprequest.readyState=== XMLHttpRequest.DONE){
         if(httprequest.status===200)  {
             
       result.innerHTML=httprequest.responseText
         }
       }
   }
});

all.addEventListener("click",function() {
    httprequest.open("GET",`request.php?q=&all=true`,true)
   httprequest.send()
   httprequest.onreadystatechange= function(){
       if (httprequest.readyState=== XMLHttpRequest.DONE){
         if(httprequest.status===200)  {
             
       const response=httprequest.responseXML;
       const definitions = response.getElementsByTagName('definition');
       const list = document.createElement('ol');
       for(let i =0;i<definitions.length;i++){
            const listItem = document.createElement('li');
            const title = definitions[i].getAttribute('name');
            const author = definitions[i].getAttribute('author');
            const definition = definitions[i].innerHTML;
            listItem.innerHTML=`<h3>${title}</h3><p>${definition}</p><p>-${author}</p>`;
            list.appendChild(listItem);
       }
       result.appendChild(list)
         }
       }
   }
})

