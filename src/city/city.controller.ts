import { Controller, Get, Param } from '@nestjs/common';
import { CityService } from './city.service';
import { CityEntity } from './entities/city.entity';

@Controller('city')
export class CityController {

    constructor(
        private readonly cityServices: CityService,
    ){};

    @Get('/:stateId')
    async getAllCitiesByStateId(@Param('stateId') stateId: number): Promise<CityEntity[]> {
        return this.cityServices.getAllCitiesByStateId(stateId);
    }
}
