function calcCircumference(radius) {
    var circumference;
  
    circumference=(2*Math.PI*radius).toFixed(2);    
	document.getElementById('result').innerHTML ="The Circumference of the circle is:" +circumference;
  
  }
 function getRadius(){
  var radius = document.getElementById("rad").value;
    if(radius>0){
      calcCircumference(radius);
    }
    else{
      document.getElementById('result').innerHTML =`${radius} is invalid input`

    }
  }
