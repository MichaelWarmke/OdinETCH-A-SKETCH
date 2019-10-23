
function removeGrid() {
    removeAllChildren(document.querySelector('#container'));
}

function resetGrid() {
    removeGrid()
}

function newGame() {
    createGrid();
    addTrailEventListeners();
}

function toggleTrailClass(event) {
    event.target.classList.toggle("trail-on");
}

function addTrailEventListeners() {
    let gridItems = document.querySelectorAll(".gridItem");

    gridItems.forEach((child) => {
        child.addEventListener('mouseenter', toggleTrailClass);
    });
}

function configureResetButton()  {
    let resetButton = document.querySelector('#resetButton');

    resetButton.addEventListener('click', () => newGame());
}


newGame();