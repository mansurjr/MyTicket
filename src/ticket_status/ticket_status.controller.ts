import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { TicketStatusService } from "./ticket_status.service";
import { CreateTicketStatusDto } from "./dto/create-ticket_status.dto";
import { UpdateTicketStatusDto } from "./dto/update-ticket_status.dto";

@Controller("ticket-status")
export class TicketStatusController {
  constructor(private readonly ticketStatusService: TicketStatusService) {}

  @Post()
  async create(@Body() createTicketStatusDto: CreateTicketStatusDto) {
    return this.ticketStatusService.create(createTicketStatusDto);
  }

  @Get()
  async findAll() {
    return this.ticketStatusService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.ticketStatusService.findOne(id);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateTicketStatusDto: UpdateTicketStatusDto
  ) {
    return this.ticketStatusService.update(id, updateTicketStatusDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.ticketStatusService.remove(id);
  }
}
