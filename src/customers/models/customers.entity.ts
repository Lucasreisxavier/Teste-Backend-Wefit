import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customers')
export class CustomersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: '0' })
  cpf: number;

  @Column({ default: '0' })
  cnpj: number;

  @Column({ default: '' })
  name: string;

  @Column({ default: '0' })
  cell_phone: number;

  @Column({ default: '0' })
  phone: number;

  @Column({ default: '' })
  email: string;

  @Column({ default: '0' })
  zip_code: number;

  @Column({ default: '' })
  street: string;

  @Column({ default: '0' })
  number: number;

  @Column({ default: '' })
  complement: string;

  @Column({ default: '' })
  city: string;

  @Column({ default: '' })
  state: string;

  @Column({ default: '0' })
  is_vendor: boolean;

  @Column({ default: '0' })
  is_individual: boolean;
}
