export default interface Person {
    name: string,
    age: number,
    siblings?: string[]
    metaData?: object;
    active: boolean    
}