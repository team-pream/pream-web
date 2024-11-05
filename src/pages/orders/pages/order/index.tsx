import { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { AppBarBack } from '@/assets/icons';
import { Layout, AppBar, Text } from '@/components';
import { useGetUsersMeQuery } from '@/queries/users';
import { title, line, contentsWrapper } from './index.styles';
import ShippingInfo from './components/shipping-info';
import PaymentMethods from './components/payments-methods';
import OrderTotal from './components/order-total';
import ProductInfo from './components/product-info';

interface Product {
  id: string;
  title: string;
  price: number;
  images: string;
}

export default function Order() {
  const { state } = useLocation();
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(state?.product || null);
  const navigate = useNavigate();

  const { data: user } = useGetUsersMeQuery();

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

  if (!product || !user) return <div>Loading...</div>;

  return (
    <Layout>
      <AppBar prefix={<AppBarBack height="24px" cursor="pointer" onClick={() => navigate(-1)} />} />
      <div css={contentsWrapper}>
        <div css={title}>
          <Text typo="title1">구매</Text>
        </div>
        <div css={line}></div>
        <ShippingInfo user={user} />
        <ProductInfo product={product} />
        <PaymentMethods />
        <OrderTotal price={product.price} />
      </div>
    </Layout>
  );
}
