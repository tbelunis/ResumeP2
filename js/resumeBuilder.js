var bio = {
    "name": "John Doe",
    "role": "Front-end Developer",
    "contacts": {
        "email": "john@johndoe.com",
        "github": "johndoe",
        "location": "San Francisco, CA",
        "twitter": "@johndoe",
        "blog": "John's Blog",
        "mobile": "415-555-5555"
    },
    "pictureURL": "images/fry.jpg",
    "welcomeMessage": "Welcome to my resume",
    "skills": [
        "JavaScript",
        "Angular JS",
        "Oracle",
        "SQL",
        "HTML",
        "CSS"
    ],
    "display": function() {
        var header = $("#header");
        var topContacts = $("#topContacts");
        var footerContacts = $("#footerContacts");
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        header.prepend(formattedRole);
        header.prepend(formattedName);
        for (var contact in this.contacts) {
            var formattedData = "";
            switch (contact) {
                case "email":
                    formattedData = HTMLemail.replace("%data%", this.contacts.email);
                    break;
                case "mobile":
                    formattedData = HTMLmobile.replace("%data%", this.contacts.mobile);
                    break;
                case "blog":
                    formattedData = HTMLblog.replace("%data%", this.contacts.blog);
                    break;
                case "github":
                    formattedData = HTMLgithub.replace("%data%", this.contacts.github);
                    break;
                case "twitter":
                    formattedData = HTMLtwitter.replace("%data%", this.contacts.twitter);
                    break;
                case "location":
                    formattedData = HTMLlocation.replace("%data%", this.contacts.location);
                    break;
            }
            topContacts.append(formattedData);
            footerContacts.append(formattedData);
        }
        var formattedBioPic = HTMLbioPic.replace("%data%", this.pictureURL);
        header.append(formattedBioPic);
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
        header.append(formattedWelcome);
        header.append(HTMLskillsStart);
        for (var i = 0; i < this.skills.length; i++) {
            $('#skills').append(HTMLskills.replace("%data%", this.skills[i]));
        }
    }
};

var work = {
    "jobs": [{
        "employer": "Great Big Bank",
        "title": "Software Engineer",
        "dates": "2014 - present",
        "description": "Wrote Oracle stored procedures to support web application.",
        "location": "San Francisco, CA"
    }, {
        "employer": "Big Retail Store",
        "title": "Web Developer",
        "dates": "2012 - 2014",
        "description": "Wrote HTML and CSS for the company's online store.",
        "location": "New York, NY"
    }, {
        "employer": "Another Big Retail Store",
        "title": "Web Developer",
        "dates": "2011 - 2012",
        "description": "Coded web pages for the store's website",
        "location": "Seattle, WA"
    }]
};

work.display = function() {
    for (var job in this.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", this.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
        $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription);
    }
};


var education;
education = {
    "schools": [{
        "name": "Ohio University",
        "location": "Athens, OH",
        "degree": "Bachelor of Arts",
        "majors": ["Computer Science", "Business Analytics"],
        "dates": "2007 - 2011",
        "url": "http://www.ohio.edu"
    }],
    "onlineCourses": [{
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "dates": "2015",
        "courseUrl": "https://www.udacity.com/course/intro-to-html-and-css--ud304",
        "url": "http://www.udacity.com"
    }, {
        "title": "Responsive Web Design Fundamentals",
        "school": "Udacity",
        "dates": "2015",
        "courseUrl": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893",
        "url": "http://www.udacity.com"
    }, {
        "title": "Responsive Images",
        "school": "Udacity",
        "dates": "2015",
        "courseUrl": "https://www.udacity.com/course/responsive-images--ud882",
        "url": "http://www.udacity.com"
    }],
    "display": function() {
        var education = $("#education");
        var formattedSchool;
        var formattedDegree;
        var formattedMajor;
        var formattedDate;
        var formattedTitle;
        var formattedUrl;

        education.append(HTMLschoolStart);

        for (var i = 0; i < this.schools.length; i++) {
            formattedSchool = HTMLschoolName.replace("%data%", this.schools[i].name);
            formattedDate = HTMLschoolDates.replace("%data%", this.schools[i].dates);
            formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[i].degree);
            formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[i].majors.join(", "));
            
            $(".education-entry:last").append(formattedSchool + formattedDegree + formattedDate + formattedMajor);
            $(".education-entry:last").find('a').attr('href', this.schools[i].url);
        }

        education.append(HTMLonlineClasses);
        education.append(HTMLschoolStart);
        for (var i = 0; i < this.onlineCourses.length; i++) {
            formattedTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[i].title);
            formattedSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[i].school);
            formattedDate = HTMLonlineDates.replace("%data%", this.onlineCourses[i].dates);
            formattedUrl = HTMLonlineURL.replace("%data%", this.onlineCourses[i].courseUrl);
            $(".education-entry:last").append(formattedTitle + formattedSchool + formattedDate + formattedUrl);
            $(".education-entry:last").find('a').first().attr('href', this.onlineCourses[i].url);
        }

    }
};

var projects = {};
projects.projects = [{
    "title": "Portfolio",
    "dates": "2015",
    "description": "Web page to showcase my Udacity projects",
    "images": ["../images/artichoke.jpg", "../images/tiles.jpg", "../images/rose.jpg"]
}];

projects.display = function() {
    var formattedImages = "";

    for (var i = 0; i < this.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[i].title);
        var formattedDates = HTMLprojectDates.replace("%data%", this.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[i].description);
        for (var j = 0; j < this.projects[i].images.length; j++) {
            formattedImages = formattedImages + HTMLprojectImage.replace("%data%", this.projects[i].images[j]);
        }
        $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription + formattedImages);
    }
};

bio.display();
work.display();
projects.display();
education.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

function inName(name) {
    var finalName = name.trim();
    // Your code goes here!
    var nameParts = finalName.split(" ");
    var firstName = nameParts[0][0].toUpperCase() + nameParts[0].toLowerCase().slice(1);
    var lastName = nameParts[1].toUpperCase();
    finalName = firstName + " " + lastName;

    // Don't delete this line!
    return finalName;
}