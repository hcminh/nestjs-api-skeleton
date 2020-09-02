import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersTable1554465583933 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
        CREATE TABLE users
        (
            id            INT(6)            UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            created_at    TIMESTAMP         NOT NULL DEFAULT now(),
            updated_at    TIMESTAMP         NOT NULL DEFAULT now(),
            full_name     NVARCHAR(100),
            avatar        VARCHAR(300),
            role          VARCHAR(15),
            email         VARCHAR(100) 		UNIQUE,
            password      VARCHAR(50),
            phone         VARCHAR(15)
        )`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('DROP TABLE "users"');
    }
}
