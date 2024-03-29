declare class BlogService {
    addBlog: (blog: any) => Promise<import("mongoose").Document<unknown, any, import("../model/blog").IBlog> & import("../model/blog").IBlog & Required<{
        _id: number;
    }>>;
    findAll: () => Promise<Omit<import("mongoose").Document<unknown, any, import("../model/blog").IBlog> & import("../model/blog").IBlog & Required<{
        _id: number;
    }>, never>[]>;
    findById: (id: any) => Promise<import("mongoose").Document<unknown, any, import("../model/blog").IBlog> & import("../model/blog").IBlog & Required<{
        _id: number;
    }>>;
    findByUser: (userId: any) => Promise<(import("mongoose").Document<unknown, any, import("../model/blog").IBlog> & import("../model/blog").IBlog & Required<{
        _id: number;
    }>)[]>;
    updateBlog: (id: any, newBlog: any) => Promise<any>;
    delete: (id: any) => Promise<boolean>;
}
declare const _default: BlogService;
export default _default;
