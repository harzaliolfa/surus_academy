export class Instructor {
    constructor(
        public id: number,
        public name: string,
        public lastName: string,
        public email: string,
        public phone: string,
        public linkdinURL?: string
    ){}
}