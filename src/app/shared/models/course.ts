import { Instructor } from "./instructor";

export class Course {


     constructor(
        public id: number, 
        public name: string, 
        public description: string, 
        public price?: number, 
        public isTopRated?: boolean, 
        public date?: string, 
        public imgURL?: string,
        public instructor?: Instructor,
        public duration?: string,


) {}
}
