    var placeSearch, autocomplete;
	var componentsForm = {
		street_address: '',
        city: '',
        state: '',
        country: ''		
	};
	function init() {
	    // Create the autocomplete object, restricting the search to geographical
        // location types.
        autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(document.getElementById('loc')),
            {types: ['geocode']});

        // When the user selects an address from the dropdown, populate the address
        // fields in the form.
        autocomplete.addListener('place_changed', fillInAddress);    
	}
	
	function fillInAddress(){
		var place = autocomplete.getPlace();
		var components = place.address_components;
		var add1 = document.getElementById('add1');
		var add2 = document.getElementById('add2');
		var add3 = document.getElementById('add3');
		var add4 = document.getElementById('add4');
		add1.value = place.address_components[0].short_name+' '+place.address_components[1].short_name;
		add2.value = place.address_components[3].short_name;
		add3.value = place.address_components[5].short_name + ',' + place.address_components[6].short_name;
		add4.value = place.address_components[7].short_name;
	}
	
	function getAddress(){
		if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position){
				var geolocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                var circle = new google.maps.Circle({
                    center: geolocation,
                    radius: position.coords.accuracy
                });
                autocomplete.setBounds(circle.getBounds());
			});
		} 
		else { 
            alert("Geolocation is not supported by this browser. Please type your address below.");
        }
	}
	
	document.getElementById('bill-address').style.display = 'none';
	var currentY, endY, diff;
	function scrollDown(){
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
			else{
				diff = diff * (-1);
				scrollDown();
			}
			
        element.style.display = vis;
	}
    var submit = document.querySelector('#submit');
    submit.onclick = function () {
        alert("All of your information was valid, right? I'll just go ahead and assume that it is ;)\n\nThanks for your submission!");
    };
	