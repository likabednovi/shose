const img1 = document.querySelector(".img1");
const section_div_div = document.querySelector(".section_div_div");
const minusi = document.querySelector(".minusi")
const item = document.querySelector(".item")
const pliusi = document.querySelector(".pliusi")
const btn2 = document.querySelector(".btn2")
const cart = document.querySelector(".cart")
const btns_shape = document.querySelector(".btns_shape")

let imgs = ["./photo/Rectangle.png","./photo/2.png","./photo/3.png","./photo/4.png"]

imgs.map((i,index) =>{
 
    let pataraImg= document.createElement("img")
    pataraImg.setAttribute("src",i)
    pataraImg.style.width = "88px"
    section_div_div.appendChild(pataraImg)

    pataraImg.addEventListener ("click", () =>{
        img1.attributes[0].value = i;
        console.dir(section_div_div.children)
        let y = [...section_div_div.children]
        y.forEach((i)=> (i.style.opacity="1"))
        let x = index
        pataraImg.style.opacity = x === index && "0.5"
        console.dir(y)
    })
})

pliusi.addEventListener("click", () =>{
    item.innerText = Number(item.innerText) + 1
  
})
minusi.addEventListener("click", () =>{
    if(item.innerText<1){
  item.innerText = item.innerText

    }else{
        item.innerText =Number(item.innerText) -1
    }
  
})

btn2.addEventListener("click", () =>{

    cart.innerText = item.innerText
})

