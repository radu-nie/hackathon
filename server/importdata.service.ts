const { Spanner } = require("@google-cloud/spanner");
const projectId = "steam-cache-222815";
const instanceId = "hackathon";
const databaseId = "hackathon";

import { CsvService } from "./CsvService";

class ImportDataService {

    spanner;
    instance;
    database;
    private csvService: CsvService;

    constructor() {
        this.spanner = new Spanner({
            projectId: projectId
        });
        this.instance = this.spanner.instance(instanceId);
        this.database = this.spanner.database(databaseId);

        this.csvService = new CsvService();

    }

    import(): boolean {
        this.csvService.LoadDataAsync();
        return true;
    }
}

export const importDataService = new ImportDataService();