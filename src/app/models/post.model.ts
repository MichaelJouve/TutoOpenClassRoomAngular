export class Post {

    constructor(
        public index: number,
        public title: string,
        public content: string,
        public loveIts: number,
        public created_at: Date
    ) { }
}