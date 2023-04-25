function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


let div = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
let arr = new Array()
arr[0] = "#cdc1b4"
arr[2] = "#eee4da"
arr[4] = "#ede0c8"
arr[8] = "#f2b179"
arr[16] = "#f59563"
arr[32] = "#f67c5f"
arr[64] = "#f65e3b"
      
let table = document.querySelector('#table');
let win = document.querySelector('#win')
function show_table()
{
    table.innerHTML = ' '
    for (let subArr of div) {
	let tr = document.createElement('tr');
	
	for (let elem of subArr) {
		let td = document.createElement('td');
		if(elem === 0)td.textContent = null;
        else td.textContent = elem
        if(elem < 128)td.style.backgroundColor = arr[elem]
        else td.style.backgroundColor = "#edcf72"
        if(elem < 5)    td.style.color = "#776e65"
        else td.style.color = "#f9f6f2"
		tr.appendChild(td);
	}
    table.appendChild(tr);
    }
}
show_table()
let score = 0
scoreHtml = document.querySelector('#score')
scoreHtml.textContent = `очки : ${score}`
function rand(){
    let x = getRandomInt(4)
    let y = getRandomInt(4)
    let i = 0
    while(1)
    {
        if(div[y][x] === 0)
        {
            div[y][x] = 2
            break
        }
        if(i == 10)break
        x = getRandomInt(4)
        y = getRandomInt(4)
        i++
    }
}

function right() {
    for (let y = 0; y < div.length; y++) {
      for (let x = 3; x > -1; x--) {
          for (let i = x; i < div.length; i++) {
            let it = i+1
          if(it > -1 && it < div.length)
            {
          if(div[y][i])
          {
          if(div[y][it] === 0)
          {
           div[y][it] = div[y][i]
           div[y][i] = 0
          }
          if(div[y][it] === div[y][i])
          {
            div[y][it] *= 2
            div[y][i] = 0
            score += div[y][it]
          }
          }
            }
            }
          
        }
      }
      show_table()
    }
  
  
  function down() {
    for (let y = 3; y > -1; y--) {
      for (let x = 0; x < div.length; x++) {
          for (let i = y; i < div.length; i++) {
            let it = i + 1
            if (it > -1 && it < 4) {
              if(div[i][x])
              {
              if (div[it][x] === 0) {
                div[it][x] = div[i][x] 
                div[i][x] = 0
              }
              if(div[i][x] === div[it][x]) {
                div[it][x] *= 2
                div[i][x] = 0
                score += div[y][it]
              }
              }
            }
          }
      }
    }
    show_table()
  }
  
  async function Up() {
    for (let y = 0; y < div.length; y++) {
      for (let x = 0; x < div.length; x++) {
          for (let i = y; i > -1; i--) {
            let it = i - 1
            if (it > -1 && it < 4) {
              if(div[i][x])
              {
              if (div[it][x] === 0) {
                div[it][x] = div[i][x] 
                div[i][x] = 0
              }
              if(div[i][x] === div[it][x]) {
                div[it][x] *= 2
                div[i][x] = 0
                score += div[y][it]
              }
              }
            }
          }
      }
    }
    show_table()
  }
  
function Left() {
    for (let y = 0; y < div.length; y++) {
      for (let x = 0; x < div.length; x++) {
          for (let i = x; i > -1; i--) {
            let it = i - 1
            if(it > -1 && it < div.length)
            {
          if(div[y][i])
          {
          if(div[y][it] === 0)
          {
           div[y][it] = div[y][i]
           div[y][i] = 0
          }
          if(div[y][it] === div[y][i])
          {
            div[y][it] *= 2
            div[y][i] = 0
            score += div[y][it]
          }
          }
            }
          }
      }
    }
    show_table()
}
let p = 0
function check()
{
    if(p)   return  
    div.forEach(elem => elem.forEach(elem1 => elem1 === 2048? win.style.display = "inline":'')) 
    if(win.style.display == "inline")   p++
}
document.querySelector("#btn").onclick = function()
{
    win.style.display = "none   "
}
function moveRect(e){    
    switch(e.key){
        case "ArrowLeft":  
            Left()
            scoreHtml.textContent = `очки : ${score}`
            rand()
            check()
            break;
        case "ArrowUp": 
            Up()
            scoreHtml.textContent = `очки : ${score}`
            rand()
            check()
            break;
        case "ArrowRight":   
            right()
            scoreHtml.textContent = `очки : ${score}`
            rand()
            check()
            break;
        case "ArrowDown":
            down()
            scoreHtml.textContent = `очки : ${score}`
            rand()
            check()
            break;
    }
    
}
 
addEventListener("keydown", moveRect)