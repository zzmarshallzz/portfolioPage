window.onload = function() {
  console.log('document - onload');

  function scroll(){

    window.addEventListener('scroll', function scroll() {
      var obj= document.getElementsByClassName('ContentCard');
      var innHeight = Number(window.innerHeight);
      var winScrolled = Number(window.scrollY);
      var bottomPane = innHeight + winScrolled;
      var topPane = winScrolled;
      console.log("Bottom of Viewport "+ bottomPane);
      for (i=0; i<obj.length;i++){
        var objTop = obj[i].getBoundingClientRect().top
        var objectPosition = objTop + winScrolled;
        console.log("obj's top pixel " + obj[i].getBoundingClientRect().top/*obj[i].getBoundingClientRect().top +window.scrollY*/);
        //obj[1].getElementsByClassName('ContentCard').classList.add('show');
        if(topPane >= obj[i].getBoundingClientRect().top){

          console.log("itworked");
          obj[i].classList.add('show');
          /*document.getElementById("bgimg").classList.remove('bgimgclass1');*/


          /*
          var distanceToTop = obj.getBoundingClientRect().top+window.scrollY;
          console.log("image "+distanceToTop);*/
        }
      }
    });
  }

  scroll();

}


/*window.onload = function() {captureDistance()};
var obj, distanceToTop;

function captureDistance(){
	var obj= document.getElementByClassName('ContentCard');
	var distanceToTop = obj.getBoundingClientRect().top+window.scrollY;
	console.log("image "+distanceToTop);
window.onscroll = function() {myFunction()};

function myFunction() {
console.log("image "+distanceToTop);
console.log(document.body.scrollTop);
}

}*/




/*
	var bgimg= document.getElementById('bgimg');
	var distanceToTop = bgimg.getBoundingClientRect().top;
	console.log(distanceToTop);
	console.log(document.body.scrollTop);*/






 /*if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.body.style.setProperty("background-image","URL('http://survey.unifocus.com/ClientFiles/968/1/1/156/background.jpg')",null);
        document.body.style.setProperty("background-attachment","fixed",null);
        document.body.style.setProperty("background-repeat","no-repeat",null);
        document.body.style.setProperty("background-position","center",null);
        document.getElementById('bgimg').style.setProperty("display","none", null);
    } else {
	     document.getElementById('bgimg').style.setProperty("position","absolute", null);
       document.getElementById('bgimg').style.setProperty("display","inline", null);
       document.body.style.setProperty("background-image","none",null);
}*/
