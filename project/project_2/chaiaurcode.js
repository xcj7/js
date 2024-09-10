const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    console.log("calculate button clicked !")
    console.log(e)

    // let height =  document.getElementById('height').value
    // let weight =  parseInt(document.querySelector('#weight').value)
    // let results =  document.querySelector('#results').value

    // console.log(`height is ${height}`)

    // if(height === '' || height < 0 || isNaN(height))
    // {
    //     results.innerHTML = "Please give a valid height ";
    // }
});
