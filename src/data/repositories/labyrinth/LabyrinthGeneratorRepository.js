"use strict";
exports.__esModule = true;
var LabyrinthCell_1 = require("@/data/models/labyrinth/LabyrinthCell");
var LabyrinthCellType_1 = require("@/data/enums/LabyrinthCellType");
var LabyrinthGeneratorRepository = /** @class */ (function () {
    function LabyrinthGeneratorRepository() {
    }
    LabyrinthGeneratorRepository.getInstance = function () {
        if (!LabyrinthGeneratorRepository.instance) {
            LabyrinthGeneratorRepository.instance = new LabyrinthGeneratorRepository();
        }
        return LabyrinthGeneratorRepository.instance;
    };
    LabyrinthGeneratorRepository.prototype.generateLabyrinth = function (width, height) {
        function FindPossibleDirection(Maze, list, i, j) {
            if (i + 2 < height && Maze[i + 2][j].Type === LabyrinthCellType_1["default"].BORDER_CELL) {
                list.push((i + 2) * width + j);
            }
            if (i - 2 >= 0 && Maze[i - 2][j].Type === LabyrinthCellType_1["default"].BORDER_CELL) {
                list.push((i - 2) * width + j);
            }
            if (j + 2 < width && Maze[i][j + 2].Type === LabyrinthCellType_1["default"].BORDER_CELL) {
                list.push((i) * width + j + 2);
            }
            if (j - 2 >= 0 && Maze[i][j - 2].Type === LabyrinthCellType_1["default"].BORDER_CELL) {
                list.push((i) * width + j - 2);
            }
            return list;
        }
        function CreateWay(Maze, position, positionNum) {
            var j = positionNum % width;
            var i = Math.floor(positionNum / width);
            var PossibleWays = [4, 4, 4, 4];
            if (i + 2 < height && Maze[i + 2][j].Type === LabyrinthCellType_1["default"].EMPTY_CELL) {
                PossibleWays[0] = 0;
            }
            if (i - 2 >= 0 && Maze[i - 2][j].Type === LabyrinthCellType_1["default"].EMPTY_CELL) {
                PossibleWays[1] = 1;
            }
            if (j + 2 < width && Maze[i][j + 2].Type === LabyrinthCellType_1["default"].EMPTY_CELL) {
                PossibleWays[2] = 2;
            }
            if (j - 2 >= 0 && Maze[i][j - 2].Type === LabyrinthCellType_1["default"].EMPTY_CELL) {
                PossibleWays[3] = 3;
            }
            var firstRand = Math.floor(Math.random() * 4);
            var secondRand = Math.floor(Math.random() * 4);
            var b = PossibleWays[firstRand];
            PossibleWays[firstRand] = PossibleWays[secondRand];
            PossibleWays[secondRand] = b;
            for (var m = 0; m < 4; m++) {
                if (PossibleWays[m] === 0) {
                    Maze[i + 1][j].Type = LabyrinthCellType_1["default"].EMPTY_CELL;
                    Maze[i][j].Type = LabyrinthCellType_1["default"].EMPTY_CELL;
                    break;
                }
                if (PossibleWays[m] === 1) {
                    Maze[i - 1][j].Type = LabyrinthCellType_1["default"].EMPTY_CELL;
                    Maze[i][j].Type = LabyrinthCellType_1["default"].EMPTY_CELL;
                    break;
                }
                if (PossibleWays[m] === 2) {
                    Maze[i][j + 1].Type = LabyrinthCellType_1["default"].EMPTY_CELL;
                    Maze[i][j].Type = LabyrinthCellType_1["default"].EMPTY_CELL;
                    break;
                }
                if (PossibleWays[m] === 3) {
                    Maze[i][j - 1].Type = LabyrinthCellType_1["default"].EMPTY_CELL;
                    Maze[i][j].Type = LabyrinthCellType_1["default"].EMPTY_CELL;
                    break;
                }
            }
            return Maze;
        }
        var Labyrinth = [];
        var list = [];
        for (var i = 0; i < height; i++) {
            Labyrinth[i] = [];
            for (var j = 0; j < height; j++) {
                Labyrinth[i][j] = new LabyrinthCell_1["default"](j, i, LabyrinthCellType_1["default"].BORDER_CELL);
            }
        }
        var a = Math.floor(Math.random() * height);
        var b = Math.floor(Math.random() * width);
        list = FindPossibleDirection(Labyrinth, list, a, b);
        Labyrinth[a][b].Type = LabyrinthCellType_1["default"].EMPTY_CELL;
        for (var s = 0; s < Math.floor(Math.pow(Math.log(Math.sqrt(height * width)), 1.5) * Math.sqrt(height * width)); s++) {
            var k = Math.floor(Math.random() * list.length);
            var position = list[k];
            Labyrinth = CreateWay(Labyrinth, k, position);
        }
        return Labyrinth;
    };
    return LabyrinthGeneratorRepository;
}());
