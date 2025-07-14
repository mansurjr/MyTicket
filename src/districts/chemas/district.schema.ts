import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { HydratedDocument } from "mongoose";
import { Region } from "../../region/schema/region.schema";

export type DistrictDocument = HydratedDocument<District>;

@Schema({ versionKey: false, timestamps: false })
export class District {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Region" })
  region_id: Region;
}

export const DistrictSchema = SchemaFactory.createForClass(District);
