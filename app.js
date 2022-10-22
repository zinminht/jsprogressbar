var getprogressbar = document.querySelector('.progress-bar'),
    getdownloadbtn = document.querySelector('.download-btn'),
    seturl = "https://coursera.org"


getdownloadbtn.addEventListener('click',function(){
    // console.log('hi'); 

    // getdownloadbtn.disabled = true;
    getdownloadbtn.setAttribute('disabled',true);

    var setwidth = 0;

    var setinv = setInterval(progressinc,100);

    function progressinc(){

        if(setwidth >= 100){
            clearInterval(setinv);
            setwidth = 0;

            window.location.href = seturl;
        }else{
            setwidth++;

            getprogressbar.style.width = `${setwidth}%`;
            getprogressbar.setAttribute('data-inc',`${setwidth}%`);
        }

    }

});


