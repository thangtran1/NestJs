import { Injectable } from '@nestjs/common';
import { CreateOrderDetailDto } from './dto/create-order.detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order.detail.dto';

@Injectable()
export class OrderDetailService {
  create(createOrderDetailDto: CreateOrderDetailDto) {
    return `This action adds a new orderDetail with data: ${JSON.stringify(createOrderDetailDto)}`;
  }

  findAll() {
    return `This action returns all orderDetail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderDetail`;
  }

  update(id: number, updateOrderDetailDto: UpdateOrderDetailDto) {
    return `This action updates a #${id} menu with data: ${JSON.stringify(updateOrderDetailDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderDetail`;
  }
}
