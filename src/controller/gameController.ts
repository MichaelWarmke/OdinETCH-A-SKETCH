
function resetGrid(): void {
    console.log("Reseting Grid.")
    let gridResolution = prompt("Please enter new resolution: ");
    createGrid(Number.parseInt(gridResolution));
    configureTrailListener();
}

function newGame() {
    createGrid(16);
    configureTrailListener();
    configureResetButton();
}

function toggleTrailClass(event) {
    event.target.classList.toggle("trail-on");
}

function configureTrailListener() {
    let gridItems = document.querySelectorAll(".gridItem");

    gridItems.forEach((child) => {
        child.addEventListener('mouseenter', toggleTrailClass);
    });
}

function configureResetButton()  {
    let resetButton = document.querySelector('#resetButton');

    resetButton.addEventListener('click', () => resetGrid());
}


newGame();