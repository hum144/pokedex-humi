export function formatPokemonName(name: string): string {
    if(name.includes("mujer")){
        return name.replace("mujer", "-f");
    }else if(name.includes("hombre")){
        return name.replace("hombre", "-m");
    } else if(name.includes(". ")){
        return name.replace(". ", "-");
    }else if(name.includes("farfetch'd")){
        return name.replace("farfetch'd", "farfetchd");
    }else return name;
}

export function waitfor(time: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve,time));
}