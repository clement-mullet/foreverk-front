export class utilsHandler {
    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    static isPositive(num) {
        if (Math.sign(num) === 1) {
            return true;
        }
    
        return false;
    }
    static scrollTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      
    }
}