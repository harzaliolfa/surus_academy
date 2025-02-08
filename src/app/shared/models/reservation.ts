export class Reservation{
    constructor(
        public id: number,
        public course: string,
        public name: string,
        public lastName: string,
        public email: string,
        public phone: string,
        public address: string
    ){}
}