"use strict";
exports.__esModule = true;
var LabyrinthCellType_1 = require("@/data/enums/LabyrinthCellType");
var LabyrinthCell = /** @class */ (function () {
    function LabyrinthCell(xCoordinate, yCoordinate, type) {
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.type = type;
        this.X = xCoordinate;
        this.Y = yCoordinate;
        this.Type = type;
    }
    return LabyrinthCell;
}());
var a = new LabyrinthCell(1, 1, LabyrinthCellType_1["default"].BORDER_CELL);
console.log(a.Type);
exports["default"] = LabyrinthCell;
