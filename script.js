let arrayData = [1]
document.addEventListener("DOMContentLoaded", async() => {
   // console.log("pagina caricata")
   //console.log(arrayData)
   const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    arrayData = data
    
    return data 
   }

await getData().then((risultati )=>{
    //console.log(risultati)
    for (r of risultati){
        //console.log(r)
        let container = document.getElementById('tbody')
        let tr = document.createElement("tr")
        let td = document.createElement("td")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        td.innerHTML = r.name
        td1.innerHTML = r.username
        td2.innerHTML = r.email
        tr.appendChild(td)
        tr.appendChild(td1)
        tr.appendChild(td2)
        container.appendChild(tr)
        
        /*Object.keys(r).forEach(function(key, y){ //prendo la key e l'indice della key
            console.log(key,y)
        })*/   
    }
    
})

})

function filtro(){
    let container = document.getElementById('tbody')
    container.innerHTML=""
    
    let input = document.querySelector(".input").value.toLowerCase()
    //console.log(input)
    let option = document.querySelector("select").value.toLowerCase()
    //console.log(option)
    //console.log(arrayData)
    for (a of arrayData){
        let name = a.name.toLowerCase()
        let username = a.username.toLowerCase()
        let email = a.email.toLowerCase()
        let ricerca = ""
        if(option === "name"){
            ricerca =name
        }else if(option === "username"){
            ricerca = username
        }else if(option=== "email"){
            ricerca = email
        }
        if (ricerca.includes(input)){
            let tr = document.createElement("tr")
            let td = document.createElement("td")
            let td1 = document.createElement("td")
            let td2 = document.createElement("td")
            td.innerHTML =  a.name
            td1.innerHTML = a.username
            td2.innerHTML = a.email
            tr.appendChild(td)
            tr.appendChild(td1)
            tr.appendChild(td2)
            container.appendChild(tr)
        }
    }
}


