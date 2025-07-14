import { Injectable } from '@nestjs/common';
import { CreateTicketStatusDto } from './dto/create-ticket_status.dto';
import { UpdateTicketStatusDto } from './dto/update-ticket_status.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TicketStatus } from './schemas/ticket_status.schema';

@Injectable()
export class TicketStatusService {
  constructor(
    @InjectModel(TicketStatus.name)
    private readonly ticketStatusSchema: Model<TicketStatus>,
  ) {}
 async create(createTicketStatusDto: CreateTicketStatusDto) {
    const candidate = await this.ticketStatusSchema.findOne({
      name: createTicketStatusDto.name,
    });

    if (!candidate) {
      throw new Error('Bunday ticketStatus allaqachon mavjud');
    }
    return this.ticketStatusSchema.create(createTicketStatusDto);
  }

  async findAll() {
    return this.ticketStatusSchema.find();
  }

  async findOne(id: string) {
    return this.ticketStatusSchema.findById(id);
  }

  async update(id: string, updateTicketStatusDto: UpdateTicketStatusDto) {
    return this.ticketStatusSchema.findByIdAndUpdate(id, updateTicketStatusDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.ticketStatusSchema.findByIdAndDelete(id);
  }
}
