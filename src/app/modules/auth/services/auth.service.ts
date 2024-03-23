import { API_URL } from "../../../core/constants"
import { UserValuesModel } from "../../../core/models"


const CREDENTIALS = {
    document: "87654321",
    phone: "987654321",
}

export const CREDENTIALS_ERRORS = {
    document: "ERROR-DOCUMENT-CREDENTIAL",
    phone: "ERROR-PHONE-CREDENTIAL",
}


export const getUserValue = async (numDocument: string, numPhone: string) => {
    try {
        if (numDocument !== CREDENTIALS.document) {
            throw new Error(CREDENTIALS_ERRORS.document)
        }
        if (numPhone !== CREDENTIALS.phone) {
            throw new Error(CREDENTIALS_ERRORS.phone)
        }

        const URL = `${API_URL}/api/user.json`;
        const response = await fetch(URL);
        const data = await response.json();
        return Promise.resolve(new UserValuesModel(data))
    } catch (err) {
        return Promise.reject(err)
    }
}
