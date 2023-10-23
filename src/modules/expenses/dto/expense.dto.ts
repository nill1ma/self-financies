import { ApiProperty } from '@nestjs/swagger';
export class ExpenseDTO {
  @ApiProperty()
  destine: string;
  @ApiProperty()
  value: number;
  @ApiProperty()
  payed_value: number;
  @ApiProperty()
  pay_day: Date;
  @ApiProperty()
  due_date: Date;
  @ApiProperty()
  user_id: string;
}
