import { Request, Response } from "express";
declare class BlogController {
    store: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    index: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    show: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    destroy: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
}
declare const _default: BlogController;
export default _default;
