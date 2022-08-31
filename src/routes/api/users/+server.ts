import { PrismaClient } from '@prisma/client';
import { hash } from 'argon2';
const prisma = new PrismaClient();

export const POST = async ({ request }) => {
	try {
		const form = await request.formData();
		let data = { username: '', password: '' };
		Object.keys(data).forEach((e) => {
			data[e] = form.get(e);
		});
		data.password = await hash(data.password);
		const user = await prisma.users.create({ data });
		return new Response(JSON.stringify({ user }));
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }));
	}
};
