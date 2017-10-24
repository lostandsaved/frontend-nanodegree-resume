//$("#main").append("Charles Ford");
//var awesomeThoughts = "I am Charlie and I am awesome!"
//var funThoughts = awesomeThoughts.replace("awesome", "fun");
//$("#main").append(funThoughts);
//var name="Charles Ford";
//var role="Web Developer";
//var formattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%", role);

var bio = {
  "name" : "Charles Ford",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "732-555-5555",
    "email" : "charlie@notreally.com"
    "github" : "lostandsaved",
    "location" : "New Jersey"
  },
  "welcomeMessage" : "This is my welcome message",
  "skills" : [
    "SkillOne", "SkillTwo"
  ],
  "biopic" : "images/fry.jpg"
}
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
