import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { M2 } from './m2.constants';
import {M2Service} from "./m2.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Message} from "./message.entity";
import {M2Controller} from "./m2.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([Message]),
        ClientsModule.register([{ name: M2, transport: Transport.TCP }]),
    ],
    providers: [M2Service],
    controllers: [M2Controller],
})
export class M2Module {}