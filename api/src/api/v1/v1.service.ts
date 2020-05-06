import { Injectable } from '@nestjs/common';
import { ApiVersion } from '../common/models/api-version.model';

const API_V1: ApiVersion = {
    version: "1",
    path: "/api/v1"
};

@Injectable()
export class V1Service {

    async getVersion() {
        return API_V1;
    }
}
