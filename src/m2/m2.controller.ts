import {Controller, Inject} from '@nestjs/common';
import {ClientProxy, MessagePattern} from '@nestjs/microservices';
import {CreateMessageDto} from "../m2/dto/create-message.dto";
import {M2Service} from "./m2.service";
import {Message} from "./message.entity";
import {Observable} from "rxjs";
import {M2} from "./m2.constants";

@Controller()
export class M2Controller {
    constructor(private m2Service: M2Service, @Inject(M2) private readonly  client2: ClientProxy) {}

    @MessagePattern({ cmd: 'm1' })
    communicate1(data: CreateMessageDto): Observable<CreateMessageDto> {
        const pattern = { cmd: 'm2' };
        return this.client2.send<CreateMessageDto>(pattern, data);
    }

    @MessagePattern({ cmd: 'm2' })
    communicate2(data: CreateMessageDto): Promise<Message> {
        return this.m2Service.create(data);
    }
}