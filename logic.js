document.addEventListener('DOMContentLoaded', () => {
    const groups = document.querySelectorAll('.Group');

    groups.forEach(group => {
        group.addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON') {
                const selectedButtons = group.querySelectorAll('button.selected');
                const action = event.target.dataset.action;

                if (selectedButtons.length < 3 || event.target.classList.contains('selected')) {
                    event.target.classList.toggle('selected');

                    if (event.target.classList.contains('selected')) {
                        updatePositions(group, event.target, action);
                    } else {
                        clearPosition(event.target);
                    }
                } else {
                    alert('Only three teams can be advanced per group. Deselect a team to select another.');
                }

                adjustSelections(group);
            }
        });
    });
});

function updatePositions(group, button, action) {
    clearPosition(button);

    button.classList.add(action);

<<<<<<< HEAD
}

function clearPosition(button) {
    button.classList.remove('first', 'second', 'third');
}

function adjustSelections(group) {
    const allGroups = document.querySelectorAll('.Group');
    let groupsWithThreeSelected = 0;

    allGroups.forEach(grp => {
        const selected = grp.querySelectorAll('button.selected').length;
        if (selected === 3) {
            groupsWithThreeSelected++;
        }
    });

    if (groupsWithThreeSelected >= 4) {
        allGroups.forEach(grp => {
            const selected = grp.querySelectorAll('button.selected').length;
            if (selected < 3) {
                const buttons = grp.querySelectorAll('button:not(.selected)');
                buttons.forEach(button => button.disabled = true);
            }
        });
    } else {
        allGroups.forEach(grp => {
            const buttons = grp.querySelectorAll('button');
            buttons.forEach(button => button.disabled = false);
        });
    }
}
=======
>>>>>>> ee635f4947309e49e4555e6d4a4d591c659ebb9b
