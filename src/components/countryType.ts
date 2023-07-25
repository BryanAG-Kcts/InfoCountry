export interface countryType {
    name : {
        common : string,
        official : string
    },
    
    idd : {
        root : string,
        suffixes : number[]
    },

    flags : any
    capital : string,
    area : number,
    population : number,
    subregion: string,
    currencies : any,
    languages : any
}