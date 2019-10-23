var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
function createGrid(gridResolution) {
    var e_1, _a;
    var container = document.querySelector('#container');
    var gridSize = Math.pow(gridResolution, 2);
    console.log("Creating grid with " + gridSize + " total elements.");
    var gridItemheight = 960 / gridResolution;
    removeAllGridItems();
    container.setAttribute('style', "grid-template-columns: repeat(" + gridResolution + ", auto);");
    try {
        for (var _b = __values(Array(gridSize).keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var index = _c.value;
            var gridDiv = document.createElement('div');
            gridDiv.classList.add("gridItem");
            gridDiv.id = index.toString();
            container.appendChild(gridDiv);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
function removeClassFromAllElements(styleClass) {
    var trailEffectElements = document.querySelectorAll("." + styleClass);
    trailEffectElements.forEach(function (element) { return element.classList.remove(styleClass); });
}
function removeAllGridItems() {
    var container = document.querySelector('#container');
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}
