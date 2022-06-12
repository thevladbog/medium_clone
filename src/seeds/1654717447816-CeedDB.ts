import { MigrationInterface, QueryRunner } from 'typeorm';

export class CeedDB1654717447816 implements MigrationInterface {
  name = 'CeedDB1654717447816';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')`,
    );

    await queryRunner.query(
      // password is 123456
      `INSERT INTO users (username, email, password) VALUES ('foo1', 'foo1@gmail.com', '$2b$10$fyLgzSoRVrMGnoCfnzhsyOfspVjz9vlhgLCm/Q3uoHjtgx4I84gv2')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'first-article', 'first article description', 'first article bode', 'coffe,dragons', 1)`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('second-article', 'second article', 'second article description', 'second article bode', 'coffe,dragons', 1)`,
    );
  }

  public async down(): Promise<void> {}
}
