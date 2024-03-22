import { API_URL } from "../../../core/constants"
import { IUserValuesModel } from "../../../core/models"

export const getUserValue = async () => {
    try {
        const URL = `${API_URL}/api/user.json`;
        const response = await fetch(URL);
        const data = await response.json();
        return Promise.resolve(new IUserValuesModel(data))
    } catch (err) {
        return Promise.reject(err)
    }
}