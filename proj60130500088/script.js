// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("topBtn").style.display = "block";
		document.getElementById("boxright").style.display = "block";
	} else {
	document.getElementById("topBtn").style.display = "none";
	document.getElementById("boxright").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var i = 0;
var txt0 = '"ส่งคุณค่าถึงมือคุณ"';
var txt1 = '"มั่นใจ  ไร้สารเคมี"';
var txt2 = '"เราปลูกด้วยความรัก"';
var txt3 = '"ใส่ใจ ในทุกขั้นตอน"';
var speed = 100;
var times = 0;

function typeWriter() {
  if (i < txt0.length && times == 0) {
    document.getElementById("centerTxt").innerHTML += txt0.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else if (i < txt1.length && times == 1){
  	document.getElementById("centerTxt").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
    else if (i < txt2.length && times == 2){
  	document.getElementById("centerTxt").innerHTML += txt2.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
    else if (i < txt3.length && times == 3){
  	document.getElementById("centerTxt").innerHTML += txt3.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  	else if (i === 20) {
  	setTimeout(clearTxt,2200);
  	}
}

function clearTxt() {
	  document.getElementById("centerTxt").innerHTML = "";
	  i=0;
	  if (times === 3) {
	  	times = 0;
	  }
	  else {
	  	times ++;;
	  }
	  	typeWriter();
}

var num = 0;
function addto(){
	num++;
	document.getElementById("numofshop").innerHTML = num;
}

function success(){
    alert("เราได้รับข้อมูลของคุณแล้ว เราจะติดต่อกลับให้เร็วที่สุด ขอบคุณครับ");
}

