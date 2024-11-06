function calculateshippingcost(method:string) : string | number {
    let cost:number;
    switch (method){
        case "standard":
            cost = 150;
            break;
            case "express":
                cost = 200;
                break;
                case "over night":
                    cost = 300;
                    break;
                    default:
                        return "invalid shipping method";
    }
    return cost
}

const testcase = ["standard","express","over night","same day"]
testcase.forEach((testcase)=>{
    const result = calculateshippingcost(testcase);
    console.log(`Shipping method: ${testcase} => cost: ${result} `);
})









