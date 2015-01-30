// Declared object that contains bio information
var bio = {
	"name": "Andres Santos",
	"role": "Web Developer",
	"contacts": {
		"mobile":"811-243-0989",
		"email": "andres.santos188@gmail.com",
		"github": "andressantosc",
		"twitter": "asantos188",
		"location": "Monterrey, Mexico"
	},
	"welcomeMessage": "Hello everybody! Welcome to my Resume.",
	"skills": ["Entrepreneur", "Programmer", "Self-motivated", 
	"Great people skills"],
	"bioPic": "images/Profile.jpg"
};

// Declared object that contains work information
var work = {
	"position": "Co-founder",
	"employer": "Neomesa S.A. de C.V.",
	"yearsWorked": "2012 - Present",
	"city": "Monterrey",
	"description": "Retail operations focusing on the Restaurant Industry."
};

// Declared object that contains education information
var edu = {
	"schools": [
		{
			"name": "Northeastern University",
			"dates": "2016",
			"city": "Boston",
			"degree": "Bachelor of Science",
			"major": "Management"
		},
		{
			"name": "Harvard University",
			"dates": "2013 - 2014",
			"city": "Boston",
			"degree": "Harvard Extension Classes"
		},
		{
			"name": "Monterrey Institute of Technology",
			"dates": "2010 - 2013",
			"city": "Monterrey",
			"degree": "B.A. in Economics"
		}
	]
}
// Inserted contact information to the HTML
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").prepend(formattedLocation);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").prepend(formattedGithub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").prepend(formattedTwitter);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").prepend(formattedEmail);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").prepend(formattedMobile);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

// Inserted Title Name and Role to HTML
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

// Inserted Profile Picture and Welcome Message to HTML
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);
var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedMessage);

// Inserted Skills to HTML (unfinished)
$("#header").append(HTMLskillsStart);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
$("#header").append(formattedSkills);
var formattedSkills1 = HTMLskills.replace("%data%", bio.skills[1]);
$("#header").append(formattedSkills1);

// Inserted Work to HTML
$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(HTMLworkEmployer.replace("%data%", work.employer));
$("#workExperience").append(HTMLworkTitle.replace("%data%", work.position));
$("#workExperience").append(HTMLworkDates.replace("%data%", work.yearsWorked));
$("#workExperience").append(HTMLworkLocation.replace("%data%", work.city));
$("#workExperience").append(HTMLworkDescription.replace("%data%", work.description));

// Inserted Education to HTML
$("#education").append(HTMLschoolStart);
$("#education").append(HTMLschoolName.replace("%data%", edu.schools[0].name));
$("#education").append(HTMLschoolDegree.replace("%data%", edu.schools[0].degree));
$("#education").append(HTMLschoolDates.replace("%data%", edu.schools[0].dates));
$("#education").append(HTMLschoolLocation.replace("%data%", edu.schools[0].city));
$("#education").append(HTMLschoolMajor.replace("%data%", edu.schools[0].major));
$("#education").append(HTMLschoolName.replace("%data%", edu.schools[1].name));
$("#education").append(HTMLschoolDegree.replace("%data%", edu.schools[1].degree));
$("#education").append(HTMLschoolDates.replace("%data%", edu.schools[1].dates));
$("#education").append(HTMLschoolLocation.replace("%data%", edu.schools[1].city));
$("#education").append(HTMLschoolName.replace("%data%", edu.schools[2].name));
$("#education").append(HTMLschoolDegree.replace("%data%", edu.schools[2].degree));
$("#education").append(HTMLschoolDates.replace("%data%", edu.schools[2].dates));
$("#education").append(HTMLschoolLocation.replace("%data%", edu.schools[2].city));



