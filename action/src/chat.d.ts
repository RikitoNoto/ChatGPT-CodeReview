export declare class Chat {
    private chatAPI;
    constructor(apikey: string);
    private generatePrompt;
    private generatePromptWalkThrough;
    codeReview: (patch: string) => Promise<string>;
    walkThrough: (patch: string) => Promise<string>;
}
