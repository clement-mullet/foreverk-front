import { generalHandler } from './components/generalHandler';
import { eventHandler } from './components/eventHandler';
import { animationHandler } from './components/animationHandler';
import { swiperHandler } from './components/swiperHandler';
import { menuHandler } from './components/menuHandler';

document.addEventListener('readystatechange', event => {
  menuHandler.eventMenu();
  switch (document.readyState) {
    case "loading":

      break;
    case "interactive":

      break;
    case "complete":
      switch (location.pathname) {
          case "/":
              eventHandler.initEvent();
              break;
          case "/notre-vision/":
              animationHandler.getCenterTitle();
              swiperHandler.founder();
              break;
          default: 
            console.log('Route not found');
            break;
      }
      break;
  }
})