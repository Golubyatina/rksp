import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1685462133255 implements MigrationInterface {
    name = 'Initial1685462133255'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "city_country" DROP CONSTRAINT "FK_128c86e3e871380b73e7d072a3e"`);
        await queryRunner.query(`ALTER TABLE "city_country" DROP CONSTRAINT "FK_14ee6bd895e37969b1eef172da6"`);
        await queryRunner.query(`ALTER TABLE "city_place" DROP CONSTRAINT "FK_af1bb71ed4ba07a1fd75b58ee4a"`);
        await queryRunner.query(`ALTER TABLE "city_place" DROP CONSTRAINT "FK_384d31c88328dbe1ff351cdad0c"`);
        await queryRunner.query(`ALTER TABLE "city_region" DROP CONSTRAINT "FK_e7294584c34508a43f2478ea597"`);
        await queryRunner.query(`ALTER TABLE "city_region" DROP CONSTRAINT "FK_6d60bfbb1050216710a97765fd1"`);
        await queryRunner.query(`ALTER TABLE "region_country" DROP CONSTRAINT "FK_88985298dacfc22fc818151b55c"`);
        await queryRunner.query(`ALTER TABLE "region_country" DROP CONSTRAINT "FK_db1625fc8d67f6ebbfbec74315d"`);
        await queryRunner.query(`ALTER TABLE "city_place" ADD CONSTRAINT "FK_af1bb71ed4ba07a1fd75b58ee4a" FOREIGN KEY ("place_id") REFERENCES "places"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "city_place" ADD CONSTRAINT "FK_384d31c88328dbe1ff351cdad0c" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "region_country" ADD CONSTRAINT "FK_88985298dacfc22fc818151b55c" FOREIGN KEY ("country_id") REFERENCES "regions"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "region_country" ADD CONSTRAINT "FK_db1625fc8d67f6ebbfbec74315d" FOREIGN KEY ("region_id") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "city_region" ADD CONSTRAINT "FK_e7294584c34508a43f2478ea597" FOREIGN KEY ("region_id") REFERENCES "regions"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "city_region" ADD CONSTRAINT "FK_6d60bfbb1050216710a97765fd1" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "city_country" ADD CONSTRAINT "FK_14ee6bd895e37969b1eef172da6" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "city_country" ADD CONSTRAINT "FK_128c86e3e871380b73e7d072a3e" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "city_country" DROP CONSTRAINT "FK_128c86e3e871380b73e7d072a3e"`);
        await queryRunner.query(`ALTER TABLE "city_country" DROP CONSTRAINT "FK_14ee6bd895e37969b1eef172da6"`);
        await queryRunner.query(`ALTER TABLE "city_region" DROP CONSTRAINT "FK_6d60bfbb1050216710a97765fd1"`);
        await queryRunner.query(`ALTER TABLE "city_region" DROP CONSTRAINT "FK_e7294584c34508a43f2478ea597"`);
        await queryRunner.query(`ALTER TABLE "region_country" DROP CONSTRAINT "FK_db1625fc8d67f6ebbfbec74315d"`);
        await queryRunner.query(`ALTER TABLE "region_country" DROP CONSTRAINT "FK_88985298dacfc22fc818151b55c"`);
        await queryRunner.query(`ALTER TABLE "city_place" DROP CONSTRAINT "FK_384d31c88328dbe1ff351cdad0c"`);
        await queryRunner.query(`ALTER TABLE "city_place" DROP CONSTRAINT "FK_af1bb71ed4ba07a1fd75b58ee4a"`);
        await queryRunner.query(`ALTER TABLE "region_country" ADD CONSTRAINT "FK_db1625fc8d67f6ebbfbec74315d" FOREIGN KEY ("region_id") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "region_country" ADD CONSTRAINT "FK_88985298dacfc22fc818151b55c" FOREIGN KEY ("country_id") REFERENCES "regions"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "city_region" ADD CONSTRAINT "FK_6d60bfbb1050216710a97765fd1" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "city_region" ADD CONSTRAINT "FK_e7294584c34508a43f2478ea597" FOREIGN KEY ("region_id") REFERENCES "regions"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "city_place" ADD CONSTRAINT "FK_384d31c88328dbe1ff351cdad0c" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "city_place" ADD CONSTRAINT "FK_af1bb71ed4ba07a1fd75b58ee4a" FOREIGN KEY ("place_id") REFERENCES "places"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "city_country" ADD CONSTRAINT "FK_14ee6bd895e37969b1eef172da6" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "city_country" ADD CONSTRAINT "FK_128c86e3e871380b73e7d072a3e" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
