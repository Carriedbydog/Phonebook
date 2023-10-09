import { useEffect, useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState(null);
  const close = () => setIsModalOpen(false);
  const open = el => {
    setIsModalOpen(true);
    setContent(el);
  };
  const toggle = () => setIsModalOpen(prev => !prev);
  useEffect(() => {
    isModalOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [isModalOpen]);
  return { isModalOpen, close, open, toggle, content };
};
