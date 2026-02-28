// document.getElementById('#btn').addEventListener('click', function(event){
    
// })

// addEventListener('click', function(event){})


function sttleLife(name, isBCS, marriage, patri){
    if(isBCS){
        marriage(patri);
    }
}

function bolokobul (patri){
    console.log('kobul', patri);
}

sttleLife('Tomal', true, bolokobul, 'Nari');

// bolokobul('Pori');