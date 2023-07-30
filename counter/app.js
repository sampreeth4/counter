let count = 0;


const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const list = e.currentTarget.classList;
        if(list.contains('increase')){
            count++;
        }
        else if(list.contains('decrease')){
            count--;
        }
        else if(list.contains('reset')){
            count = 0;
        }

        if(count>0){
            value.style.color = "green";
        }
        else if(count  === 0){
            value.style.color = "black";
        }
        else if(count<0){
            value.style.color = "red";
        }
        value.textContent=count;
    });
});
    
