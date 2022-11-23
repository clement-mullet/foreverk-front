import { generalHandler } from './components/generalHandler';
import { eventHandler } from './components/eventHandler';
import { animationHandler } from './components/animationHandler';
import { menuHandler } from './components/menuHandler';
import { usagesHandler } from './components/usagesHandler';
import { sliderHandler } from './components/sliderHandler';
import {impactHandler} from './components/impactHandler'
import { utilsHandler } from './components/utilsHandler';

document.addEventListener('readystatechange', function(event) {
  switch (document.readyState) {
    case "loading":
      
      break;
      case "interactive":
        utilsHandler.scrollTop();
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
            case "/le-projet-forever-k/":
              impactHandler.switchTabs();
              eventHandler.initEvent();

              break;
            default: 
              console.log('Route not found');
              break;
          case "/les-principaux-usages/":
            usagesHandler.positionLine();
            break;
          case "/le-projet-forever-k/":
            impactHandler.switchTabs();
            eventHandler.initEvent();

            break;

          case "/le-rallye/":
            animationHandler.getCenterTitle();
            break;
          default: 
            console.log('Route not found');
            break;
      }
      break;
  }
})