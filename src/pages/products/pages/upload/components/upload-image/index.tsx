import { ChangeEvent, useState } from 'react';
import { UploadPlus } from '@/assets/icons';
import {
  deleteImageButton,
  imageWrapper,
  thumbnailImage,
  uploadImageButton,
  wrapper,
} from './index.styles';

interface Props {
  images: string[];
  onChange: (images: string[]) => void;
  onFilesChange?: (files: File[]) => void;
}

export default function UploadImage({ images, onChange, onFilesChange }: Props) {
  const [files, setFiles] = useState<File[]>([]);

  const handleImageInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const uploadedImages = Array.from(e.target.files);

    if (uploadedImages.length + images.length > 10) {
      alert('최대 10장의 이미지만 업로드할 수 있습니다.');
      return;
    }

    const previews = uploadedImages.map((file) => URL.createObjectURL(file));
    setFiles([...files, ...uploadedImages]);

    onChange([...images, ...previews]);
    onFilesChange?.([...files, ...uploadedImages]);
  };

  const handleRemoveImage = (index: number) => {
    const updatedPreviews = images.filter((_, idx) => idx !== index);
    const updatedFiles = files.filter((_, idx) => idx !== index);

    onChange(updatedPreviews);

    setFiles(updatedFiles);
    onFilesChange?.(updatedFiles);
  };

  return (
    <div css={wrapper}>
      <label css={uploadImageButton}>
        <UploadPlus width="24px" height="24px" />
        <input type="file" accept="image/*" multiple onChange={handleImageInputChange} />
      </label>

      {images.map((image, index) => (
        <div css={imageWrapper}>
          <button css={deleteImageButton} onClick={() => handleRemoveImage(index)}>
            <div />
          </button>
          <img key={image} src={image} alt={image} css={thumbnailImage} />
        </div>
      ))}
    </div>
  );
}
