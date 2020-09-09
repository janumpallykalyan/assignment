import { Module } from '@nestjs/common';
import { M1Module } from './m1/m1.module';
import {M2Module} from "./m2/m2.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ClientsModule, Transport} from "@nestjs/microservices";
import {M2} from "./m2/m2.constants";
import {M1} from "./m1/m1.constants";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'test.sqlite',
            autoLoadEntities: true,
            synchronize: true,
        }),
        M1Module,
        M2Module
    ],
})
export class AppModule {}