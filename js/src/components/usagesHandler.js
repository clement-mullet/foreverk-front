
export class usagesHandler {
    static positionLine() {
        let lines = document.querySelectorAll('.svg-lines line');
        let images = document.querySelectorAll('.usage-img');

        let totalHeight = window.document.documentElement.getBoundingClientRect().height;
        document.querySelector('.full-page-div').style.height = totalHeight + "px";

        usagesHandler.calculPosition(lines, images);
        var observer = new ResizeObserver(function(entries) {
            let totalHeight = window.document.documentElement.getBoundingClientRect().height;
            document.querySelector('.full-page-div').style.height = totalHeight + "px";
            usagesHandler.calculPosition(lines, images);
        })
        observer.observe(window.document.body);
        
    }

    static calculPosition(lines, images) {
        let position, center, bottom, height, left, pythagore;

        lines.forEach((line, index) => {
            center = (images[index].getBoundingClientRect().width / 2);
            bottom = images[index].getBoundingClientRect().height;
            height = (images[index + 1].getBoundingClientRect().top) - (images[index].getBoundingClientRect().top + window.scrollY);
            left = (images[index + 1].getBoundingClientRect().left + images[index + 1].getBoundingClientRect().width / 2) - (images[index].getBoundingClientRect().left + center);
            pythagore = Math.hypot(height, left);
            line.style.top = bottom + "px";
            line.style.left = center + "px";
            line.style.width = (pythagore + 20) + "px";

            line.setAttribute('x1', images[index].getBoundingClientRect().left + center);
            line.setAttribute('y1', images[index].getBoundingClientRect().bottom + window.scrollY);
            line.setAttribute('x2', images[index + 1].getBoundingClientRect().left + center);
            line.setAttribute('y2', images[index + 1].getBoundingClientRect().top + window.scrollY);
        });
    }
}