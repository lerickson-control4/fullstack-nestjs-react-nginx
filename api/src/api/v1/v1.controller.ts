import { Controller, Get } from '@nestjs/common';
import { V1Service } from './v1.service';

@Controller('api/v1')
export class V1Controller {

    constructor(private v1: V1Service) {}

    @Get()
    async getVersrion() {
        return this.v1.getVersion();
    }
}
