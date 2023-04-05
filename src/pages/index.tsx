import { type NextPage } from "next";
import { api } from "y/utils/api";

const Home: NextPage = () => {
  const {data: products, isLoading, isError} = api.product.getAllProducts.useQuery()
  if (isLoading) return <p>Carregando os produtos</p>
  if (isError) return <p>Erro em carregar os produtos</p>
  return (
    <>
    {products?.map(product => {
      return <p key={product.id}>{product.name}</p>
    })}
    </>
  );
};

export default Home;