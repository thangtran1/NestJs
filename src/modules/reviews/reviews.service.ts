import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewsService {
  create(createReviewDto: CreateReviewDto) {
    return `This action adds a new review with data: ${JSON.stringify(createReviewDto)}`;
  }

  findAll() {
    return `This action returns all reviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} review`;
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} menu with data: ${JSON.stringify(updateReviewDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }
}
