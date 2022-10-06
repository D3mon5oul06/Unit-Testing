export function Fact(n: number){
    let Fact = 1;
    if(n > 16 || n < 0){
        Fact = 0;
    }else{
        for(let i = 0; i < n; i++){
            Fact = Fact * (i+1);
        }
    }

    return Fact;
}