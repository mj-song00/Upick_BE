import { Request } from 'express';
import { Body, Controller, Post, Req } from '@nestjs/common';
import { PharmacistSignUpDto } from './dto/pharmacist.dto';
import { PharmacistsService } from './pharmacists.service';
@Controller('pharmacists')
export class PharmacistsController {
  constructor(private readonly pharmacistsService: PharmacistsService) {}

  @Post('sign-up')
  signUp(@Body() pharmacistSignUpDto: PharmacistSignUpDto) {
    return this.pharmacistsService.signUp(pharmacistSignUpDto);
  }

  @Post('sign-in')
  signIn(@Req() request: Request) {
    const { email, password } = request.body;

    return this.pharmacistsService.signIn(email, password);
  }
}

//TODO : 1. customers sign-up, sign-in 구현 및 문서화
//TODO : 2. 각각 토큰 발급 (예시 -> payload: {type: customer 또는 pharmacist, email: ~~@~.com, 만료시간: 1일})
//TODO : 3. pharmacists signUp Body값 수정
//TODO : 4. 만든 모든 API 테스트
