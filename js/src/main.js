import { generalHandler } from './components/generalHandler';
import { eventHandler } from './components/eventHandler';
import { animationHandler } from './components/animationHandler';
import { swiperHandler } from './components/swiperHandler';
import { menuHandler } from './components/menuHandler';
import { usagesHandler } from './components/usagesHandler';
import { sliderHandler } from './components/sliderHandler';

document.addEventListener('readystatechange', event => {
  menuHandler.eventMenu();
  switch (document.readyState) {
    case "loading":

      break;
    case "interactive":

      break;
    case "complete":
      menuHandler.eventMenu();
      switch (location.pathname) {
          case "/":
              eventHandler.initEvent();
              break;
          case "/notre-vision/":
              animationHandler.getCenterTitle();
              swiperHandler.founder();
              sliderHandler.displayDescription();
              break;
          case "/les-principaux-usages/":
            usagesHandler.positionLine();
            break;
          default: 
            console.log('Route not found');
            break;
      }
      break;
  }
})