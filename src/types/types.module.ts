import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Type } from './schemas/type.schemas';
import { TypeSchema } from './schemas/type.schemas';
@Module({
  imports:[MongooseModule.forFeature([
    {
      name:Type.name,
      schema:TypeSchema
    }
  ])],
  controllers: [TypesController],
  providers: [TypesService],
})
export class TypesModule {}
