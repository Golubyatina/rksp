import { CountriesService } from './countries.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Country } from './country.entity';


@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}
  @Get()
  findAll() {
    return this.countriesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.countriesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCountry: Country) {
    return this.countriesService.update(+id, updateCountry);
  }
  @Post()
  create(@Body() createCountry: Country) {
    return this.countriesService.create(createCountry);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countriesService.remove(+id);
  }

}

