//var button = document.getElementById("myButton");
//button.addEventListener("click", createRhombus());

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
up(pHeight, pColorEven, pColorOdd, pSymbol);
down(pHeight, pColorEven, pColorOdd, pSymbol);

}

function up(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=1;i<=pHeight;i++){
	rLine +="<p>";
	if(i%2===0){
		var num = Math.ceil((pHeight-i)/2);
	}
	else {
		rLine+="<span style='color: #ffffff;'> ' ' </span>"
		var num = Math.floor((pHeight-i)/2);
	}
	for(j=0;j<num;j++){
		rLine +="<span style='color: #ffffff;'>" + pSymbol + "</span>";
		}
	for(k=0;k<i;k++){
		if (k%2)
		//even
			rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
		else
		//odd
			rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
		}
	rLine +="</p>\n";
	//console.log(rLine);*/
}
document.getElementById("up").innerHTML = rLine;
}

function down(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=pHeight-1;i > 0;i--){
	rLine +="<p>";
	
	if(i%2===0){
		var num = Math.ceil((pHeight-i)/2);
	}
	else {
		rLine+="<span style='color: #ffffff;'> ' ' </span>"
		var num = Math.floor((pHeight-i)/2);
	}
	for(j=0;j<num;j++){
		rLine +="<span style='color: #ffffff;'>" + pSymbol + "</span>";
		}
	for(k=0;k<i;k++){
		//Is the position even or odd so we change the color
		if (k%2)
		//even
			rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
		else
		//odd
			rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
		}
	rLine +="</p>\n";
	//console.log(rLine);
	}
document.getElementById("down").innerHTML = rLine;
}
