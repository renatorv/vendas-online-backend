import { Controller, Get } from '@nestjs/common';
import { StateService } from './state.service';
import { StateEntity } from './entities/state.entity';

@Controller('state')
export class StateController {
    constructor(
        private readonly stateService: StateService,
    ) { }
    // 2 cria a rota
    @Get()
    async getAllState(): Promise<StateEntity[]> {
        return this.stateService.getAllState();
    }
}
