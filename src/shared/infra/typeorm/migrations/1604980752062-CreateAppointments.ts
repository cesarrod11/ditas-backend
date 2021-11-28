import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1604980752062
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'provider',
            type: 'varchar',
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
          },
          {
            name: 'period',
            type: 'varchar',
          },
          {
            name: 'task_type',
            type: 'varchar',
          },
          {
            name: 'customer_address',
            type: 'varchar',
          },
          {
            name: 'amount',
            type: 'varchar',
          },
          {
            name: 'payment_method',
            type: 'varchar',
          },
          {
            name: 'masked_number',
            type: 'varchar',
          },
          {
            name: 'note',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments');
  }
}
