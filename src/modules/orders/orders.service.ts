import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  create(createOrderDto: CreateOrderDto) {
    return `This action adds a new order with data: ${JSON.stringify(createOrderDto)}`;
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} menu with data: ${JSON.stringify(updateOrderDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
