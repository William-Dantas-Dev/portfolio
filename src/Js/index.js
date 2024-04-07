const buttonShowProjects = document.querySelector('.btn-show-projects');
const inactiveProjects = document.querySelectorAll('.project:not(.active)');

buttonShowProjects.addEventListener('click', () => {
    ShowMoreProjects();
    HiddenShowMoreButton();
});

function HiddenShowMoreButton() {
    buttonShowProjects.classList.add('hidden');
}

function ShowMoreProjects() {
    inactiveProjects.forEach(inactiveProject => {
        inactiveProject.classList.add('active');
    });
}
