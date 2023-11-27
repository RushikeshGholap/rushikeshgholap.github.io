/*Sidenav functions for toggling window*/
function openNav() {
	document.getElementById("mySidenav").style.width = "100%";
	document.getElementById("myMainpanel").style.width = "95%";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "5%";
	document.getElementById("myMainpanel").style.width = "95%";	
}

function swapFirst() {
	document.getElementById("hide_me").style.display = 'none';
	document.getElementById("show_me").className = '';
	document.getElementById("show_me").style.display = 'inline';

}
function swapSecond() {
	document.getElementById("hide_me").style.display = 'inline';
	document.getElementById("show_me").style.display = 'none';
}


function pulsate(element) {
	$(element || this).animate({ opacity: 0.2 }, 2500, function() {
       $(this).animate({ opacity: 1 }, 500, pulsate);
	});
}
pulsate(".pulse")


var text = ["The journey of a thousand miles begins with one step...", "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better...", "The best preparation for tomorrow is doing your best today...","The supreme art of war is to subdue the enemy without fighting...","Good judgment comes from experience, and a lot of that comes from bad judgment...","It's not what you look at that matters, it's what you see...","Life is not a problem to be solved, but a reality to be experienced..."];
var counter = 0;
var elem = document.getElementById("changeText");
setInterval(change, 5000);
function change() {
 elem.innerHTML = text[counter];
    counter++;
    if(counter >= text.length) { counter = 0; }
}


