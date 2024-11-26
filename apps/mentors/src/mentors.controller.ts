import { Controller, Get } from '@nestjs/common';
import { MentorsService } from './mentors.service';

@Controller()
export class MentorsController {
  constructor(private readonly mentorsService: MentorsService) {}

  @Get()
  getHello(): string {
    return this.mentorsService.getHello();
  }
}
