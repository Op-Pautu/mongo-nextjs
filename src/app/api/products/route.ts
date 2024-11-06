import connectToMongoDB from "../../../lib/mongodb";
import { Product } from "../../../models/Product";

// GET request to fetch products
export async function GET() {
  await connectToMongoDB();

  const products = await Product.find({}).exec();

  return new Response(JSON.stringify(products), {
    status: 200,
  });
}

// POST request to add a new product
export async function POST(request: Request) {
  await connectToMongoDB();

  const { name, price } = await request.json();

  const newProduct = new Product({
    name,
    price,
  });

  await newProduct.save();

  return new Response(JSON.stringify(newProduct), {
    status: 201,
  });
}
