import { Module } from '@nestjs/common';
import { CitiesModule } from './cities/cities.module';
import { CountriesModule } from './countries/countries.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlacesModule } from './places/places.module';
import { RegionsModule } from './regions/regions.module';
import { ExceptionsLoggerFilter } from './exceptionlogger/exceptionLogger.filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [CitiesModule, CountriesModule, PlacesModule, RegionsModule, TypeOrmModule.forRoot({
    type: 'postgres', 
    port: 5432,
    username: 'education',
    password: 'password',
    host: 'localhost',
    synchronize: true,
    logging: true,
    entities: ['dist/**/*.entity{.ts, .js}'],
    autoLoadEntities: true,
    migrationsTableName: 'migrations',
    migrations: ['dist/src/migrations/*{.ts,.js}'],
  })
],
  controllers: [],
  providers: [{provide: APP_FILTER, useClass: ExceptionsLoggerFilter}],
})
export class AppModule {}
 