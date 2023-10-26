const main =  document.querySelector("main")
const container = document.querySelector(".tarot-container")
const info = document.querySelector(".tarot-info")
console.log(data)

const handleInfo = (_, id ,isChange=false)=>{
    if(isChange) createInfo(info, id, data)
    info.classList.toggle('active')
}
const createTarotCard=(container, id, isReverse)=>{
    let new_card = document.createElement('div')
    new_card.classList.add("tarot-card")
    if(isReverse) new_card.classList.add("reverse")

    new_card.innerHTML =`<div class="front" style='background-image: url(../images/${id}.jpg)'></div>
                        <div class="back"></div>
                        <button class="info-btn" onclick="handleInfo(this,${id},true)">check it</button>
                        `
    new_card.addEventListener("click", e=>{
        e.target.classList.toggle("active")
    })
    container.appendChild(new_card)
}
const createInfo =(container, id, data)=>{
    const tarot = data[id]
    let content =  `<div class="tarot-info-header">
                        <div class="tarot-info-img" style='background-image: url(../images/${id}.jpg)'></div>
                        <h2>${tarot.name}</h2>
                    </div>
                    <div class="tarot-info-content">
                        <div>
                            <h2>過去</h2>
                            <p>${tarot.past}</p>
                        </div>
                        <hr>
                        <div>
                            <h2>現在</h2>
                            <p>${tarot.present}</p>
                        </div>
                        <hr>
                        <div>
                            <h2>未來</h2>
                            <p>${tarot.future}</p>
                        </div>
                    </div>
                    <button class="close-btn" onclick="handleInfo()">↩︎</button>`
    console.log(content)
    container.innerHTML = content
}

const getRandomIntMult = (min, max ,n)=>{
    let result = []
    let range = max - min + 1
    let index = Array(range).fill(0).map((_, i) => min + i)
    
    while(result.length<n){
        const new_random = Math.floor(Math.random()*range)
        const new_n = index.splice(new_random, 1)[0]
        result.push(new_n)
        range--
    }
    return result
}

const initialTarot=()=>{
    const cards = getRandomIntMult(0, 21, 3) 
    cards.forEach(id=>{
        createTarotCard(container, id, Math.random()>0.5)
    })
}

initialTarot()









