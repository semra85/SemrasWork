var fs = require('fs');
var chalk = require('chalk');


fs.readFile(__dirname+"/staedte.json", function(err, data) {
	var staedte=JSON.parse(data.toString());

  });

	for (var i = 0; i < staedte.staedte.length; i++) {
		console.log('name: ' + chalk.red( staedte.staedte[i].name));
		console.log('country: ' + chalk.blue ( staedte.staedte[i].country));
		console.log('population: ' + chalk.green (staedte.staedte[i].population));
		console.log('-----------------------------------');
	}

  });

  }),
