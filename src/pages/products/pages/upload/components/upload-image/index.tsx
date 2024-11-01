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
  onChange?: (files: File[]) => void;
}

export default function UploadImage({ onChange }: Props) {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const uploadedImages = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...uploadedImages]);
    onChange?.([...files, ...uploadedImages]);
  };

  const handleRemoveImage = (index: number) => {
    setFiles((prev) => prev.filter((_, idx) => idx !== index));
    onChange?.(files.filter((_, idx) => idx !== index));
  };

  return (
    <div css={wrapper}>
      <label css={uploadImageButton}>
        <UploadPlus width="24px" height="24px" />
        <input type="file" accept="image/*" multiple onChange={handleFileInputChange} />
      </label>

      {files.map((file, index) => (
        <div css={imageWrapper}>
          <button css={deleteImageButton} onClick={() => handleRemoveImage(index)}>
            <div />
          </button>
          <img
            key={file.name}
            src={URL.createObjectURL(file)}
            alt={file.name}
            css={thumbnailImage}
          />
        </div>
      ))}
    </div>
  );
}
