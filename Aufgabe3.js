var fs = require('fs');
var chalk = require('chalk');


fs.readFile(__dirname+"/staedte.json", function(err, data) {
	var staedte=JSON.parse(data.toString());

	staedte.staedte.sort(function(a, b) {
		if(a.population > b.population) {
			return -1;
		} else if(a.population < b.population) {
			return 1;
		} else {
			return 0;
		}
	});
   	//console.log(staedte.staedte[0]);

	for (var i = 0; i < staedte.staedte.length; i++) {
		console.log('name: ' + chalk.red( staedte.staedte[i].name));
		console.log('country: ' + chalk.blue ( staedte.staedte[i].country));
		console.log('population: ' + chalk.green (staedte.staedte[i].population));
		console.log('-----------------------------------');
	}

	fs.writeFile(__dirname + '/staedte_sortiert.json', JSON.stringify(wolkenkratzer), function(err){
		if(err) {
			console.log(err);
		} else {
			console.log('Datei erfolgreich gespeichert');
		}
	});




});
