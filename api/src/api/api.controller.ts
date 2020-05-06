import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {

    constructor(
        private api: ApiService
    ) { }

    @Get()
    async getAPI() {
        return this.api.getAPI();
    }
}
