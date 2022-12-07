const header = document.querySelector('header');
header.style.backgroundColor = "green";

const emergencyTask = document.querySelector('.emergency-tasks');
emergencyTask.style.backgroundColor = "pink";

const titleEmergencyTask = document.querySelectorAll('.emergency-tasks h3');
titleEmergencyTask[0].style.backgroundColor = 'purple';
titleEmergencyTask[1].style.backgroundColor = 'purple';

const noEmergencyTask = document.querySelector('.no-emergency-tasks');
noEmergencyTask.style.backgroundColor = 'yellow';

const titleNoEmergencyTask = document.querySelectorAll('.no-emergency-tasks h3');
titleNoEmergencyTask[0].style.backgroundColor = 'black';
titleNoEmergencyTask[1].style.backgroundColor = 'black';

const footer = document.querySelector('footer');
footer.style.backgroundColor = 'gray';