import { AppBarBack } from '@/assets/icons';
import { AppBar, Layout } from '@/components';

export default function Upload() {
  return (
    <Layout>
      <AppBar prefix={<AppBarBack height="24px" />} />
      Upload
    </Layout>
  );
}
