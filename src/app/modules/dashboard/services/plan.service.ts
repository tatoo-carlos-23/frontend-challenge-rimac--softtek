import { API_URL } from "../../../core/constants";
import { IPlanContent } from "../../../core/interfaces";
import { PlanOptionModel } from "../../../core/models";

export const getPlans = async (): Promise<IPlanContent> => {
    try {
        const URL = `${API_URL}/api/plans.json`;
        const response = await fetch(URL);
        let data = await response.json() as IPlanContent;
        data.list = data.list.slice(0, 3);
        data.list = data.list.map(res => PlanOptionModel.build(res))
        return Promise.resolve(data);
    } catch (err) {
        return Promise.reject(err);
    }
}