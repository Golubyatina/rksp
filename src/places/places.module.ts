import { Module } from '@nestjs/common';
import { Place } from './place.entity';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [PlacesController],
  providers: [PlacesService],
  imports: [DatasourceModule]
})
export class PlacesModule {}
