let title = document.getElementsByClassName('accordeon-title')
let cont = document.getElementsByClassName('accordeon-cont')

for (let index = 0; index < title.length; index++) {
    title[index].addEventListener('click', function() {
        if (!(this.classList.contains('active'))) {
            for (let index = 0; index < title.length; index++) {
                title[index].classList.remove('active')
            }
            this.classList.add('active')
        }
    })
}