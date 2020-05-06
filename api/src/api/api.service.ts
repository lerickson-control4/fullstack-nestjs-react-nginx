import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {

    async getAPI() {
        return { name: 'Sample NestJS REST API ' };
    }
}
