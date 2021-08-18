let accordion = document.getElementsByClassName('open_img');
for (i = 0; i<accordion.length; i++ ){
    accordion[i].addEventListener('click', function () {
    this.parentElement.nextElementSibling.classList.toggle("none");
    this.classList.toggle("active_acc_img")
        // this.document.getElementsByClassName('accordion_hidden').classList.toggle('none');
    })
}