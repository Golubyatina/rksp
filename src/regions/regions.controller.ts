import { RegionsService } from './regions.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Region } from './region.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateRegionDto } from './dto/region.dto';


@Controller('regions')
@ApiTags('Области')
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) {}
  @ApiOperation({summary:'Получить список всех областей'})
  @Get()
  findAll() {
    return this.regionsService.findAll();
  }
  @ApiOperation({summary:'Поиск области по айди'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionsService.findOne(+id);
  }

  @ApiOperation({summary:'Обновление области'})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateRegion: Region) {
    return this.regionsService.update(+id, updateRegion);
  }
  @ApiOperation({summary:'Создание области'})
  @Post()
  create(@Body() createRegion: CreateRegionDto) {
    return this.regionsService.create(createRegion);
  }
  @ApiOperation({summary:'Удаление области'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regionsService.remove(+id);
  }

}

