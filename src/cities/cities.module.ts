import { Module } from '@nestjs/common';
import { City } from './city.entity';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [CitiesController],
  providers: [CitiesService],
  imports: [DatasourceModule]
})
export class CitiesModule {}
