/*
     Name: Miranda Johnson
     Date: 07 -11 -14
     Class & Section:  PWA1-####
     Comments: "Goal 3: Review of WPF"
 */


// Create privatized scope using a self-executing function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),     //define var to display results of document by element id
		searchInput = document.forms[0].search,              // Search the form input of the document
		currentSearch = ''                                   // Current search is empty
	;                                                        // Colon to end statement
	
	// Validates search query
	var validate = function(query){   //create validate function
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) = " "){        //while loop to check the length of query is equal to
			query = query.substring(1, query.length);        //
		};
		while(query.charAt(query.length-1) === ""){          // 
			query = query.substring(0, query.length-1);
		;   												 // error extra colon
		 
		// Check search length, must have 3 characters
		if(query.length < 3){       // check to see if the query has less than three characters
			alert("Your search query is too small, try again.");       //Alert message when the search query is too small
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();                                 //
			return;                                             // to stop function
		};
		
		search(query);                                         //perform the search
	};
	
	// Finds search matches
	var search = function(query)                               //Define the search variable and function
		
		// split the user's search query string into an array   
		var queryArray = query.join(" ");                       //variable for query array   
		
		// array to store matched results from database.js
		var results = [];                                       //variable for results 

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){                     //for loop to go through the database
		
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');                  //variable for database
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);   //convert variable to lower case
			
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){      // for loop to query through an array
				var qitem = queryArray[ii].tolowercase();          //query through array change to lowercase
				
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem);               //variable to compare database items
				if(compare !== -1){                                //if compare does not equal
					results.push(db[i]);                           //database results
				};
				
		
		results.sort();                                            //sort results
		
		// Check that matches were found, and run output functions
		if(results.length = 0){                                   //If results length is 0
			noMatch();                                            // There is no match
		}else{                                                    // if/ else statement
			showMatches(results);                                 // else show the results/matches
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){                                     // define no match function
		var html = ''+                                            //html variable
			'<p>No Results found.</p>'+                           //message to display when no results are found
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>' //suggestion message to display in html
		;
		resultsDIV.innerHTML = html;                               // Add message to html div
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){                           //Show matches function passing result parameter
		
		// THE NEXT 4 LINES ARE CORRECT.                           
		var html = '<p>Results</p>',                               //variable to show results in html
			title, 
			url
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){                  // for loop to search through results
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');                    //
			title = results[i].subString(0, titleEnd);             //
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);  //
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';   //concatenate href and url and title
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){                        //define function for form on submit
		var query = searchInput.value;                              //query variable to search input value
		validate(query);                                            //pass query parameter to validate variable

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	;

})();