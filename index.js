//Page Changing

var santa = document.getElementById("santa"),
    snowman = document.getElementById("snowman"),
    lastpagebutton = document.getElementById("lastpagebutton"),
    firstpage = document.getElementById("firstpage"),
    secondpage = document.getElementById("secondpage"),
    thirdpage = document.getElementById("thirdpage"),
    fourthpage = document.getElementById("fourthpage");

snowman.addEventListener("click",function(){
    firstpage.style.display ="none";
    firstpage.style.animation = "fadeout 1.5s";
    secondpage.style.display = "block";
    secondpage.style.animation = "fadein 1.5s";
});
santa.addEventListener("click",function(){
    secondpage.style.display ="none";
    secondpage.style.animation = "fadeout 1.5s";
    thirdpage.style.display = "block";
    thirdpage.style.animation = "fadein 1.5s";
});
lastpagebutton.addEventListener("click",function(){
    thirdpage.style.display ="none";
    thirdpage.style.animation = "fadeout 1.5s";
    fourthpage.style.display = "block";
    fourthpage.style.animation = "fadein 1.5s";
});

//bg sound
var bg = document.getElementById("bgsound");
bg.play();


//First Page//
 
//snow//
var dispDiv = document.getElementById("firstpage");
function itsSnowing() {
    makeitSnow(); 
    makeitSnow(); 
    makeitSnow(); 
    makeitSnow(); 
    makeitSnow(); 
    makeitSnow();  
    makeitSnow();  
    makeitSnow();}
function makeitSnow(){
    
    var snow = document.createElement("img");
    var mleft = Math.round(Math.random()*100);
    var mdim = Math.round(Math.random()*20)+2;
                          
    snow.style.left = mleft + "%";
    snow.style.height = mdim + "px";
    snow.style.width = mdim + "px";
    
    snow.src ="svg/snow.svg";
    snow.className = "snows";
    dispDiv.appendChild(snow);
    
    if (mdim > 20){
        snow.style.transition = "top 5s";
        snow.style.opacity = "0.9";
    }else if (mdim >10) {
        snow.style.transition = "top 6s";
        snow.style.opacity = "0.6";
    }else {
        snow.style.transition = "top 7s";
        snow.style.opacity = "0.3";
    }
               
               
    setTimeout(function(){
        snow.style.top = "150%";
        
        setTimeout(function(){
            dispDiv.removeChild(snow);
        },3000);
    },10);  
}
document.getElementById("firstpage").addEventListener("mouseenter",function(){
 makeitSnow(); 
setInterval(itsSnowing,500);
    document.getElementById("snowman").style.animation = "jumpsnow 1s infinite"; 
    document.getElementById("snowman").style.animationDelay = "1s";
});

//submit button

var submit = document.getElementById("submit"),
    bubble = document.getElementById("bubble"),
    name   = document.getElementById("name");
                                      
    submit.addEventListener("click",function(){
    name   = document.getElementById("name").value.toUpperCase();
    bubble.style.display ="block";
    snowman.style.pointerEvents = "auto";});


//Second Page//

document.getElementById("reindeer").addEventListener("click",function(){
    if(document.getElementById("fact1").style.display = "none") {
       document.getElementById("fact1").style.display = "block";
        document.getElementById("fact2").style.display = "none";
    } 
});

document.getElementById("penguin").addEventListener("click",function(){
    if(document.getElementById("fact2").style.display = "none"){
        document.getElementById("fact2").style.display = "block";
        document.getElementById("fact1").style.display = "none";
    }
    
});

//Third Page//
var nextpage  = document.getElementById("nextpage"),
    prevpage  = document.getElementById("prevpage"),
    posleft   = document.getElementById("posleft"),
    posright = document.getElementById("posright");

//Move to the left side//
document.getElementById("nextpage").addEventListener("click",function(){
    thirdpage.style.backgroundPosition = "right";
//    will show the things on the rightside 
    prevpage.style.display = "block";
    posright.style.display = "block";
//    will hide the original components
    nextpage.style.display = "none";
    posleft.style.display = "none";
});
//Move to the right side//
document.getElementById("prevpage").addEventListener("click",function(){
    nextpage.style.display = "block";
//    will show the things hidden again
    posleft.style.display = "block"
//will hide the things on the right side
   posright.style.display = "none"
    thirdpage.style.backgroundPosition = "left";
    prevpage.style.display = "none";
});


//Dress Up Santa//
var dressup = document.getElementById("dress");
var leftframe = document.getElementById("leftframe");
var dressnum =1;

document.getElementById("leftimg").addEventListener("click",function(){
    dressnum +=1;
    if (dressnum >=5){
        dressnum = 1;
    }
    dressup.style.backgroundImage="url(svg/clothes"+dressnum+".svg)";
      if (dressnum ==2){
          leftframe.style.backgroundImage= "url(svg/fact3.svg)";
      } else if ( dressnum == 3) {
          leftframe.style.backgroundImage= "url(svg/fact4.svg)";
          
      } else if ( dressnum == 4){
          leftframe.style.backgroundImage= "url(svg/fact5.svg)";
      }else {
          leftframe.style.backgroundImage= "url(svg/emptyframe.svg)";
      }
     
});
document.getElementById("rightimg").addEventListener("click",function(){
    dressnum -=1;
    if (dressnum <=0){
        dressnum = 4;
    }
    dressup.style.backgroundImage="url(svg/clothes" +dressnum+".svg)";
     if (dressnum ==2){
          leftframe.style.backgroundImage= "url(svg/fact3.svg)";
      } else if ( dressnum == 3) {
          leftframe.style.backgroundImage= "url(svg/fact4.svg)";
          
      } else if ( dressnum == 4){
          leftframe.style.backgroundImage= "url(svg/fact5.svg)";
      }else {
          leftframe.style.backgroundImage= "url(svg/emptyframe.svg)";
      }
});
//henry appear
document.getElementById("bluebox").addEventListener("click",function(){
    document.getElementById("popup1").style.opacity= 1;
});
//henry disappear
document.getElementById("popup1").addEventListener("click",function(){
    document.getElementById("popup1").style.opacity= 0;
});

