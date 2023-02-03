export class PrimeModalService {
    public suspenseKey: string = 'false'

    showLoading() {
        this.suspenseKey = 'true'
    }
}
