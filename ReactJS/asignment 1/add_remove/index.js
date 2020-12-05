var cityList="";
var count=0;
var i = 0;
            
function addCity(){
    var cities= document.getElementById("addCity").value;
    if(cities != ""){
        cityList += `<li><span  id='CityItem'${i}>${ cities}</span>
                    <button style=" background: red;
                    color: #fff;
                    padding: 10px 20px;
                    border: 1px solid green;
                    cursor: pointer;
                "
                    onclick='removeCity()'>remove</button></li></br>`
					i++;
					document.getElementById("city").innerHTML = cityList;
					document.getElementById("addCity").value="";				
				}
			}
			
			function removeCity(){
                
				cityList="";
				var items = document.querySelectorAll("#city li"),index,tab = [];
				for(var j = 0; j < items.length; j++){
					tab.push(items[j].innerHTML);
				}
				for(var j = 0; j < items.length; j++){
                    count=count+1;
					items[j].onclick = function(){
					   
						index = tab.indexOf(this.innerHTML);
						items[index].parentNode.removeChild(items[index]);
						tab.pop(j,1);
					};
				}
				

            }
            
function findLength(){
    var len=cityList.length;
    document.getElementById("res").innerHTML=`The Length of the List is:${cityList.length}`
}