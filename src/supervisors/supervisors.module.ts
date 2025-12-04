import { Module } from "@nestjs/common";
import { SupervisorsService } from "./supervisors.service";
import { SupervisorsController } from "./supervisors.controller";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [JwtModule],
	controllers: [SupervisorsController],
	providers: [SupervisorsService]
})
export class SupervisorsModule {}
