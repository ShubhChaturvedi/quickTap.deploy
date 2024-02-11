


export function generate(): String{
    const stringPool: String = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}[]:><?"
    const string_length: number = 6;  
    let randomstring: String = '';   
    for (let i: number=0; i<string_length; i++) {  
        const rnum: number = Math.floor(Math.random() * stringPool.length);  
        randomstring += stringPool.substring(rnum,rnum+1);  
    }  

    return randomstring;
}