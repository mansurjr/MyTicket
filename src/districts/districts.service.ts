import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateDistrictDto } from "./dto/create-district.dto";
import { UpdateDistrictDto } from "./dto/update-district.dto";
import { District, DistrictDocument } from "./chemas/district.schema";
import { isValidObjectId, Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Region, RegionDocument } from "../region/schema/region.schema";

@Injectable()
export class DistrictsService {
  constructor(
    @InjectModel(District.name) private districtModel: Model<DistrictDocument>,
    @InjectModel(Region.name)
    private readonly regionModel: Model<RegionDocument>
  ) {}
  async create(createDistrictDto: CreateDistrictDto) {
    const { region_id } = createDistrictDto;
    if (!isValidObjectId(region_id)) {
      throw new BadRequestException("Invalid object ID");
    }
    const region = await this.regionModel.findById(region_id);
    if (!region) {
      throw new BadRequestException("Region not found");
    }
    const district = await this.districtModel.create(createDistrictDto);
    region.districts.push(district);
    await region.save();
    return district
  }

  findAll() {
    return `This action returns all districts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} district`;
  }

  update(id: number, updateDistrictDto: UpdateDistrictDto) {
    return `This action updates a #${id} district`;
  }

  remove(id: number) {
    return `This action removes a #${id} district`;
  }
}
