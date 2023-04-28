document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const poketype = document.querySelector('input').value
    try{
        if (poketype){
            const response = await fetch(`https://dark-erin-tadpole-belt.cyclic.app/api/${poketype}`)
            const data = await response.json()

            console.log(data)
            document.querySelector('#effective').innerText = data.effective
            document.querySelector('#ineffective').innerText = data.ineffective
            document.querySelector('#no-effect').innerText = data.noEffect
        } else {
            const response = await fetch(`https://dark-erin-tadpole-belt.cyclic.app/api/no%20input`)
            const data = await response.json()

            console.log(data)
            document.querySelector('#effective').innerText = data.effective
            document.querySelector('#ineffective').innerText = data.ineffective
            document.querySelector('#no-effect').innerText = data.noEffect
        }
    }catch(error){
        console.log(error)
    }
}