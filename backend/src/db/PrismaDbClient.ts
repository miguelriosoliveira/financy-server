import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { env } from '../env.ts';
import { PrismaClient } from '../generated/prisma/client.ts';
import type { DbClient } from './DbClient.ts';

export class PrismaDbClient implements DbClient {
	client: PrismaClient;

	constructor() {
		this.client = new PrismaClient({
			adapter: new PrismaBetterSqlite3({ url: env.DATABASE_URL }),
		});
	}

	async connect(): Promise<void> {
		await this.client.$connect();
		console.log('✅ Connected to database!');
	}

	async disconnect(): Promise<void> {
		await this.client.$disconnect();
		console.log('👋 Disconnected from database, bye!');
	}
}
