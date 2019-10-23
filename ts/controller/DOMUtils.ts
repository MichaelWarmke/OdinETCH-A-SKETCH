function createGrid() {
    let container = document.querySelector('#container');
    let gridSize = Math.pow(16,2)
    console.log(`Creating grid with ${gridSize} total elements.`);

    for(let index of Array(gridSize).keys()) {
        let gridDiv = document.createElement('div');

        gridDiv.classList.add("gridItem");
        gridDiv.id = index.toString();
        container.appendChild(gridDiv);
    }

    function removeAllChildren(element) {
        while(element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    function removeClassFromChildren(styleClass: string) {
        let trailEffectElements = document.querySelectorAll('.trail-on');

        trailEffectElements.forEach((element) => element.classList.remove(styleClass));
    }
}