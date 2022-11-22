export class impactHandler {
    static switchTabs() {
        let switchButtons = document.querySelectorAll('.tabs-button');
        let firstTab = document.querySelector('.impact-first-tab');
        console.log(switchButtons);
        switchButtons.forEach(button => {
            button.addEventListener('click', function() {
                if (button.classList.contains('tabs-1') && !button.classList.contains('active')) {
                    button.classList.add('active');
                    switchButtons[1].classList.remove('active');
                    document.querySelector('.impact-second-tab').style.display = 'none';
                    document.querySelector('.impact-first-tab').style.display = 'flex';
                } else if(button.classList.contains('tabs-2') && !button.classList.contains('active')) {
                    button.classList.add('active');
                    switchButtons[0].classList.remove('active');
                    document.querySelector('.impact-first-tab').style.display = 'none';
                    document.querySelector('.impact-second-tab').style.display = 'flex';
                }
            })
        });
    }
}