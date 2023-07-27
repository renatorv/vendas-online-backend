import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StateEntity } from './entities/state.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StateService {

    constructor(@InjectRepository(StateEntity)
    private readonly stateRepository: Repository<StateEntity>,
    ) { }

    // 1 cria a função de buscar todos os estados
    async getAllState(): Promise<StateEntity[]> {
        return this.stateRepository.find();
    }
}
