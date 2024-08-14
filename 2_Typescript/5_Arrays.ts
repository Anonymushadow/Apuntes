let lenguajes: string[] = ["Python", "Javascript", "C"];
let lenguajes2: Array<string> = ["Python", "Javascript", "C"];

lenguajes.push("Java");
lenguajes2.push("C#");


//Arrays mixtos
const booleanos: (boolean | number)[] = [0, 1, 1, true, 1, true, false]; 

//matrices

/*
[
    ["x", "0", "x"],
    ["0", "x", "0"],
    ["x", "0", ""]
]
*/

//creamos un valor para cada celda
type CellValue = "0" | "x" | "";

//creamos una tupla, donde cada elemento sera del tipo CellValue
type gameboard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

//creamos un tablero con la estructura del gameboard
const TicTacToe: gameboard = [
    ["x", "0", "x"],
    ["0", "x", "0"],
    ["x", "0", ""]
];