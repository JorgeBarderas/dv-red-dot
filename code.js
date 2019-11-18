$(document).ready(function() {
	var svg = d3.select('#main').append('svg');
	svg.attr('width', 600).attr('height', 300);

	// D3 Scale
	var y = d3.scaleLinear().domain([15,90]).range([250,0]);
	var x = d3.scaleLog().domain([250,100000]).range([600,0]);
	var r = d3.scaleSqrt().domain([52070, 1380000000]).range([10,40]);
	svg.append('circle')
		.attr('fill', 'red')
		.attr('r',r(1380000000))
		.attr('cx',x(13330))
		.attr('cy',y(77));
});