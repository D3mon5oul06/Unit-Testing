export function pow(X: number, n: number) {
    let numero = X;
    if(n == 0 || n < 0){
        if(n==0){
            numero = 1;
        }else{
            numero = 0;
        }
    }else{
        for (let i = 0; i< n; i++){
            if(i != 0){
                let resultado = numero;
                numero = resultado*X;
            }
        }
    }
        return numero;
}