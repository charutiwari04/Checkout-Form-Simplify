    document.getElementById('bill-address').style.display = 'none';
	var currentY, endY, diff;
	function scrollDown(){
		console.log(diff/12);
		window.scrollBy(0, -diff/12);
		//if (Math.abs(window.scrollY - endY) < 500) {
            //window.requestAnimationFrame(scrollDown);
        //}
	}
    function showMe(box){
        var element = document.getElementById(box);
	    var chkBox = document.getElementById('q2');
	    var vis = "none";
		var submit = document.querySelector('#submit');
        
            if(chkBox.checked){
             vis = "block";
			 currentY = window.scrollY;
			 endY = submit.getBoundingClientRect().bottom;
			 diff = currentY - endY;
			 scrollDown();
			 //window.requestAnimationFrame(scrollDown);
            }
			
        element.style.display = vis;
	}
    var submit = document.querySelector('#submit');
    submit.onclick = function () {
        alert("All of your information was valid, right? I'll just go ahead and assume that it is ;)\n\nThanks for your submission!");
    };