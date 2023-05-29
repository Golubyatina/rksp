import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1685306805369 implements MigrationInterface {
    name = 'Initial1685306805369'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "places" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "coordinates" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_1afab86e226b4c3bc9a74465c12" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "countries" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "capital" character varying NOT NULL, "population" integer NOT NULL, CONSTRAINT "UQ_fa1376321185575cf2226b1491d" UNIQUE ("name"), CONSTRAINT "PK_b2d7006793e8697ab3ae2deff18" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cities" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "coordinates" character varying NOT NULL, "population" integer NOT NULL, CONSTRAINT "PK_4762ffb6e5d198cfec5606bc11e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "city_place" ("place_id" integer NOT NULL, "city_id" integer NOT NULL, CONSTRAINT "PK_734742527303513f904c750f501" PRIMARY KEY ("place_id", "city_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_af1bb71ed4ba07a1fd75b58ee4" ON "city_place" ("place_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_384d31c88328dbe1ff351cdad0" ON "city_place" ("city_id") `);
        await queryRunner.query(`CREATE TABLE "city_country" ("country_id" integer NOT NULL, "city_id" integer NOT NULL, CONSTRAINT "PK_f72a2478e81492bc26ba5ae5342" PRIMARY KEY ("country_id", "city_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_128c86e3e871380b73e7d072a3" ON "city_country" ("country_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_14ee6bd895e37969b1eef172da" ON "city_country" ("city_id") `);
        await queryRunner.query(`ALTER TABLE "city_place" ADD CONSTRAINT "FK_af1bb71ed4ba07a1fd75b58ee4a" FOREIGN KEY ("place_id") REFERENCES "places"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "city_place" ADD CONSTRAINT "FK_384d31c88328dbe1ff351cdad0c" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "city_country" ADD CONSTRAINT "FK_128c86e3e871380b73e7d072a3e" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "city_country" ADD CONSTRAINT "FK_14ee6bd895e37969b1eef172da6" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "city_country" DROP CONSTRAINT "FK_14ee6bd895e37969b1eef172da6"`);
        await queryRunner.query(`ALTER TABLE "city_country" DROP CONSTRAINT "FK_128c86e3e871380b73e7d072a3e"`);
        await queryRunner.query(`ALTER TABLE "city_place" DROP CONSTRAINT "FK_384d31c88328dbe1ff351cdad0c"`);
        await queryRunner.query(`ALTER TABLE "city_place" DROP CONSTRAINT "FK_af1bb71ed4ba07a1fd75b58ee4a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_14ee6bd895e37969b1eef172da"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_128c86e3e871380b73e7d072a3"`);
        await queryRunner.query(`DROP TABLE "city_country"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_384d31c88328dbe1ff351cdad0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_af1bb71ed4ba07a1fd75b58ee4"`);
        await queryRunner.query(`DROP TABLE "city_place"`);
        await queryRunner.query(`DROP TABLE "cities"`);
        await queryRunner.query(`DROP TABLE "countries"`);
        await queryRunner.query(`DROP TABLE "places"`);
    }

}
