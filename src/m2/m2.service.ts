import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {CreateMessageDto} from './dto/create-message.dto';
import {Message} from './message.entity';

@Injectable()
export class M2Service {
    constructor(
        @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>) {}


    async create(createMessageDto: CreateMessageDto): Promise<Message> {
        const message = new Message();
        message.id = createMessageDto.id;
        message.description = createMessageDto.description;

        const messageResponse = await this.messageRepository.save(message);
        //send message to slack
        this.sendMessageToSlack(messageResponse);

        return messageResponse;
    }

    private sendMessageToSlack(message: Message) {

        var request = require('request');
        var options = {
            'method': 'POST',
            'url': 'https://hooks.slack.com/services/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',
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text: message.description})

        };
        request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
        });

    }

}