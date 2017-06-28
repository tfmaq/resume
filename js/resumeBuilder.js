/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    name: "Tommy Maqsoodi",
    role: "Web Developer",
    contacts: {
        mobile: "562-567-5171",
        email: "tommy-m@hotmail.com",
        github: "https://github.com/tfmaq",
        location: "Galt, CA"
    },
    welcomeMessage: "Welcome to my resume and hope to hear from you soon",
    skills: [
        "Spending time with Javascript", "Prettifying photos with Photoshop", "Having fun with Illustrator", "Manipulating my Linux system", "Exploring and developing websites"
    ],
    biopic: "images/selfie2.JPG"
};

bio.display = function(){
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole, formattedName);

    var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
    var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedBioPic, formattedMsg);

    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGit = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLoc = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGit, formattedLoc);

    $("#header:last").append(HTMLskillsStart);
    var skill = bio.skills.forEach(function(skill){
        var formattedSkills = HTMLskills.replace("%data%",skill);
        $("#header").append(formattedSkills);
        return skill;
    });
};
bio.display();

var education = {
    schools: [
    {
        name: "Citrus College",
        location: "Glendora, CA",
        degree: "Associate",
        majors: "Web Design",
        dates: "3"
    },
    {
        name: "Mount San Antonio College",
        location: "Walnut, CA",
        degree: "Certificate",
        majors: [
            "Psychiatric Technician"
        ],
        dates: "1.5"
    },
    {
        name: "Udacity",
        location: "San Francisco, CA",
        degree: "Nanodegree",
        majors: [
            "Web Development"
        ],
        dates: "0.5"
    }
   ],
    onlineCourses: [
    {
        title: "Web Development bootcamp",
        school: "Udemy",
        dates: "2016",
        url: "https://www.udemy.com/"
    }
   ]
};

education.display = function(){
    for(var i = 0; i < education.schools.length; i++){
        $("#education").append(HTMLschoolStart);

        var formattedSN = HTMLschoolName.replace("%data%",education.schools[i].name);
        var formattedSD = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
        var formattedSND = formattedSN + formattedSD;
        $(".education-entry:last").append(formattedSND);

        var formattedSDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
        var formattedSLoc = HTMLschoolLocation.replace("%data%",education.schools[i].location);
        $(".education-entry:last").append(formattedSLoc, formattedSDates);

        for(var x = 0; x < education.schools[i].majors.length; x++){
            var formattedSM = HTMLschoolMajor.replace("%data%",education.schools[i].majors);
        };
        $(".education-entry:last").append(formattedSM);
    }

    for(var x = 0; x < education.onlineCourses.length; x++){
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").prepend(HTMLonlineClasses);

        var formattedOT = HTMLonlineTitle.replace("%data%",education.onlineCourses[x].title);
        var formattedOS = HTMLonlineSchool.replace("%data%",education.onlineCourses[x].school);
        var formattedOTS = formattedOT + formattedOS;
        $(".education-entry:last").append(formattedOTS);

        var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[x].dates);
        var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[x].url);
        $(".education-entry:last").append(formattedURL, formattedDates);
    }
};
education.display();


var work = {
    jobs: [
    {
        employer: "Department of State Hospital",
        title: "Psych Tech",
        location: "Stockon, CA",
        dates: "in progress",
        description: "Provided direct medical and mental health to prisoners within the facility."
    },
    {
        employer: "Inclusion Services",
        title: "Caregiver",
        location: "Whittier, CA",
        dates: "Jan 2010 - Jun 2012",
        description: "Assisted clients with medical or mental health with daily living tasks at their home."
    }
    ]
};

work.display = function(){
    for(var i = 0; i < work.jobs.length; i++){
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedWLoc = HTMLworkLocation.replace("%data%",work.jobs[i].location);
        $(".work-entry:last").append(formattedWLoc);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();

var projects = {
    projects: [
    {
        title: "Portfolio site",
        dates: "4-2017",
        description: "responsive site designed by implying CSS and HTML codes.",
        images: [
            "images/project1-small.png"
        ],
    },
    {
        title: "Resume",
        dates: "6-2017",
        description: "completed by coding through Javascript.",
        images: [
            "images/project2-small.png"
        ],
    }
    ]
};

projects.display = function(){
    for(var i = 0; i < projects.projects.length; i++){
        $("#projects").append(HTMLprojectStart);

        var formattedPT = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
        var formattedPD = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
        var formattedPDes = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
        $(".project-entry:last").append(formattedPT, formattedPD, formattedPDes);

        for(var x = 0; x < projects.projects[i].images.length; x++){
            var formattedPI = HTMLprojectImage.replace("%data%",projects.projects[i].images);
            $(".project-entry:last").append(formattedPI);
        };
    }
};
projects.display();

//for google maps to work
$("#mapDiv").append(googleMap);