Template.body.events({

	/*'submit form': function(event) {

		event.preventDefault();

		//console.log("Hello, world");


		let exclamation = template.getElementById('#exclamation').value;
		let adverb = template.getElementById('#adverb').value;
		let animal = template.getElementById('#animal').value;
		let verb = template.getElementById('#verb').value;

		let madLib = exclamation "you shout as you"+ " " + adverb + "  " + animal + " " + verb;
		console.log(madLib);
	}
});
*/
	'submit form'(event) {
	event.preventDefault();

	const target = event.target;
	const exclamation = target.exclamation.value;
	const adverb = target.adverb.value;
	const animal = target.animal.value;
	const verb = target.verb.value;

	const madLib = `'${exclamation}' you say as you jump ${adverb} onto your ${animal} as you ${verb} into the sunset`;
	//console.log(madLib);

	$('#page-title').hide();
	$('#page-title').text(madLib).fadeIn(900).css("color", "#0000ff");


	}
});
