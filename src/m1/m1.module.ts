import {Module} from '@nestjs/common';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {M1} from './m1.constants';
import {M1Controller} from './m1.controller';

@Module({
    imports: [
        ClientsModule.register([{ name: M1, transport: Transport.TCP }]),
    ],
    controllers: [M1Controller],
})
export class M1Module {}