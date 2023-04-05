// import Image from 'next/image'
import { useRouter } from "next/router";
import { api } from "y/utils/api";

const ProductDetails = () => {
  const { query } = useRouter();
  const {
    data: product,
    isLoading,
    isError,
  } = api.product.unique.useQuery({ id: String(query.id) });
  if (isLoading) return <p>Carregando os produtos</p>;
  if (isError) return <p>Erro em carregar os produtos</p>;

  return (
    <div className="bg-white">
      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
          <img
            src={product?.image}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {product?.name}
          </h1>
        </div>
        <div>
          <p className="text-3xl tracking-tight text-gray-900">
            {product?.price}
          </p>
          <form>
            <button
              type="submit"
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to bag
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
