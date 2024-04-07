//const buttonShowProjects = document.querySelector('.btn-show-projects');
const buttonShowMoreProjects = document.getElementById("show-more");
const buttonShowLessProjects = document.getElementById("show-less");
const inactiveProjects = document.querySelectorAll('.project:not(.active)');

buttonShowMoreProjects.addEventListener('click', () => {
    ShowMoreProjects();
});

buttonShowLessProjects.addEventListener('click', () => {
    ShowLessProjects();
})

function ShowMoreProjects(){
    inactiveProjects.forEach(inactiveProject => {
        inactiveProject.classList.add('active');
    });
    buttonShowMoreProjects.classList.add('hidden');
    buttonShowLessProjects.classList.remove('hidden');
}

function ShowLessProjects(){
    inactiveProjects.forEach(inactiveProject => {
        inactiveProject.classList.remove('active');
    });
    buttonShowMoreProjects.classList.remove('hidden');
    buttonShowLessProjects.classList.add('hidden');
}