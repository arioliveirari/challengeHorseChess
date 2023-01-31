


function resetColors(){
    let whiteSquares = document.getElementsByClassName("white")
    let blackSquares = document.getElementsByClassName("black")
    let chessBtnReset = document.getElementsByClassName("chessBtn")
    for (let i = 0; i < whiteSquares.length; i++) {
        whiteSquares[i].style.backgroundColor = "#E26D5A"
        blackSquares[i].style.backgroundColor = "#3E2A35"
    }
    for (let i = 0; i < chessBtnReset.length; i++) {
        chessBtnReset[i].style.opacity = 0
} }





function squareChose(){
    resetColors()
    
    let row = arguments[0]
    let col = arguments[1]
    document.getElementById(String(row)+String(col)).getElementsByClassName("chessBtn")[0].style.backgroundImage = "url(images/horse.gif)"
    document.getElementById(String(row)+String(col)).getElementsByClassName("chessBtn")[0].style.backgroundColor = "inherit"
    document.getElementById(String(row)+String(col)).getElementsByClassName("chessBtn")[0].style.opacity = 1
    document.getElementById(String(row)+String(col)).getElementsByClassName("chessBtn")[0].style.backgroundSize = "cover"
    console.log(row)
    console.log(col)

    let right2Up1   = String(row + 1) + String(col + 2)
    let right2Down1 = String(row - 1) + String(col + 2)
    let right1Up2   = String(row + 2) + String(col + 1) 
    let right1Down2 = String(row - 2) + String(col + 1)
    let left1Down2  = String(row - 2) + String(col - 1)
    let left1Up2    = String(row + 2) + String(col - 1)
    let left2Up1    = String(row + 1) + String(col - 2)
    let left2Down1  = String(row - 1) + String(col - 2)
    
    let possibleSquares = [
        right2Up1       ,
        right2Down1     ,
        right1Up2       ,
        right1Down2     ,
        left1Down2      ,
        left1Up2        ,
        left2Up1        ,
        left2Down1      ,
    ]
    
    for (let i = 0 ; i  < 8 ; i++){
        if(
            10 < +possibleSquares[i] && +possibleSquares[i] < 19 ||
            20 < +possibleSquares[i] && +possibleSquares[i] < 29 ||
            30 < +possibleSquares[i] && +possibleSquares[i] < 39 ||
            40 < +possibleSquares[i] && +possibleSquares[i] < 49 ||
            50 < +possibleSquares[i] && +possibleSquares[i] < 59 ||
            60 < +possibleSquares[i] && +possibleSquares[i] < 69 ||
            70 < +possibleSquares[i] && +possibleSquares[i] < 79 ||
            80 < +possibleSquares[i] && +possibleSquares[i] < 89 
        ){
            console.log(possibleSquares[i])
            document.getElementById(possibleSquares[i]).style.backgroundColor = "green"
        } else {
            
        }
    }
    
}



