window.addEventListener('DOMContentLoaded', () => {
    console.log(1)
    const bike = document.querySelector('.image');
    const button = document.querySelector(".bike_button");
    let timeAUT;
    button.addEventListener('click', function(){
        bike.classList.add('move');
        clearTimeout(timeAUT);
        timeAUT = setTimeout(function(){
            bike.classList.remove('move');
        },2000);
        
        
        
       
        // if (bike.classList.contains('move')){
        //     bike.classList.remove('move')
        // } else {
        //     bike.classList.add('move');
        // }
    })
    
    const arra = [];
    console.log("🚀 ~ window.addEventListener ~ arra:", arra)
    arra.concat([1,2,3]);
    console.log(arra);
})