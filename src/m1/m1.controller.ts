import {Body, Controller, Inject, Post} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {Observable} from 'rxjs';
import {M1} from './m1.constants';
import {CreateMessageDto} from "../m2/dto/create-message.dto";

@Controller()
export class M1Controller {
    constructor(@Inject(M1) private readonly client1: ClientProxy) {}

    @Post()
    execute(@Body() createMessageDto: CreateMessageDto): Observable<CreateMessageDto> {
        const pattern = { cmd: 'm1' };
        return this.client1.send<CreateMessageDto>(pattern, createMessageDto);
    }
}