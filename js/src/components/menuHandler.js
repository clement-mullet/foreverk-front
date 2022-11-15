export class menuHandler {
    static eventMenu() {
        let items = [
            document.querySelector('.menu-burger'),
            document.querySelector('.header-background-fixed img'),
            document.querySelector('.header-cross')
        ]

        items[2].addEventListener('click', function() {
            items.forEach(item => {
                if (items[2].classList.contains('active')) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                } 
            });
        })
    }
}