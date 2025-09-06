// 获取鼠标位置
import { useEffect, useState } from 'react';

export default function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMoveHandler = (event: MouseEvent) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  // 引用自定义 hook useMousePosition 的组件初始化时执行
  useEffect(() => {
    //
    window.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return { ...position };
}
