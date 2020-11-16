let nightMode = document.querySelector('#dark-mode');
let mode = false;
nightMode.addEventListener('click', function(){
    if (mode == false){
        mode = true;
        document.querySelector('#text').style.color = '#fff';
        document.querySelector('#text2').style.color = '#fff'; 
        document.querySelector('#text3').style.color = '#fff';
        document.querySelector('body').style.background = '#345356';
        document.querySelector('#header1').style.color = '#fff';
        document.querySelector('#header2').style.color = '#fff';
        document.querySelector('#header3').style.color = '#fff';
    }
    else {
        mode = false;
        document.querySelector('#text').style.color = '#000';
        document.querySelector('#text2').style.color = '#000';  
        document.querySelector('#text3').style.color = '#000';
        document.querySelector('body').style.background = '#fff';
        document.querySelector('#header1').style.color = '#000';
        document.querySelector('#header2').style.color = '#000';
        document.querySelector('#header3').style.color = '#000';
    }


    }
);