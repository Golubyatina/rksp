import { CitiesService } from './cities.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { City } from './city.entity';


@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}
  @Get()
  findAll() {
    return this.citiesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.citiesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCity: City) {
    return this.citiesService.update(+id, updateCity);
  }
  @Post()
  create(@Body() createCity: City) {
    return this.citiesService.create(createCity);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.citiesService.remove(+id);
  }

}

