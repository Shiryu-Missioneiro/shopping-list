import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreateItemDto {
@ApiProperty({ example: 'Bananas '})
@IsString()
@IsNotEmpty()
name: string;

@ApiPropertyOptional({ example: 'Cavendish Bananas', description: 'Optional description'})
@IsOptional()
@IsString()
description: string;

@ApiProperty({ example: 5, description: 'Needed quantity' })
@IsInt()
@Min(0)
quantity: number;
}