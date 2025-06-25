import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';

@Injectable()
export class LikesService {
  create(createLikeDto: CreateLikeDto) {
    return `This action adds a new like with data: ${JSON.stringify(createLikeDto)}`;
  }

  findAll() {
    return `This action returns all likes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} like`;
  }

  update(id: number, updateLikeDto: UpdateLikeDto) {
    return `This action updates a #${id} like with data: ${JSON.stringify(updateLikeDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} like`;
  }
}
