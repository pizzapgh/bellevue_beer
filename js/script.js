function initMap() {
			var myLatLng = {lat: 40.490905, lng: -80.060933};

			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 17,
				center: myLatLng
			});

			var marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				title: 'Hello World!'
			});
		}


		(function(){


			// Settings ---

			// Set scale - between 1.00 and 1.99
			var scale = 1.05;


			// Init ---

			// Select container to be css transformed
			var container = document.getElementsByClassName("bgmove")[0];

			// Get container dimensions
			getContainerDimensions();

			// Calculate offset each direction
			var offset = ((scale - Math.floor(scale)) / 2) * 100;

			// Prepare css and browser prefix
			scale = "scale(" + scale + ")";
			container.style.webkitTransform = scale;
			container.style.MozTransform = scale;
			container.style.msTransform = scale;
			container.style.OTransform = scale;
			container.style.transform = scale;


			// Event listeners ---

			window.addEventListener("resize", function() {
				getContainerDimensions()
			});

			container.addEventListener("mousemove", function(e) {
				moveBgImage(e);
			});


			// Helper functions ---

			function getContainerDimensions() {
				width = container.offsetWidth;
				height = container.offsetHeight;
			}

			function moveBgImage(e) {
				// Find center of container
				var pageX = e.pageX - (width / 2);
				var pageY = e.pageY - (height / 2);

				// Calculate movement
				var newX = -(pageX / ((width/2)/offset));
				var newY = -(pageY / ((height/2)/offset));

				// Move bgimage
				container.style.webkitTransform = "translate(" + newX + "%," + newY + "%) " + scale;
				container.style.MozTransform = "translate(" + newX + "%," + newY + "%) " + scale;
				container.style.msTransform = "translate(" + newX + "%," + newY + "%) " + scale;
				container.style.OTransform = "translate(" + newX + "%," + newY + "%) " + scale;
				container.style.transform = "translate(" + newX + "%," + newY + "%) " + scale;
			}


		})();
