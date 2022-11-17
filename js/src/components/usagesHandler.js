export class usagesHandler {
    static positionLine() {
        // let usageImages = document.querySelectorAll('.usage-img');
        // let imagesPositions = [];

        // usageImages.forEach(index => {
        //     imagesPositions.push(index.getBoundingClientRect())
        // });
        // console.log(imagesPositions);

        // let leftCricleXPos = imagesPositions[0].width + imagesPositions[0].x
        // let rightCircleXPos = imagesPositions[1].x;
        // let circleXDifference = rightCircleXPos - leftCricleXPos;
        // let positionX = (circleXDifference / 2);
        // console.log(positionX);

        // let leftCircleYPos = imagesPositions[0].height + imagesPositions[0].y
        // let rightCircleYPos  = imagesPositions[1].y;
        // let circleYDifference = rightCircleYPos - leftCircleYPos;
        // let positionY = (circleYDifference / 2);
        // console.log(positionY);

        // let leftCircleMiddle = imagesPositions[0].width + (imagesPositions[0].x / 2);
        // let rightCircleMiddle = (imagesPositions[0].width / 2) + imagesPositions[1].x;
        // let necessaryWidth = rightCircleMiddle - leftCircleMiddle;
        // console.log(necessaryWidth);


        let lines = document.querySelectorAll('.images-container');
        let images = document.querySelectorAll('.usage-img');

        let position, center, bottom, height, left, pythagore;
        lines.forEach((line, index) => {
            switch (index) {
                case 0:
                    center = (images[index].getBoundingClientRect().width / 2);
                    bottom = images[index].getBoundingClientRect().height;
                    height = (images[index + 1].getBoundingClientRect().top) - (images[index].getBoundingClientRect().bottom);
                    left = (images[index + 1].getBoundingClientRect().left + images[index + 1].getBoundingClientRect().width / 2) - (images[index].getBoundingClientRect().left + center);
                    pythagore = Math.hypot(height, left);
                    line.style.top = bottom + "px";
                    line.style.left = center + "px";
                    line.style.width = (pythagore + 10) + "px";
                    line.style.transform = "rotate(25deg)";

                    break;  
                case 1: 
                     
                    break; 
                case 2:
                     
                    break;   
            }
        });
    }
}