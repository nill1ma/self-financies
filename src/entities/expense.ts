import { ApiProperty } from '@nestjs/swagger';
export class Expense {
  @ApiProperty()
  id: string;
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
  created_at: Date;
  @ApiProperty()
  updated_at: Date;
  @ApiProperty()
  user_id: string;
}
