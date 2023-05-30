import { Module } from "@nestjs/common";
import { ExceptionsLoggerFilter } from "./exceptionLogger.filter";
import { AllExceptionsFilter } from "./Allexception.filter";

@Module({
    controllers: [],
    providers: [AllExceptionsFilter],
    imports: []
  })
  export class exceptionLoggerModule {}

export { AllExceptionsFilter };
