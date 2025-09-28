
const proList = document.getElementById('pro')
const pros = []
const parentsListPros = []
let amountPro = 0

const conList = document.getElementById('con')
const cons = []
const parentsListCons =[]
let amountCon = 0

const info = document.getElementById('info')
info.addEventListener('mouseover', spawnInfo)
info.addEventListener('mouseout', removeInfo)
let infoBox, listInfo, argInfo, wInfo, calcInfo //short for calculator

function spawnInfo(){
    infoBox = document.createElement('span')
    infoBox.style.position = 'absolute'
    infoBox.style.right = '75px'
    infoBox.style.top = '60px'
    infoBox.style.backgroundColor = 'pink'
    infoBox.style.paddingRight = '10px'
    infoBox.style.borderRadius = '10px'
    infoBox.style.border = 'solid black 2px'
    document.body.appendChild(infoBox)

    listInfo = document.createElement('ul')
    infoBox.appendChild(listInfo)

    argInfo = document.createElement('li')
    argInfo.innerHTML = 'Argument - Enter the pro / con'
    
    wInfo = document.createElement('li')
    wInfo.innerHTML = 'Weight - How much does this pro / con matter'

    calcInfo = document.createElement('li') //short for calculator
    calcInfo.innerHTML = 'Calculate Your Fate - Use my ProConinator 3000™©® to accurately compute the correct choice (~90% margin of error)'

    listInfo.appendChild(argInfo)
    listInfo.appendChild(wInfo)
    listInfo.appendChild(calcInfo)
}

function removeInfo(){
    listInfo.removeChild(argInfo)
    listInfo.removeChild(wInfo)
    listInfo.removeChild(calcInfo)
    infoBox.removeChild(listInfo)
    document.body.removeChild(infoBox)
}

function deletePro(){
    console.log("YOOOO")
    pros.pop()
    proList.removeChild(parentsListPros[parentsListPros.length -1])
    parentsListPros.pop()
    amountPro--

}
function newPro(){
    amountPro++

    

    let newPro = document.createElement('div')
    newPro.style.display = 'flex'
    proList.appendChild(newPro)
    parentsListPros.push(newPro)

    let newNumber = document.createElement('div')
    newNumber.style.width = '15px'
    newNumber.style.paddingLeft = '2px'
    newNumber.innerHTML = amountPro + '.'
    newPro.appendChild(newNumber)

    let newInput = document.createElement('input')
    newInput.style.flexGrow = '1.1'
    newPro.appendChild(newInput)
    

    let newWeight = document.createElement('input')
    newWeight.type = 'number'
    newWeight.style.width = '50px'
    newPro.appendChild(newWeight)
    pros.push(newWeight)

    /*
    let newTrash = document.createElement('button')
    newTrash.innerHTML = 'Delete'
    newTrash.onclick = deleteArgument
    newTrash.id = amountPro
    newTrash.style.width = '80px'
    newPro.appendChild(newTrash)
    */

    console.log(pros[0].value)    
}

function newCon(){
    amountCon++

    

    let newCon = document.createElement('div')
    newCon.style.display = 'flex'
    conList.appendChild(newCon)
    parentsListCons.push(newCon)

    let newNumber = document.createElement('div')
    newNumber.style.width = '15px'
    newNumber.style.paddingLeft = '2px'
    newNumber.innerHTML = amountCon + '.'
    newCon.appendChild(newNumber)

    let newInput = document.createElement('input')
    newInput.style.flexGrow = '1.1'
    newCon.appendChild(newInput)
    

    let newWeight = document.createElement('input')
    newWeight.type = 'number'
    newWeight.style.width = '50px'
    newCon.appendChild(newWeight)
    cons.push(newWeight)

    /*
    let newTrash = document.createElement('button')
    newTrash.innerHTML = 'Delete'
    newTrash.onclick = deleteArgument
    newTrash.id = amountPro
    newTrash.style.width = '80px'
    newCon.appendChild(newTrash)
    */

    console.log(pros[0].value)    
}
function deleteCon(){
    console.log("YOOOO")
    cons.pop()
    conList.removeChild(parentsListCons[parentsListCons.length -1])
    parentsListCons.pop()
    amountCon--

}

function calculateFate(){
    let proFate = 0
    for(let i=0; i<pros.length; i++){
        if(!Number.isNaN(pros[i].valueAsNumber)){
            proFate += pros[i].valueAsNumber
        }
        
    }

    let conFate = 0
    for(let i=0; i<cons.length; i++){
        if(!Number.isNaN(cons[i].valueAsNumber)){
            conFate += cons[i].valueAsNumber
        }
    }

    console.log("Pro Total: "+proFate)
    console.log("Con Total: "+conFate )

    let results = "CON"
    let tagline = 0

    if(proFate-conFate>0){
        results = "PRO"
    }
    let totalWeight = conFate+proFate
    let proPercent = Math.round((proFate/totalWeight) * 100)
    let conPercent = Math.round((conFate/totalWeight) * 100)
    console.log(proFate/totalWeight)

    console.log(proPercent)
    let proTitle = document.getElementById('proTitle')
    if(proPercent === 1){
        proTitle.innerHTML = "PROS - "+proFate+" (100%)"
    }else{
        proTitle.innerHTML = "PROS - "+proFate+" ("+proPercent+"%)"
    }

    let conTitle = document.getElementById('conTitle')
    if(conPercent === 1){
        conTitle.innerHTML = "CONS - "+conFate+" (100%)"
    }else{
        conTitle.innerHTML = "CONS - "+conFate+" ("+conPercent+"%)"
    }

    
    


    let minRand = 0
    let maxRand = 10
    const minCeiled = Math.ceil(minRand)
    const maxFloored = Math.floor(maxRand)
    tagline = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)

    switch(tagline){
        case 0:
            alert("My gut says go with "+results+".")
            break;
        case 1:
            alert("Choose "+results+". It's kind of a no brainer.") 
            break;
        case 2:
            alert("The numbers say "+results+" is the obvious choice. Numbers don't lie.")
            break;
        case 3:
            if(results === "PRO")
                alert("The numbers say CON is the obvious choice. Numbers tend to lie.")
            else
                alert("The numbers say PRO is the obvious choice. Numbers tend to lie.")
            break;
        case 4:
            alert("Do you really want a computer making this choice for you? Yes? Really? Fine. "+results+".")
            break;
        case 5:
            alert("My extremely advanced algorithm says you should pick "+results+".")
            break;
        case 6:
            alert("I really shouldn't weigh in on this. ("+results+").")
            break;
        case 7:
            alert(results)
            break;
        case 8:
            alert("Enthusiastically throw yourself towards "+results+" without hesitation or prior thought.")
            break;
        case 9:
            alert("Choose "+results+".")
            break;
        case 10:
            if(results==="PRO")
                alert("Choose PRO. No CON. Wait, choose PRO. No CON is the right choice. Wait No.")
            else{
                alert("Choose CON. No PRO. Wait, choose CON. No PRO is the right choice. Wait No.")
            }
            break;
    }


}