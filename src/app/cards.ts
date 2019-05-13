export class Cards {
    public constructor(
        public id: number, 
        public boardId:number,
        public cardId:number,
        public cardTitle:string,
        public cardList:string[],
    ){}
}
