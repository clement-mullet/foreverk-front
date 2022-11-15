import anime from 'animejs/lib/anime.es.js';

export class eventHandler {


    // EVENT

    static eventRotate(position, wood, speed) {
        wood.style.transform = "rotate(" + (Math.abs(position.top) / speed) + "deg)";
    }

    static eventBreak(wood) {
        let breakpoints = document.querySelectorAll('.break');
        
        let positionTop, positionBottom, client, top, clientHeight, clientWidth, center, difference, element;
        breakpoints.forEach(breakpoint => {

            // POSITION TOP CURRENT BREAKPOINT
            positionTop = eventHandler.getAbsolutePositionYTop(breakpoint.id);
            // POSITION BOTTOM CURRENT BREAKPOINT
            positionBottom = eventHandler.getAbsolutePositionYBottom(breakpoint.id);
            // GET REACT INFO CLIENT
            client = eventHandler.getPositionClient();
            // GET TOP CLIENT
            top = Math.abs(client.top);
            // GET CURRENT ELEMENT TARGET
            element = document.getElementById(breakpoint.id);
            // GET CLIENT HEIGHT
            clientHeight = eventHandler.getClientHeight();
            // GET CLIENT WIDTH
            clientWidth = eventHandler.getClientWidth();

            switch (breakpoint.id) {
                case "width":
                    if(top >= positionTop && top <= (positionBottom + 800)) {
                        let transition = (top - positionTop) / 10;
                        wood.style.width = (transition + 150) + "px";
                        wood.style.height = (transition + 150) + "px";
                        break;
                    }
                    break;
                case "cloud":
                    let clouds = document.querySelectorAll('.clouds__cloud');
                    if(top >= (positionTop - 800) && top <= positionBottom) {
                        let transition = top - (positionTop - 800);

                        clouds.forEach(cloud => {
                            let speed = (cloud.dataset.speed * 2);
                            if(speed != undefined) {
                                cloud.style.transform = `
                                matrix3d(
                                    1, 0, 0, 0,
                                    0, 1, 0, 0,
                                    0, 0, 1, 0,
                                    0, ${-Math.abs(transition / speed)}, 0, 1
                                )`;

                            }
                        });
                    }

                    break;
                case "cloud-paulownia":
                    

                    break;
                case "opacity":
 
                    switch (true) {
                        case ((top + clientHeight) >= (positionTop) && (top + clientHeight) <= positionBottom):
                            let transition = (top + clientHeight) - positionTop;
                            wood.style.opacity = 1 - (transition / 450);
                            break; 
                        case ((top + clientHeight) <= (positionTop)):
                            wood.style.opacity = 1;
                            break;
                        case ((top + clientHeight) >= (positionBottom) && (top + clientHeight) <= (positionBottom + 800)):
                            wood.style.opacity = 0;
                            break;
                    }
                    break;
                case "numbers":
                    let numbers =  document.querySelectorAll('.numbers p i');
                    if(((top + clientHeight)) >= (positionTop + (clientHeight / 6))) {
                        // FIX STATUS
                        element.classList.remove('break');
                        
                        numbers.forEach((number, index) => {
                            anime({
                                targets: numbers[index],
                                innerHTML: [0, 80],
                                duration: 5000,
                                easing: 'easeInOutSine',
                                round: 1,
                            })
                        });
                    }
                    break;
                case "wood-plate":
                    switch (true) {
                        case (((top + clientHeight)) >= (positionTop + (clientHeight / 3)) && (top + clientHeight) <= positionBottom + 600):
                            let transition = (top - positionTop) / 4;
                            wood.style.width = (300 - transition) + "px";
                            wood.style.height = (300 - transition) + "px";
                            wood.style.backgroundImage = "url('wp-content/themes/pulsar-theme/assets/content/wood-plate.png')";
                            wood.style.opacity = 1;
                            break;
                        case ((top + clientHeight) >= (positionTop - 800) && (top + clientHeight) <= (positionTop)):
                            wood.style.backgroundImage = "url('wp-content/themes/pulsar-theme/assets/svg/wood.svg')";
                            wood.style.opacity = 0;
                            break;
                    }

                    break;
                case "line-wood":
                    switch (true) {
                        case (((top + clientHeight)) >= (positionTop + 800) && (top + clientHeight) <= positionBottom):
                            let woods = document.querySelectorAll('.forest-element');
                            let firstLines = document.querySelectorAll('.first-line');
                            let secondLines = document.querySelectorAll('.second-line');
                            let paragraphes = document.querySelectorAll(".wood-content-line > div p");
                            let clouds = document.querySelectorAll('.clouds__cloud-paulownia');

                            // FIX STATUS
                            element.classList.remove('break');

                            // ANIME BLOC LINE AND TEXT
                            woods.forEach(wood => {wood.classList.add('active');});
                            setTimeout(() => {firstLines.forEach((line, index) => {line.classList.add('active');});}, "1000")
                            setTimeout(() => {secondLines.forEach((line, index) => {line.classList.add('active');});}, "1500")
                            setTimeout(() => {paragraphes.forEach((p, index) => {p.classList.add('active');});}, "2000")

                            let transition = top - (positionTop - 800);
                            clouds.forEach(cloud => {
                                let speed = (cloud.dataset.speed * 2);
                                if(speed != undefined) {
                                    cloud.style.transform = `
                                    matrix3d(
                                        1, 0, 0, 0,
                                        0, 1, 0, 0,
                                        0, 0, 1, 0,
                                        0, ${-Math.abs(transition / speed)}, 0, 1
                                    )`;

                                }
                            });

                            break;
                    }
                    break;
            }
        });
    }

    static eventScroll() {
        let wood = document.querySelector('.wood');
        let sections = eventHandler.getSections();
        

        window.addEventListener('scroll', function(e) {
            let position = eventHandler.getPositionClient();
            let top = Math.abs(position.top);

            // EVENT ROTATE EVERY TIME
            eventHandler.eventRotate(position, wood, 6);

            // EVENT BREAKPOINT PAGE
            eventHandler.eventBreak(wood);

        })
    }

    // GETTER
    static getPositionClient() {
        return document.documentElement.getBoundingClientRect();
    }

    static getClientHeight() {
        return document.documentElement.clientHeight;
    }

    static getClientWidth() {
        return document.documentElement.clientWidth;
    }


    static getAbsolutePositionYTop(el) {
        return (document.getElementById(el).getBoundingClientRect().top + document.documentElement.scrollTop) - 1;
    }
    
    static getAbsolutePositionYBottom(el) {
        return (document.getElementById(el).getBoundingClientRect().bottom + document.documentElement.scrollTop) - 1;
    }

    static getSections() {
        let sections = document.querySelectorAll('.elementor-widget-container section');
        return sections;
    }

    static initEvent() {
        window.scrollTo(0, 0);
        eventHandler.eventScroll();
    }
}