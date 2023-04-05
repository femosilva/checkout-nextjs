// import Image from 'next/image'
import { useRouter } from 'next/router';
import { api } from 'y/utils/api';

const ProductDetails = () => {
  const { query } = useRouter();
  const { data: product, isLoading, isError, error } = api.product.unique.useQuery({ id: String(query.id) });
  if (isLoading) return <p>Carregando os produtos</p>
  if (isError) return <p>Erro em carregar os produtos</p>
  console.log(error)
  return (
    <>
    {product?.name}
    {product?.price}
    {/* <Image src={product?.image} alt="" /> */}
    </>
  );
};

export default ProductDetails;
