export class Room {

    /**
     * A room in the Buffalo Museum of Science that tracks visitation data
     * @param {Number} pollingFrequency The number of milliseconds between time series snapshots
     */
    constructor(name, pollingFrequency) {
        this.name = name;
        this.currentGuests = 0;
        this.totalVisits = 0;
        this._personMillisecs = 0;
        this._elapsedMillisecs = 0;
        this.pollingFrequency = pollingFrequency || 1000; 
        this.data = [];
    }

    _update() {
        this._personMillisecs += this.currentGuests*this.pollingFrequency;
        this._elapsedMillisecs += this.pollingFrequency;
        this.push(this._currentGuests);
        requestAnimationFrame(update, this.pollingFrequency);
    }

    registerEntrance() {
        this.currentGuests++;
        this.totalVisits++;
    }

    registerExit() {
        this.currentGuests--;
    }

    getAverageDuration() {
        return this._personMillisecs/this.totalVisits;
    }

    getTimeSeriesData() {
        return this.data;
    }

}