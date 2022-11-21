
export class usagesHandler {
    static positionLine() {
        let lines = document.querySelectorAll('.images-container');
        let images = document.querySelectorAll('.usage-img');

        usagesHandler.calculPosition(lines, images);
        var observer = new ResizeObserver(function(entries) {
            usagesHandler.calculPosition(lines, images);
        })



        observer.observe(window.document.body);
        
    }

    static calculPosition(lines, images) {
        let position, center, bottom, height, left, pythagore;

        lines.forEach((line, index) => {
            center = (images[index].getBoundingClientRect().width / 2);
            bottom = images[index].getBoundingClientRect().height;
            height = (images[index + 1].getBoundingClientRect().top) - (images[index].getBoundingClientRect().bottom);
            left = (images[index + 1].getBoundingClientRect().left + images[index + 1].getBoundingClientRect().width / 2) - (images[index].getBoundingClientRect().left + center);
            pythagore = Math.hypot(height, left);
            line.style.top = bottom + "px";
            line.style.left = center + "px";
            line.style.width = (pythagore + 20) + "px";
            switch (index) {
                case 0:
                case 2:
                    line.style.transform = "rotate(26deg)";
                    break;  
                case 1: 
                    line.style.transform = "rotate(148deg)";
                    break;
            }
        });
    }
}