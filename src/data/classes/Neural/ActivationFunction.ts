class ActivationFunction{
    public static use(value:number[], n:number):number[]{
        for(let i=0;i<n;i++){
            value[i]=1/(1+Math.exp(-value[i]))
        }
        return value
    }
}
export default ActivationFunction