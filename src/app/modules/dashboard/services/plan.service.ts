import { API_URL } from "../../../core/constants";
import { IPlanContent } from "../../../core/interfaces";

export const getPlans = async () => {
    try {
        const URL = `${API_URL}/api/plans.json`;
        const response = await fetch(URL);
        const data = await response.json() as IPlanContent;
        return Promise.resolve(data);
    } catch (err) {
        return Promise.reject(err);
    }
}