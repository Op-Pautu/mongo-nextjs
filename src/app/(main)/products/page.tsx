// app/products/page.tsx
"use client"; // Important: Use client-side component since we're handling form submission

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

interface Product {
  _id: string;
  name: string;
  price: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch products on page load
  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  // Handle form submission to add a new product
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (res.ok) {
        const addedProduct = await res.json();
        setProducts((prevProducts) => [...prevProducts, addedProduct]);
        setNewProduct({ name: "", price: 0 }); // Clear form
      } else {
        throw new Error("Failed to add product");
      }
    } catch (err) {
      setError("Error adding product");
    } finally {
      setLoading(false);
    }
  };

  // Run fetchProducts on page load
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Products</h1>

      {/* Display error message */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Product Form */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <div className="space-y-2">
          <Input
            type="text"
            placeholder="Product name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            required
            className="w-full"
          />
          <Input
            type="number"
            placeholder="Product price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: Number(e.target.value) })
            }
            required
            className="w-full"
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="w-full"
          variant="default"
        >
          {loading ? "Adding..." : "Add Product"}
        </Button>
      </form>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product._id}>
            <CardHeader>
              <h3 className="text-lg font-semibold">{product.name}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-xl text-gray-700">${product.price}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Product
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
