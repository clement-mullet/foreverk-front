let sliderState = 1;

export class sliderHandler {
    static displayDescription() {
        let foundersImages = document.querySelectorAll('.founders-slider img');
        let descriptionBloc = document.querySelector('.description-bloc');
        let imageDescription = document.querySelector('.founder-description-img img');
        let imageLabel = document.querySelector('.slider-image-label');
        let text1 = document.querySelector('.founder-description-text-1');
        let sliderArrow = document.querySelectorAll('.founders-slider svg');
        let text2 = document.querySelector('.founder-description-text-2');
        
        sliderArrow[0].addEventListener('click', function(){
            sliderState = sliderState + 1;
        });
        sliderArrow[1].addEventListener('click', function() {
            sliderState = sliderState + 1;
        });

        foundersImages.forEach((image, index) => {
            image.addEventListener('click', function() {
                sliderHandler.highlightImage(image, index);
                sliderHandler.placeCursor(index, image);
                descriptionBloc.style.display = "flex";
                switch (index) {
                    case 0:
                        imageDescription.src = '/wp-content/themes/foreverk-front/assets/social/Ellipse10.png'
                        imageDescription.srcset = '/wp-content/themes/foreverk-front/assets/social/Ellipse10.png'
                        imageLabel.innerHTML = '<span>ERWAN KEMPF</span>' 
                        text1.innerHTML = 'Text à venir'
                        text2.innerHTML = 'Text à venir'
                        break;

                    case 1:
                        imageDescription.src = '/wp-content/themes/foreverk-front/assets/social/Ellipse12.png'
                        imageDescription.srcset = '/wp-content/themes/foreverk-front/assets/social/Ellipse12.png'
                        imageLabel.innerHTML = '<span>PHILIPPE BROSSE</span> <br> Président' 
                        text1.innerHTML = '<span>Groupe Société Générale (1981-2008) :</span> <br> Inspecteur au sein de l’Inspection Générale spécialisé dans les activités de marché. Banque d’Investissement, Directeur des Produits Structurés et dérivés complexes. <br> <span>SG Asset Management :</span> Société agrée par l’AMF, Directeur Général Adjoint, membre du Comité de Direction de la Société Générale. Gestion et développement des activités de SGAM en Europe continentale.';
                        text2.innerHTML = '<span>SGAM Alternative Investments :</span> Société agrée par l’AMF, Directeur Général. Gestions structurées, Hedge Funds, Private Equity et Immobilier. Collecte 64 milliards en 4 ans. <span>Depuis 2010:</span> Président, fondateur de Exclusive Partners (PSI) agrée par l’AMF et l’ACPR, conseil en investissement (plus de 30 milliards d’euros conseillés).'
                        break;
                
                    case 2:
                        imageDescription.src = '/wp-content/themes/foreverk-front/assets/social/Ellipse9.png'
                        imageDescription.srcset = '/wp-content/themes/foreverk-front/assets/social/Ellipse9.png'
                        imageLabel.innerHTML = '<span>SACAHE KEMPF</span>' 
                        text1.innerHTML = 'Text à venir'
                        text2.innerHTML = 'Text à venir'
                        break;

                    case 3:
                        imageDescription.src = '/wp-content/themes/foreverk-front/assets/social/Ellipse11.png'
                        imageDescription.srcset = '/wp-content/themes/foreverk-front/assets/social/Ellipse11.png'
                        imageDescription.innerHTML = '<span>HERVÉ ORDIONI</span>' 
                        text1.innerHTML = 'Text à venir'
                        text2.innerHTML = 'Text à venir'
                        break;
                    
                    case 4:
                        imageDescription.src = '/wp-content/themes/foreverk-front/assets/social/Ellipse7.png'
                        imageDescription.srcset = '/wp-content/themes/foreverk-front/assets/social/Ellipse7.png'
                        imageLabel.innerHTML = 'AYMERIC KEMPF</span>' 
                        text1.innerHTML = 'Text à venir'
                        text2.innerHTML = 'Text à venir'
                        break;

                    case 5:
                        imageDescription.src = '/wp-content/themes/foreverk-front/assets/social/Ellipse32.png'
                        imageDescription.srcset = '/wp-content/themes/foreverk-front/assets/social/Ellipse32.png'
                        imageLabel.innerHTML = '<span>MUSTAPHA AOUSSIM</span>' 
                        text1.innerHTML = 'Text à venir'
                        text2.innerHTML = 'Text à venir'
                        break;
                }
            })
        });
    }

    static highlightImage(image, index) {
        let founders = document .querySelectorAll('.founders-slider .swiper-slide');
        let foundersImages = document.querySelectorAll('.founders-slider img');
        foundersImages.forEach((image, index) => {
            image.style.border = '4px solid transparent'
        });
        founders.forEach(founder => {
            founder.classList.remove('active')    
        });
        image.style.border = '4px solid #81AC37'
        founders[index].classList.add('active')
    }

    static placeCursor(index, image) {
        let foundersImages = document.querySelectorAll('.founders-slider img');
        let cursor = document.querySelector('.bitognio');
        

        switch (sliderState) {
            case 1:
                console.log(sliderState);
                break;

            case 2:
                console.log(sliderState);
                break;

            case 3:
                console.log(sliderState);
                break;
        
            default:
                console.log('Slider state is out of range');
                break;
        }
    }
}