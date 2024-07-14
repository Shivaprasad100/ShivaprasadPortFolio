const doc = document.querySelector("body");

const navLinks = document.querySelector("#nav-links");
const hamburgerMain = document.querySelector(".hamburgerMain");


const main = document.querySelector(".hamburgerMenu");
const menuInfo = document.querySelector(".menu-info");



function toggleMenu(){
    main.classList.toggle("open");
    
    menuInfo.classList.toggle("open");

}




let projects  = [
    {
        projectImg      :       "Images/PortfolioSampleImg2.png",
        projectName     :       "Portfolio",
        gitHubLink      :       "https://github.com/Shivaprasad100/ShivaprasadPortfolio",
        liviDemoLink    :       "https://shivaprasad.github.io/ShivaprasadPortfolio",
    },
    {
        projectImg      :       "Images/AmazonInterfaceSampleImg2.png",
        projectName     :       "A Simple Amazon Interface",
        gitHubLink      :       "https://github.cm/Shivaprasad100/AmazonInterface",
        liviDemoLink    :       "https://shivaprasad100.github.io/AmazonInterface",
    },
    {
        projectImg      :       "Images/MySnakePic2.png",
        projectName     :       "Snake Game",
        gitHubLink      :       "htpps://github.com/Shivaprasad100/Snake-Game",
        liviDemoLink    :       "https://shivaprasd100.github.io/Snake-Game"
    }

];

const projectsContainer = document.querySelector(".projects-container");

let projectsContainerHtml = "";

projects.forEach((project) => {
    projectsContainerHtml += `
    <div class="each-project-container">

        <div class= "project-pic-container">
            <img src = '${project.projectImg}' alt="p1Alt">
        </div>
        <div class="project-name">${project.projectName} </div>
        <div class="btn-to-go-to-projects-live">
            <button class="btn github-project-btn"><a href="#">GitHub</button>
            <button class="btn live-project-btn"><a href = "#" > Live Demo </a> </button>
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
