import { type NextPage } from "next";
import Image from "next/image";
import { api } from "y/utils/api";

const Home: NextPage = () => {
  const { data: products, isLoading, isError } = api.product.all.useQuery();
  if (isLoading) return <p>Carregando os produtos</p>;
  if (isError) return <p>Erro em carregar os produtos</p>;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Produtos
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products?.map(
            (product) =>
              product.available && (
                <div key={product.id} className="group relative">
                  <div className="min-h-80 aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.image}
                      alt={""}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={`/product/${encodeURIComponent(product.id)}`}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </a>
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
