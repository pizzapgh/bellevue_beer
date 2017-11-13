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
