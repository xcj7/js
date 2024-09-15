const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    console.log("calculate button clicked !")
    console.log(e)

    let height =  document.getElementById('height').value
    let weight =  parseInt(document.querySelector('#Weight').value)
    let results =  document.querySelector('#results')

    console.log(`height is ${height}`)
    console.log(`weight is ${weight}`)

    if(height === '' || height < 0 || isNaN(height))
    {
        results.innerHTML = "Please give a valid height ";
    }

    else if(weight === '' || weight < 0 || isNaN(weight))
        {
            results.innerHTML = "Please give a valid weight ";
        }

    else {
        let bmi = (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML=`<span>${bmi}</span>`;
    }
});
