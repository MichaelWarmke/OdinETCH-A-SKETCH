function createGrid(gridResolution: number): void {
    let container = document.querySelector('#container');
    let gridSize = Math.pow(gridResolution,2)
    console.log(`Creating grid with ${gridSize} total elements.`);

    let gridItemheight = 960/gridResolution;

    removeAllGridItems();
    container.setAttribute('style', `grid-template-columns: repeat(${gridResolution}, auto);`);

    for(let index of Array(gridSize).keys()) {
        let gridDiv = document.createElement('div');

        gridDiv.classList.add("gridItem");
        gridDiv.id = index.toString();
        container.appendChild(gridDiv);
    }
}

function removeClassFromAllElements(styleClass: string): void {
    let trailEffectElements = document.querySelectorAll(`.${styleClass}`);

    trailEffectElements.forEach((element) => element.classList.remove(styleClass));
}

function removeAllGridItems(): void {
    let container = document.querySelector('#container');

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}