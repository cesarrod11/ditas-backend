import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateHome1637542698313 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'home',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'job_title',
              type: 'varchar',
            },
            {
              name: 'job_description',
              type: 'varchar',
            },
            {
              name: 'job_price',
              type: 'varchar',
            }
          ]
        })
      )
  }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
