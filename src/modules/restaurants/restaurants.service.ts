import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Injectable()
export class RestaurantsService {
  create(createRestaurantDto: CreateRestaurantDto) {
    return `This action adds a new restaurant with data: ${JSON.stringify(createRestaurantDto)}`;
  }

  findAll() {
    return `This action returns all restaurants`;
  }

  findOne(id: number) {
    return `This action returns a #${id} restaurant`;
  }

  update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    return `This action updates a #${id} menu with data: ${JSON.stringify(updateRestaurantDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurant`;
  }
}
