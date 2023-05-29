import { Module } from '@nestjs/common';
import { Place } from './place.entity';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from 'src/cities/city.entity';

@Module({
  controllers: [PlacesController],
  providers: [PlacesService],
  imports: [TypeOrmModule.forFeature([City, Place])]
})
export class PlacesModule {}
