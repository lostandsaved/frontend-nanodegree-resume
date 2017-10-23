//$("#main").append("Charles Ford");
//var awesomeThoughts = "I am Charlie and I am awesome!"
//var funThoughts = awesomeThoughts.replace("awesome", "fun");
//$("#main").append(funThoughts);
var name="Charles Ford";
var role="Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("header").append(formattedName);
$("header").prepend(formattedRole);
