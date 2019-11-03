var inc = 0.01;

var arrayOfPics = [];

function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
	canvas.style('z-index', '-1');
	pixelDensity(1);

	for(var i = 0; i < 50; i++) {
		arrayOfPics.push(new Pic());
	}
	
}

function draw() {
	loadPixels();
	for (var x = 0; x < windowWidth; x++) {
		for (var y = 0; y < windowHeight; y++) {
			var index = (x + y * width) * 4;
			var r = random(255);
			pixels[index+0] = r;
			pixels[index+1] = r;
			pixels[index+2] = r;
			pixels[index+3] = 255;
		}
	}
	updatePixels()

	for (var i = 0; i < arrayOfPics.length; i++) {
		arrayOfPics[i].show();
		//arrayOfPics[i].move();
	}
}

//image class
class Pic {
	constructor() {
		this.x = random(windowWidth);
		this.y = 0;
		
	}

	show() {
		fetch('https://yesno.wtf/api')
		.then(function(results){
			return results.json()
		})
		.then(function(jsonResults){


		if(jsonResults.answer === "yes"){
			//display();
			return;
		} else {
			var containter = document.getElementById("imageRain");
			var randoX = random(windowWidth) + 'px';
			containter.innerHTML += `<img class="picOfNos" src="${jsonResults.image}"
									 style="position: absolute; top: 0; left=${randoX};"
									  >`;
									   //style="position: absolute; top: 0; left=${randoX};"
			 var picOfNos = document.querySelectorAll(".picOfNos");
			 picOfNos.setAttribute("style", "position: absolute;");
			 picOfNos.style.top = 0;
			 picOfNos.style.left = random(windowWidth) + 'px';
			//arrayOfPics.push(jsonResults.image);
			//console.log(arrayOfNos);
			//document.getElementById("myImage").src = jsonResults.image
		} 
	})


	.catch(function(error){
		console.log("error message:", error)
	})

	}

	move() {
		this.y = this.y + 10;


	}
}