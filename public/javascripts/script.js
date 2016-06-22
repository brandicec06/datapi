SC.initialize({
	client_id: 'YOUR_CLIENT_ID'
});

$(document).ready(function() {

	var t = {};

	$.ajax({
		url: 'http://www.bjs.gov:8080/bjs/ncvs/v2/personal/2010?format=json',
		data: {
			format: 'json'
		},
		error: function() {
			$('#info').html('<p>An error has occurred</p>');
		},
		dataType: 'json',
		success: function(data) {
			//console.log(data.description);
			//$('#info').text(data.personalData);
			var arr = [];

			for (var k in data.personalData){
				//$('#results').append("<li>"  +" - " +data.personalData[k]["direl"] + "</li>");
				//console.log(k, data.personalData[k])
				arr.push(data.personalData[k]["direl"]);
			}


			//arr = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

			var w = 1900;
			var h =100;
			var bp= 10;
			var bw = 2;



			var svg = d3.select("body")
				.append("svg")
				.attr("width",w)
				.attr("height",h);

			svg.selectAll("rect")
			   .data(arr)
			   .enter()
			   .append("rect")
			   .attr("x", function(d, i) {
    				return i * bw+bp;  //Bar width of 20 plus 1 for padding
				})
			   .attr("y", 0)
			   .attr("width", bw)
			   .attr("height", function(d){
			   		return d *20;
			   });

			
		},
		type: 'GET'
	});



	/*var tBox="";

	$('#text2').keyup(function(){
		tBox = this.value;
		//console.log(tBox);
		


		SC.get('/tracks', { genres: tBox }, function(tracks) {
			$(tracks).each(function(index, track) {
				$('ul').append($('<li></li>').html(track.title + ' - ' + track.genre));
			});
		});

		if (this.value === ""){
			$('ul').empty();
		}
	});

	console.log(tBox);
	*/


});