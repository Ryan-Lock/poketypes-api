document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const poketype = document.querySelector('input').value
    try{
        const response = await fetch(`https://dark-erin-tadpole-belt.cyclic.app/api/${poketype}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('#effective').innerText = data.effective
    }catch(error){
        console.log(error)
    }
}