function search(){
    let filter = document.getElementById('find').value.toLowerCase();

    let item = document.querySelectorAll('.product');

    let title= document.getElementsByTagName('h3');
    
    for (var i = 0; i<=title.length; i++) {
        let allElements= item[i].getElementsByTagName('h3')[0];

        let value= allElements.innerHTML || allElements.innerText || allElements.textContent;

        if (value.toUpperCase().indexOf(filter)>-1){
            item[i].style.display="initial";
        }

        else{
            item[i].style.display="none";
        }
    }
   
}


