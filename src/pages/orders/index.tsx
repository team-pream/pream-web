import { AppBar } from '@/components';
import { AppBarBack } from '@/assets/icons';
import { title, line } from './index.styles';
import AddAddress from './components/address';
import ProductInfo from './components/product-info';
import PaymentMethods from './components/payments-methods';
import OrderTotal from './components/order-total';
import { Layout } from '@/components';
import { Text } from '@/components';
import { contentsWrapper } from './index.styles';
import { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { useGetUsersMeQuery } from '@/queries/users';

interface Product {
  id: string;
  title: string;
  price: number;
  images: string;
}

const Orders = () => {
  const { state } = useLocation();
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(state?.product || null);
  const navigate = useNavigate();

  const { data: user, isLoading: userLoading } = useGetUsersMeQuery();

  useEffect(() => {
    if (!product && productId) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`/api/products/${productId}`);
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
      fetchProduct();
    }
  }, [product, productId]);

  if (!product || userLoading) return <div>Loading...</div>;

  return (
    <Layout>
      <AppBar prefix={<AppBarBack height="17px" cursor="pointer" onClick={() => navigate(-1)} />} />
      <div css={contentsWrapper}>
        <div css={title}>
          <Text typo="title1">구매</Text>
        </div>
        <div css={line}></div>
        <AddAddress user={user} />
        <ProductInfo product={product} />
        <PaymentMethods />
        <OrderTotal price={product.price} />
      </div>
    </Layout>
  );
};

export default Orders;
