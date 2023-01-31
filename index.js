


function resetColors(){
    let whiteSquares = document.getElementsByClassName("white")
    let blackSquares = document.getElementsByClassName("black")
    for (let i = 0; i < whiteSquares.length; i++) {
        whiteSquares[i].style.backgroundColor = "#E26D5A"
        blackSquares[i].style.backgroundColor = "#3E2A35"
    }
}





function test(){
    resetColors()
    let row = arguments[0]
    let col = arguments[1]
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
    
    for (let i = 0 ; 1  < 9 ; i++){
        console.log(i)
        console.log(possibleSquares[i])
        document.getElementById(possibleSquares[i]).style.backgroundColor = "green"
    }
    
}



