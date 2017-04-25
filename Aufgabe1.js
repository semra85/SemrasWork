var fs = require('fs');

fs.readFile(__dirname+"/staedte.json", function(err, data) {
	var staedte=JSON.parse(data.toString());
});

   	//console.log(wolkenkratzer.wolkenkratzer[0]);

	for (var i = 0; i < staedte.staedte.length; i++) {
		console.log('name: '+ staedte.staedte[i].name);
		console.log('country:' + staedte.staedte[i].country);
		console.log('population: ' + staedte.staedte[i].hoehe);
		console.log('-----------------------------------');
	}

});
