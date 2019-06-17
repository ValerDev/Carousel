var i;
var images = [];
var time = 2000;
var play = true;
//image list

images[0] = 'img_0.jpg';
images[1] = 'img_1.jpg';
images[2] = 'img_2.jpg';
images[3] = 'img_3.jpg';

// Change image

function changeImg(play){
	document.slide.src = images[i];
	if(i< images.length-1){
		i++;
		}else{
			i = 0;
		}
	if(play){
	setTimeout("changeImg(play)",time);
	}
}

window.onload= changeImg(play);


//***********************************//
function toRight(){
document.slide.src = images[i];
	if(i< images.length-1){
		i++;
		}else{
			i = 0;
		}

}

window.onload= changeImg;

//***********************************//
function toLeft(){
document.slide.src = images[i];
	if(i > 0){
		i--;
		}else{
			i = 3;
		}

}

window.onload= changeImg;

//***********************************//

function Play(){
	
	  return  changeImg( play = true);
};

//***********************************//

function Stop() {
	return play = false;
	
	
};