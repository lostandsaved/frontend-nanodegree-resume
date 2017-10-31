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
}

var work = {};
work.position = "Web Developer";
work.employer = "AT&T";
work.years = "19";

var education = {};
education["name"] = "Middlesex County College";
education["years"] = "1994 - 2000";
education["city"] = "Edison, NJ";

$("main").append(work["position"]);
$("main").append(education.name);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts, #footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

//if (bio.skills.length > 0) {
$("#header").append(HTMLskillsStart);
for (var i = 0, biolen = bio.skills.length; i < biolen; i++) {
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
//$("#header").append(formattedSkills);
  $("#skills").append(formattedSkills);
 }
//}
