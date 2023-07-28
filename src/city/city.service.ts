import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CityEntity } from './entities/city.entity';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';


@Injectable()
export class CityService {

    constructor(@InjectRepository(CityEntity)
    private readonly stateRepository: Repository<CityEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
    ) { }


    async getAllCitiesByStateId(stateId: number): Promise<CityEntity[]> {

        const citiesCache: CityEntity[] = await this.cacheManager.get(`${stateId}`);

        if(citiesCache){
            return citiesCache;
        }

        const cities = await this.stateRepository.find({
            where: { stateId: stateId }
        });

        await this.cacheManager.set(`${stateId}`, cities);
        
        return cities;
    }
}


// refazer cache
// https://www.youtube.com/watch?v=tH56ijYRL4s&list=PLedVhPP7RyiIOJ7R4lqXtWa4x-GX-x7rO&index=11
// 12 minutos