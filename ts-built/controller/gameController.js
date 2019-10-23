function resetGrid() {
    console.log("Reseting Grid.");
    var gridResolution = prompt("Please enter new resolution: ");
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
    var gridItems = document.querySelectorAll(".gridItem");
    gridItems.forEach(function (child) {
        child.addEventListener('mouseenter', toggleTrailClass);
    });
}
function configureResetButton() {
    var resetButton = document.querySelector('#resetButton');
    resetButton.addEventListener('click', function () { return resetGrid(); });
}
newGame();
