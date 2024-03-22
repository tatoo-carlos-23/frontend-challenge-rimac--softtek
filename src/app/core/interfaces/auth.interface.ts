export interface IQuote {
    numberDocument: string;
    numberCellPhone: string;
}

export interface IFormAuth extends IQuote {
    isPrivacyPolicy: boolean;
    isCommunicationPolicy: boolean;
}