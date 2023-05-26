import { PlacesService } from './places.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Place } from './place.entity';


@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}
  @Get()
  findAll() {
    return this.placesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.placesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePlace: Place) {
    return this.placesService.update(+id, updatePlace);
  }
  @Post()
  create(@Body() createPlace: Place) {
    return this.placesService.create(createPlace);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.placesService.remove(+id);
  }

}

