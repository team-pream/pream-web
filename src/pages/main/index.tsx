import { api } from '@/api';
import { useEffect, useState } from 'react';
import { wrapper } from './index.styles';
import { categoryList } from './index.styles';
import { categoryItems } from './index.styles';
import { categoryItem } from './index.styles';
import { imgIcon } from './index.styles';
import { useNavigate } from 'react-router-dom';

interface ImageData {
  id: number;
  name: string;
  icon: string;
}

export default function Main() {
  const [imageData, setImageData] = useState<ImageData[]>([]);
  const nav = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await api.get('/categories');
        console.log('response: ', response);
        setImageData(response.data);
      } catch (error) {
        console.error('failed: ', error);
      }
    };
    getCategories();
  }, []);

  const handleCategoryButtonClick = (link: number) => {
    nav(link);
  };

  return (
    <div css={wrapper}>
      <header>header</header>
      <main>
        <div>carousel</div>
        <div css={categoryList}>
          <div css={categoryItems}>
            {imageData.length > 0 ? (
              imageData
                .filter((item) => item.id !== 4 && item.id !== 5)
                .map((item) => (
                  <div key={item.id} css={categoryItem}>
                    <img
                      src={item.icon}
                      alt={item.name}
                      css={imgIcon}
                      onClick={() => handleCategoryButtonClick(item.id)}
                    />
                    <span>{item.name}</span>
                  </div>
                ))
            ) : (
              <p>'Loading..'</p>
            )}
          </div>
        </div>
        <div>list</div>
      </main>
      <nav>nav</nav>
    </div>
  );
}
