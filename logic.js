const selectedTeams = {
    'Group A': ['Germany', 'Scotland', 'Hungary', 'Switzerland'],
    'Group B': ['Spain', 'Italy', 'Croatia', 'Albania'],
    'Group C': ['Slovenia', 'Denmark', 'Serbia', 'England'],
    'Group D': ['Poland/Wales', 'Netherlands', 'Austria', 'France'],
    'Group E': ['Belgium', 'Slovakia', 'Romania', 'Ukraine'],
    'Group F': ['Turkey', 'Georgia', 'Portugal', 'Czechia'],
};
function selectTeam(button) {
    const group = button.parentNode.parentNode;
    const groupName = group.querySelector('h2').textContent;
    const teamName = button.textContent;

    // Check if the team is already selected
    if (selectedTeams[groupName].includes(teamName)) {
        // If the team is already selected, remove it from the list
        selectedTeams[groupName] = selectedTeams[groupName].filter(t => t !== teamName);
        // Remove the box of the first team selected if there are more than 2 teams selected
        if (selectedTeams[groupName].length > 2) {
            const firstTeamToRemove = selectedTeams[groupName][0];
            removeTeamBox(groupName, firstTeamToRemove);
        }
    } else {
        // If the team is not selected, add it to the list
        selectedTeams[groupName].push(teamName);
        // If more than 2 teams are selected, remove the box of the first team selected
        if (selectedTeams[groupName].length > 2) {
            const firstTeamToRemove = selectedTeams[groupName][0];
            removeTeamBox(groupName, firstTeamToRemove);
        }
    }

    // Update the display or perform additional actions if needed
    console.log(`Selected ${teamName} in ${groupName}`);
}

function removeTeamBox(groupName, teamName) {
    // Find and remove the box of the specified team
    const group = document.querySelector(`.Group h2:contains('${groupName}')`).parentNode;
    const teamBoxToRemove = group.querySelector(`li:contains('${teamName}')`);
    if (teamBoxToRemove) {
        teamBoxToRemove.remove();
    }
}