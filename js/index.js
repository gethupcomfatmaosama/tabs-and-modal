

var imgs = [];
var currentIndex = 0; // rakm elsora ely mafto7a dlwa2ty fi el arr
var imgList = document.querySelectorAll(".img-item"); // feh 5 swar
var close = document.getElementById("close");
var item = document.querySelector(".lightbox-item");
var lightBoxContainer = document.querySelector(".lightbox-container")

var next = document.getElementById("next");
var prev = document.getElementById("prev")
for(var i=0;i<imgList.length ; i++) // ha3di sora sora
    {
        imgs.push(imgList[i])
        imgList[i].addEventListener("click" , function(event){
            var targetSrc = event.target.src;
            
         currentIndex =   imgs.indexOf(event.target);
          lightBoxContainer.classList.add("show"); 
            
        item.style.backgroundImage ="url("+targetSrc+")" ;
        })
    }

close.addEventListener("click", function(){
          lightBoxContainer.classList.remove("show");  
    
})


next.addEventListener("click" , function(){
    
    currentIndex++;
    if(currentIndex == imgList.length)
        {
            currentIndex = 0;
        }
    
item.style.backgroundImage ="url("+imgList[currentIndex].src+")" ;
    
    
})


document.addEventListener("keydown" , function(eventInfo){
    
    if(eventInfo.keyCode == 39)
        {
            
            
            
                currentIndex++;
    if(currentIndex == imgList.length)
        {
            currentIndex = 0;
        }
    
item.style.backgroundImage ="url("+imgList[currentIndex].src+")" ;
    
        }
    else if(eventInfo.keyCode == 37)
        {
            currentIndex--;
    if(currentIndex < 0)
        {
            currentIndex = imgList.length -1;
        }
item.style.backgroundImage ="url("+imgList[currentIndex].src+")" ;
      
        }
    else if (eventInfo.keyCode == 27)
        {
              lightBoxContainer.classList.remove("show");  
        
        }
})



prev.addEventListener("click" , function(){
    
    currentIndex--;
    if(currentIndex < 0)
        {
            currentIndex = imgList.length -1;
        }
item.style.backgroundImage ="url("+imgList[currentIndex].src+")" ;
   



})















