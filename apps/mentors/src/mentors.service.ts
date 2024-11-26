import { Injectable } from '@nestjs/common';

@Injectable()
export class MentorsService {
  getHello(): string {
    return 'Hello World!';
  }
}
