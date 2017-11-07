var bio = {
  "name": "Charles Ford",
  "role": "Web Developer",
  "contacts": {
    "mobile": "732-555-5555",
    "email": "charlie@notreally.com",
    "github": "lostandsaved",
    "location": "New Jersey"
  },
  "welcomeMessage": "This is my welcome message",
  "skills": [
    "SkillOne", "SkillTwo"
  ],
  "biopic": "images/fry.jpg"
};

var education = {
  "schools": [
    {
      "name": "Middlesex County College",
      "location": "Edison, NJ",
      "majors": "Business Administration",
      "dates": "1994 - 2000",
      "url": "https://www.middlesexcc.edu/"
    }
  ],
  "onlineCourses": [
   {
     "title": "Front End Web Development",
     "school": "Udacity",
     "dates": "2017",
     "url": "http://www.udacity.com"
   }
 ]
};

var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "Web Developer",
			"location": "Piscataway, NJ",
			"datesWorked": "October 1998 - Present",
			"description": "I began my career at AT&T as a fraud investigator. After 2 years I applied for a job working with the "+
				"systems support and development group. "+
				"One of my responsibilities was maintaining our internal website, which eveolved into devdeloping tools and applications "+
				"for the fraud teams' use."
		},
    {
			"employer": "Pathmark",
			"title": "Front End Manager/Bookkeeper",
			"location": "Middlesex, NJ",
			"datesWorked": "October 1990 - 1999",
			"description": "I began working at this grocery store as a cashier and eventually became a bookkeeper and front end manager."
		}
  ]
};

var projects = {
  "projects": [
    {
      "title": "Portfolio",
      "dates": "2017",
      "description": "I created a responsive Online Portfolio.",
      "images": ["images/profile.jpg"], //this should be a URL to an image
    },
    {
      "title": "Onine Resume",
      "dates": "2017",
      "description": "I created an online resume.",
      "images": ["images/profile.jpg"], //this should be a URL to an image
    }
  ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts, #footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBioPic);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (var i = 0, biolen = bio.skills.length; i < biolen; i++) {
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
  $("#skills").append(formattedSkills);
 }
}

//education
education.display = function(){
  for (school in education.schools) {
     $('#education').append(HTMLschoolStart);
     var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name)
     $('.education-entry:last').append(formattedName);
     var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location)
     $('.education-entry:last').append(formattedLocation);
     var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates)
     $('.education-entry:last').append(formattedDates);
     var formattedMajors = HTMLschoolMajor.replace('%data%', education.schools[school].majors)
     $('.education-entry:last').append(formattedMajors);
  }
}
education.display();

//work history
work.display = function() {
  for (job in work.jobs ) {
    $('#workExperience').append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $('.work-entry:last').append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].datesWorked);
    $('.work-entry:last').append(formattedDates);
    var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
    $('.work-entry:last').append(formattedWorkLocation);
    var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
    $('.work-entry:last').append(formattedWorkDescription);
  }
}
work.display();

//projects
projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectTitle.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectTitle.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    if (projects.projects[project].images.length > 0){
      for (image in projects.projects[project].images){
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}
projects.display();

$("#mapDiv").append(googleMap);
