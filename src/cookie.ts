export class CookieManager {
    constructor(youcount: number, pccount: number) {
        you: youcount;
        pc: pccount;
    }

    checkCookies():boolean {
        let computerPoints = document.cookie
            .split('; ')
            .find(row => row.startsWith('pc'))
            .split('=')[1];
        
        let userrPoints = document.cookie
        .split('; ')
        .find(row => row.startsWith('you'))
        .split('=')[1];

        if (computerPoints && userrPoints) {
            return true;
        } else false;
    }

    createCookie() {
        var expires = '';
        let date = new Date();
        date.setTime(date.getTime() + (7*24*60*60*1000));
        expires = '; expires' + date.toUTCString();
        //sets cookie
        document.cookie = 'you' + '=' + 0 + expires + '; path=/';
        document.cookie = 'pc' + '=' + 0 + expires + '; path=/';

    }

    getCookieValues() {
        let computerPoints = document.cookie
        .split('; ')
        .find(row => row.startsWith('pc'))
        .split('=')[1];
        
        let userPoints = document.cookie
        .split('; ')
        .find(row => row.startsWith('you'))
        .split('=')[1];
    
        return {computerPoints, userPoints}
    }

    addCookiePoints(winner: string) {
        var expires = '';
        let date = new Date();
        date.setTime(date.getTime() + (7*24*60*60*1000));
        expires = '; expires' + date.toUTCString();

        if(winner == 'pc') {
            let computerPoints = document.cookie
            .split('; ')
            .find(row => row.startsWith('pc'))
            .split('=')[1];

            let computerPointsInt = parseInt(computerPoints) + 1;
            document.cookie = 'pc' + '=' + computerPointsInt + expires + '; path=/';

        }
        if(winner == 'you') {
            let userPOints = document.cookie
            .split('; ')
            .find(row => row.startsWith('you'))
            .split('=')[1];

            let userPointsInt = parseInt(userPOints) + 1;
            document.cookie = 'you' + '=' + userPointsInt + expires + '; path=/';

        }
    }

    resetCookie() {
        var expires = '';
        let date = new Date();
        date.setTime(date.getTime() + (7*24*60*60*1000));
        expires = '; expires' + date.toUTCString();
        //sets cookie
        document.cookie = 'you' + '=' + 0 + expires + '; path=/';
        document.cookie = 'pc' + '=' + 0 + expires + '; path=/';
    }
}