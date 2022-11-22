import { Request, Response } from "express";
declare class AccountController {
    register: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    login: (req: any, res: Response) => Promise<Response<any, Record<string, any>>>;
    finUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: AccountController;
export default _default;