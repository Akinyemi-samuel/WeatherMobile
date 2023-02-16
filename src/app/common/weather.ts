export class Weather {
    public get last_updated(): string {
        return this._last_updated;
    }
    public set last_updated(value: string) {
        this._last_updated = value;
    }
    public get feelslike_c(): number {
        return this._feelslike_c;
    }
    public set feelslike_c(value: number) {
        this._feelslike_c = value;
    }
    public get humidity(): number {
        return this._humidity;
    }
    public set humidity(value: number) {
        this._humidity = value;
    }
    public get temp_c(): number {
        return this._temp_c;
    }
    public set temp_c(value: number) {
        this._temp_c = value;
    }

    constructor(private _temp_c: number,
        private _humidity: number,
        private _feelslike_c: number,
        private _last_updated: string
        ) {
        
    }
}
