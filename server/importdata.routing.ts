import { Router, Response, Request } from "express";
import { wrapRoute } from "./wrap-route";
import { importDataService } from "./importdata.service";

// export class ImportDataRouter {
//     constructor(private router: Router) {
//         this.router = new Router();

//         this.router.get("/api/import",
//             wrapRoute(async (req: any, res: Response) => {
//                 let result = await importDataService.import();
//                 await res.json(result);
//             }))
//     }
// }

const importDataRouter: Router = Router();

importDataRouter.get(
    "/api/import",
    wrapRoute(async (req: any, res: Response) => {
        let result = await importDataService.import();
        await res.json(result);
    }));

export { importDataRouter };
