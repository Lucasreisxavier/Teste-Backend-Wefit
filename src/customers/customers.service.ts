import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomersEntity } from './models/customers.entity';
import { CreateCustomersInterface } from './models/customers.interface';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(CustomersEntity)
    private CustomersRepository: Repository<CustomersEntity>,
  ) {}

  async create(customer: CreateCustomersInterface) {
    const response = await this.CustomersRepository.save(customer);
    return { message: 'Customer Created', customers: response };
  }

  findAll() {
    return this.CustomersRepository.find();
  }

  findOne(id: string) {
    return this.CustomersRepository.findBy({ id });
  }

  async update(id: string, updateCustomer: CreateCustomersInterface) {
    const data = await this.CustomersRepository.findOne({ where: { id } });
    const response = await this.CustomersRepository.save({
      ...data,
      ...updateCustomer,
    });
    return { message: 'Customer updated', customer: response };
  }

  async remove(id: string) {
    return {
      message: 'Customer deleted',
      data: this.CustomersRepository.delete(id),
    };
  }
}
