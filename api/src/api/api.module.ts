import { Module } from '@nestjs/common';
import { V1Module } from './v1/v1.module';
import { CommonModule } from './common/common.module';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';

@Module({
  imports: [V1Module, CommonModule],
  controllers: [ApiController],
  providers: [ApiService]
})
export class ApiModule {}
