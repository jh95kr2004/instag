var noParticles = false;

particlesJS.load('topContainer', 'assets/particles.json', function() {
});

$(document).ready(function(){

	$("#submitButton").on("click", function() {
		$("#inputDiv").animate({
			opacity:"0"
		}, 250, function() {
			$(this).css("display", "none");
			$("#resultDiv").css("display", "");
			$("#resultDiv").animate({
				opacity:"1"
			}, 250);
		});
		noParticles = true;
		for(var i = 0; i < pJSDom[0].pJS.particles.array.length; i++) {
			vx = pJSDom[0].pJS.particles.array[i].x - pJSDom[0].pJS.canvas.w / 2;
			vy = pJSDom[0].pJS.particles.array[i].y - pJSDom[0].pJS.canvas.h / 2;
			p = Math.sqrt(vx * vx + vy * vy) / 25;
			pJSDom[0].pJS.particles.array[i].vx = vx / p;
			pJSDom[0].pJS.particles.array[i].vy = vy / p;
		}
	});

	$(".return").on("click", function() {
		$("div#topContainer canvas").css("opacity", 0);
		$("#resultDiv").animate({
			opacity:"0"
		}, 250, function() {
			$(this).css("display", "none");
			$("#inputDiv").css("display", "");
			$("#inputDiv").animate({
				opacity:"1"
			}, 250);
		});
		noParticles = false;
		pJSDom[0].pJS.fn.particlesRefresh();
		$("div#topContainer canvas").animate({
			opacity:"1"
		}, 250);
	});

});