import { Module } from "@nestjs/common";
import { DistrictsService } from "./districts.service";
import { DistrictsController } from "./districts.controller";
import { Mongoose } from "mongoose";
import { MongooseModule } from "@nestjs/mongoose";
import { District, DistrictSchema } from "./chemas/district.schema";
import { Region, RegionSchema } from "../region/schema/region.schema";

@Module({
  controllers: [DistrictsController],
  providers: [DistrictsService],
  exports: [DistrictsService],
  imports: [
    MongooseModule.forFeature([
      { name: District.name, schema: DistrictSchema },
      { name: Region.name, schema: RegionSchema },
    ]),
  ],
})
export class DistrictsModule {}
