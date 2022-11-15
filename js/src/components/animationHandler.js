export class animationHandler {
    static getCenterTitle() {
        let width = 0;
        let gap = 180;
        let firstTitle = document.querySelector('.frame-transition div:nth-child(3)').getBoundingClientRect();
        let lastTitle = document.querySelector('.frame-transition div:nth-child(7)').getBoundingClientRect();
        let positionClient = document.documentElement.clientWidth;
        let domReact = document.documentElement;
        let container = document.querySelector('.frame-transition');
        let divs = document.querySelectorAll('.frame-transition > div');
        
        let firstCenter = (positionClient/2) - (firstTitle.x + (firstTitle.width/2));
        let lastCenter = (positionClient/2) - (lastTitle.x + (lastTitle.width/2));
        let center = lastCenter - firstCenter;


        divs.forEach(div => {
            width += div.getBoundingClientRect().width;
        });
        
        domReact.style.setProperty('--center', + (center) + 'px');
        container.style.left = (firstCenter) + "px";
        container.style.width = (width + gap) + "px";
        container.style.maxWidth = (width + gap) + "px";
        // animationHandler.changeCenterColor();
    }

    static changeCenterColor() {
        // let screenCenter = document.documentElement.clientWidth / 2;
        // let divs = document.querySelectorAll('.frame-transition > div h2');

        // for (let index = 0; index < 1000; index++) {
        //     setTimeout(() => {
        //         let updateDivs = document.querySelectorAll('.frame-transition > div h2');
        //         divs.forEach((div, index) => {
        //             console.log(updateDivs[index].getBoundingClientRect().x);
        //             if(div.getBoundingClientRect.x == screenCenter) {
        //                 div.classList.add('active');
        //             }
        //         });
        //     }, 1000)
        // }
    }
}