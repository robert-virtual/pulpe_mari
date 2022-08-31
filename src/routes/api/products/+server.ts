import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET = async (data) => {
	const products = await prisma.products.findMany();
	return new Response(
		JSON.stringify({
			products,
			data
		})
	);
};

export const POST = async (data) => {

	return new Response(
		JSON.stringify({
			data
		})
	);
};
