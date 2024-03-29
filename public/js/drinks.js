const drink = document.querySelector('#search').addEventListener('click', apiRequest)

async function apiRequest(){
    const drinkName =  document.querySelector('#drink').value
    try{
        const response  = await fetch(`https://honeydew-api.onrender.com/api/${drinkName}`)
        const data = await response.json()
        console.log(data)
        document.getElementById('drinkName').innerHTML = data.name
        document.getElementById('drinkType').innerText = data.drinkType
        document.getElementById('drinkIngredients').innerText = data.ingredients
        document.getElementById('drinkBenefits').innerText = data.benefits
        document.getElementById('drinkPicture').src = data.src
        

    } catch(error) {
        console.log(error)
    }
}
