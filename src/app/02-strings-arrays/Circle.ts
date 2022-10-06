export function Circle(radio: number){
    let Pi = 3.1416;
    let area;
    if(radio == 1 || radio < 0){
        if(radio == 1){
            area = Pi;
        }else{
            area = 0;
        }
    }else{
        area = Pi * (radio * radio);
    }

    return area;
}