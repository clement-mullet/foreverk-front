import { utilsHandler } from './utilsHandler';


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
                    menuHandler.scrollEvent(false);
                } else {
                    item.classList.add('active');
                    menuHandler.scrollEvent(true);
                } 
            });
        })

        setTimeout(() => {
            document.querySelector('.loader--state').style.left = "-100%";
        }, 5000);
        setTimeout(() => {
            menuHandler.scrollEvent(false);
        }, 3000);

    }

    static async scrollEvent(isActive) {
        switch (isActive) {
            case true:
                for (let index = 0; index < 2; index++) {
                    document.body.style.overflow = "hidden"; 
                    await utilsHandler.sleep(1000);                 
                }
                break;
        
            case false:
                for (let index = 0; index < 2; index++) {
                    document.body.style.overflow = "auto";
                    await utilsHandler.sleep(1000);                 
                }
                break;
        }
    }
}