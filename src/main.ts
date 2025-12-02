import { NestFactory } from "@nestjs/core";
import { VersioningType } from "@nestjs/common";

import { AppModule } from "./app.module";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.enableVersioning({
		type: VersioningType.URI,
		defaultVersion: "1"
	});

	app.setGlobalPrefix("api");
	app.enableCors({ origin: "*" });

	await app.listen(process.env.PORT ?? 3001);
}

bootstrap();