//open the box
    document.getElementById("closebox").addEventListener("click",function(){
    document.getElementById("elf").style.animation = "elfmove 2s forwards"; 
    document.getElementById("closebox").style.display="none"; document.getElementById("openbox").style.display="block";
   
})



$("#wreath").click(function(){
    $("#leftframe").css("background-image", "url(svg/fact6.svg)");
});
//Javascript version
document.getElementById("sweater").addEventListener("click",function(){
    document.getElementById("rightframe").style.backgroundImage ="url(svg/fact7.svg)";
});
document.getElementById("cane").addEventListener("click",function(){
    document.getElementById("rightframe").style.backgroundImage ="url(svg/fact8.svg)";
});
document.getElementById("eggnog").addEventListener("click",function(){
    document.getElementById("rightframe").style.backgroundImage ="url(svg/fact9.svg)";
});
document.getElementById("mistletoe").addEventListener("click",function(){
    document.getElementById("rightframe").style.backgroundImage ="url(svg/fact10.svg)";
});


var socks = document.getElementById("socks"),
    lastdiv = document.getElementById("lastdiv"),
    leftsock = document.getElementById("leftsock"),
    rightsock = document.getElementById("rightsock");



socks.addEventListener("click",function(){
    leftsock.style.left= "-50px";
    leftsock.style.animationPlayState= "paused";
    rightsock.style.right= "-50px";
    rightsock.style.animationPlayState= "paused";
    lastdiv.style.opacity = 1;
    lastdiv.innerText = "HAPPY HOLIDAYS " + name;
});

//audio when hover//
var sound = document.getElementById("sound");
document.getElementById("secondpage").addEventListener("mouseenter",function(){
     sound.play();  
});


//changing pages with Jquery//
//$(document).ready(function(){
//    $("#snowman").click(function(){
//        $("#firstpage").fadeOut().delay( 800 );
//        $("#secondpage").fadeIn();
//    });
//    
//    $("#santa").click(function(){
//        $("#secondpage").fadeOut().delay( 800);
//        $("#thirdpage").fadeIn();
//    });
//    $("#lastpagebutton").click(function(){
//        $("#thirdpage").fadeOut().delay( 800);
//        $("#fourthpage").fadeIn();
//    })
//});
//Playing sound
//$("#secondpage").hover(function(){
//    sound.play();   
//});
// Last page swinging socks
//$("#socks").click(function(){
//    $("#leftsock").css({left: -50 + "px"})
//    $("#leftsock").css("animation-play-state", "paused")
//    $("#rightsock").css({right: -50 + "px"})
//    $("#rightsock").css("animation-play-state", "paused")
//    
//    document.getElementById("lastdiv").style.opacity = 1;
//    document.getElementById("lastdiv").innerText = "HAPPY HOLIDAYS " + name;
//});


//Third Page
//$("#sweater").click(function(){
//    $("#rightframe").css("background-image", "url(svg/fact7.svg)");
//});
//$("#cane").click(function(){
//    $("#rightframe").css("background-image", "url(svg/fact8.svg)");
//});
//$("#eggnog").click(function(){
//    $("#rightframe").css("background-image", "url(svg/fact9.svg)"); 
//});
//$("#mistletoe").click(function(){
//    $("#rightframe").css("background-image", "url(svg/fact10.svg)");
//});


//Dress Up

//$("#rightimg").click(function(){
//        dressnum +=1;
//        
//    if (dressnum >=5){
//        dressnum = 1;
//    }
//    dressup.style.backgroundImage="url(svg/clothes"+dressnum+".svg)";
//      if (dressnum ==2){
//          leftframe.style.backgroundImage= "url(svg/fact3.svg)";
//      } else if ( dressnum == 3) {
//          leftframe.style.backgroundImage= "url(svg/fact4.svg)";
//          
//      } else if ( dressnum == 4){
//          leftframe.style.backgroundImage= "url(svg/fact5.svg)";
//      }else {
//          leftframe.style.backgroundImage= "url(svg/leftframe.svg)";
//      }
//    
//    });
//$("#leftimg").click(function(){
//        dressnum -=1;
//        
//    if (dressnum <= 0){
//        dressnum = 4;
//    }
//    dressup.style.backgroundImage="url(svg/clothes"+dressnum+".svg)";
//     if (dressnum ==2){
//          leftframe.style.backgroundImage= "url(svg/fact3.svg)";
//      } else if ( dressnum == 3) {
//          leftframe.style.backgroundImage= "url(svg/fact4.svg)";
//          
//      } else if ( dressnum == 4){
//          leftframe.style.backgroundImage= "url(svg/fact5.svg)";
//      }else {
//          leftframe.style.backgroundImage= "url(svg/leftframe.svg)";
//      }
//    });

// facts 1 and 2
//$("#reindeer, #penguin").click(function (event) {
//   if (this.id == "reindeer") {
//       $("#fact1").show();
//       $("#fact2").hide();
//   }
//   else if (this.id == "penguin") {
//       $("#fact1").hide();
//       $("#fact2").show();
//   }
//});






