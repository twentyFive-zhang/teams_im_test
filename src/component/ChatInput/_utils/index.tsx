import { useEffect, useRef, useState } from 'react';

export const useAllowDrop = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [isDropping, setIsDropping] = useState<boolean>(false);

  useEffect(() => {
    const onDragOver = (event: DragEvent) => {
      console.log('onDragOver');
      event.preventDefault();
      setIsDropping(true);
    };
    const onDragLeave = () => {
      console.log('onDragLeave');
      setIsDropping(false);
    };
    const onDragEnd = () => {
      console.log('onDragEnd');
      setIsDropping(false);
    };
    const onDrop = (event: DragEvent) => {
      console.log('onDrop');
      setIsDropping(false);
      event.preventDefault();
      console.log(event, event.dataTransfer?.files, event.dataTransfer?.items);
    };

    wrapperRef.current?.addEventListener<'dragover'>('dragover', onDragOver);
    wrapperRef.current?.addEventListener<'dragleave'>('dragleave', onDragLeave);
    wrapperRef.current?.addEventListener<'dragend'>('dragend', onDragEnd);
    wrapperRef.current?.addEventListener<'drop'>('drop', onDrop);
    console.log(wrapperRef.current ? 'ready' : 'no');
    return () => {
      wrapperRef.current?.removeEventListener<'dragover'>(
        'dragover',
        onDragOver,
      );
      wrapperRef.current?.removeEventListener<'dragleave'>(
        'dragleave',
        onDragLeave,
      );
      wrapperRef.current?.removeEventListener<'dragend'>(
        'dragend',
        onDragLeave,
      );
      wrapperRef.current?.removeEventListener<'drop'>('drop', onDrop);
    };
  }, []);
  return { wrapperRef, isDropping };
};
