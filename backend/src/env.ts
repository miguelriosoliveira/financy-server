import z from 'zod';

export const env = z
	.object({
		PORT: z.coerce.number(),
		JWT_SECRET: z.string().nonempty(),
		DATABASE_URL: z.url().startsWith('file:'),
	})
	.parse(process.env);
