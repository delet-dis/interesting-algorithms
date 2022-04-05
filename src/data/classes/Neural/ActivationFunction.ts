class ActivationFunction{
    public static use(value:number[], n:number):number[]{
        for (let i = 0; i < n; i++) {
            if (value[i] < 0)
                value[i] *= 0.01;
            else if (value[i] > 1)
                value[i] = 1. + 0.01 * (value[i] - 1.);
            //else value = value;
        }
        return value
    }
}
export default ActivationFunction