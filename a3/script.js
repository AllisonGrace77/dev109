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
	//Create each line on the Rhombus
	for(j=0;j<pHeight;j++){
		if(j<(height-i))
		//should the symbol be white
			rLine +="<span style='color: #ffffff;'>" + pSymbol +"</span>";
		
		//Is the position even or odd so we change the color
		else if (j%2)
		//even
			rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
		else
		//odd
			rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
		}
	for(k=0;k<i-1;k++){
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
document.getElementById("up").innerHTML = rLine;
}

function down(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=pHeight;i > 0;i--){
	rLine +="<p>";
	//Create each line on the Rhombus
	for(j=0;j<pHeight;j++){
		if(j<(height-i))
		//should the symbol be white
			rLine +="<span style='color: #ffffff ;'>" + pSymbol +"</span>";
		
		//Is the position even or odd so we change the color
		else if (j%2)
		//even
			rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
		else
		//odd
			rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
		}
	for(k=0;k<i-1;k++){
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
