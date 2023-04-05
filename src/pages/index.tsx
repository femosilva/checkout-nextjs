import { type NextPage } from "next";
import Link from 'next/link'
import { api } from "y/utils/api";

const Home: NextPage = () => {
  const {data: products, isLoading, isError} = api.product.all.useQuery()
  if (isLoading) return <p>Carregando os produtos</p>
  if (isError) return <p>Erro em carregar os produtos</p>
  return (
    <>
    {products?.map(product => {
      return <Link key={product.id} href={`/product/${encodeURIComponent(product.id)}`}>{product.name}</Link>
    })}
    </>
  );
};

export default Home;