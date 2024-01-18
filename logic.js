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

    // nothing yet
}