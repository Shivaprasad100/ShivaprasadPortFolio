 let projects  = [
    {
        projectImg      :       "./instaView2.png",
        projectName     :       "Project1",
        gitHubLink      :       "github.com",
        liviDemoLink    :       "live.html"
    },
    {
        projectImg      :       "./instaView2.png",
        projectName     :       "Project 2",
        gitHubLink      :       "github.com",
        liviDemoLink    :       "live.html"
    },
    {
        projectImg      :       "./instaView2.png",
        projectName     :       "Project 3",
        gitHubLink      :       "github.com",
        liviDemoLink    :       "live.html"
    },
    {
        projectImg      :       "./instaView2.png",
        projectName     :       "Project 4",
        gitHubLink      :       "github.com",
        liviDemoLink    :       "live.html"
    }

];

const projectsContainer = document.querySelector(".projects-container");

let projectsContainerHtml = "";

projects.forEach((project) => {
    projectsContainerHtml += `
    <div class="each-project-container">

        <div class= "project-pic-container">
            <img src="${project.projectImg}" alt="p1Alt">
        </div>
        <div class="project-name">${project.projectName} </div>
        <div class="btn-to-go-to-projects-live">
            <button class="btn github-project-btn">GitHub</button>
            <button class="btn live-project-btn">Live Demo</button>
        </div>

    </div>`;
});

projectsContainer.innerHTML = projectsContainerHtml;


//SKILLS
let skillDomains = ["Programming Languages", "Web Technologies",    "Frameworks",   "Other-Technologies"];
let skills = [
    ["Python", "Java"],
    ["HTML",  "CSS",  "JavaScript"],
    ["Django"],
    ["MySQL", "Git", "GitHub"]
];

const skillsExploreContainer = document.querySelector(".skills-explore-container");

let skillsExploreContainerHtml = "";

skillDomains.forEach((eachDomain, domainIndex) => {

    skillsExploreContainerHtml += `<div class="each-skill-container">

                                        <ul class="skill-li"> 
                                            <li><h4> ${eachDomain} </h4> </li>`;

    skills[domainIndex].forEach(eachSkill =>{

        skillsExploreContainerHtml += `
                    <li>    ${eachSkill}</li>
                    `;
    });

    skillsExploreContainerHtml += `
        </ul>
    </div>
`;

    
});


skillsExploreContainer.innerHTML = skillsExploreContainerHtml;
