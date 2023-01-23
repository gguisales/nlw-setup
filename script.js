const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const buttom = document.querySelector('header button')

buttom.addEventListener('click', add)
form.addEventListener("change",save)

function add () {
    
    const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
        alert("dia ja incluso ❌")
        return
    }
    alert("adicionado com sucesso ✅")
    nlwSetup.addDay(today)
}
function save () {
    localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}


const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

nlwSetup.setData(data)                                                                   |          
nlwSetup.load()  

//----------------------------------------------------------------------------------------
/* const data = {                                                                        |
    run: ["01-01","01-02","01-03","01-05","01-07","01-09"],                              |
    water: ["01-01","01-02","01-03"],                                                    |
    training: ["01-10","01-12","01-11","01-16","01-15","01-20"]                          |
                                                                                         |
}                                                                                        |
nlwSetup.setData(data)                                                                   |          
nlwSetup.load()                                                                          |  */ 
//----------------------------------------------------------------------------------------