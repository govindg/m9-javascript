// Load the data in data/population-2010.json (use $.get, this
// is a jquery function which we will learn more about next class).
// Information on making ajax calls in jquery:
// https://learn.jquery.com/ajax/jquery-ajax-methods/
$.get("../data/population-2010.json", function(data) {

	// Answer the following questions by writing code to find the
	// answers. Log the result of each question to your browser's
	// developer console.

	// In 2010, how many 32 year olds were women?
	for (var i = 0; i < data.length; i++) {
		if (data[i].age == 32) {
			console.log(data[i].females)
		}
	}


	// Are there more men or women who are 20?
	for (var i = 0; i < data.length; i++) {
		if (data[i].age == 20) {
			if (data[i].males > data[i].females) {
				console.log("There are more men who are 20 than women.")
			} else if (data[i].females > data[i].males) {
				console.log("There are more women who are 20 than men.")
			} else {
				console.log("The same number of men and women are 20.")
			}
		}
	}

	// Find the total percentage of men and the percentage
	// of women in the population. Round both values to
	// 2 decimal places.
	var females = 0;
	var males = 0;
	for (var i = 0; i < data.length; i++) {
		females += data[i].females;
		males += data[i].males
	}
	var femPercent = (females / (females + males)).toFixed(2);
	var malePercent = (males / (females + males)).toFixed(2);
	console.log(femPercent * 100);
	console.log(malePercent * 100);
	// Create a boolean array where
	// at each index the value is true if there are more women
	// of that age than men.
	//
	// For example, at index 10 the value
	// should be false because there are more men aged 10 than
	// women.
	//
	// Bonus: Try to do this without using a loop

	
	// Log this array to the console. Look at its contents and come
	// up with one observation about the data that this array helps
	// you to see. Make a comment of this observation.
});
