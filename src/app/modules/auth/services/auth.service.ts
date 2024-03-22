import { API_URL } from "../../../core/constants"
import { IUserValuesModel } from "../../../core/models"

export const getUserValue = () => {
    return new Promise<IUserValuesModel>(async (resolve, reject) => {
        try {
            const URL = `${API_URL}/api/user.json`;
            const response = await fetch(URL);
            const data = await response.json();
            resolve(new IUserValuesModel(data))
        } catch (err) {
            reject(err)
        }
    })
}