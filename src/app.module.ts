import { Module } from '@nestjs/common';
import { CitiesModule } from './cities/cities.module';
import { DatasourceModule } from './datasource/datasource.module';

@Module({
  imports: [CitiesModule, DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
