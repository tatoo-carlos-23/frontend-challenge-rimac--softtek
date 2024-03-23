import { IPlan } from "../interfaces";

export class PlanOptionModel {

    public static build(plan: IPlan): IPlan {
        const newPrice = plan.price - (plan.price * 0.10)
        return {
            name: plan.name,
            price: plan.price,
            description: plan.description,
            age: plan.age,
            priceDiscount: newPrice,
            inHome: !plan.name.includes("Clínica"),
            recommendedPlan: plan.price.toString() === "99"
        };
    }
}