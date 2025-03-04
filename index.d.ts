import routeLoader from "./src/routeLoader";
import {NextFunction, Request, Response} from "express";

export interface RouteParams<BodyType> {
    req: Request,
    res: Response,
    next: NextFunction,
    body: BodyType,
    query: unknown,
    params: unknown,
}

export {routeLoader};
