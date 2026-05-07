export interface Experience {
    "titolo": string,
    "tipo": string,
    "data": string,
    "luogo": string,
    "costo": number,
    "descrizione": string,
    "immagine": string,
    "tags": string[],
    "coordinate": number[]
}

export type ComposerLocation = {
    [key:string]: string|number,
    name: string,
    description: string,
    lat: number,
    long: number
}

export type Usage = {
    showMenu: string,
    setShowMenu: (menuState:string) => void
}