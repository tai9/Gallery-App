import React, { useRef, useLayoutEffect, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image, { ImageProps } from "../../Gallery/Image";

type GirdProps = {
  delayPerPixel?: number;
  images: Array<ImageProps>;
};

const GridImages = ({ delayPerPixel = 0.0008, images }: GirdProps) => {
  const originOffset = useRef({ top: 0, left: 0 });
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, []);

  return (
    <motion.div initial="hidden" animate={controls} variants={{}}>
      {images.map((image, i) => (
        <GridItem
          key={i}
          item={image}
          i={i}
          originIndex={26}
          delayPerPixel={delayPerPixel}
          originOffset={originOffset}
        />
      ))}
    </motion.div>
  );
};

type GridItemProps = {
  delayPerPixel: number;
  i: number;
  originIndex: number;
  originOffset: any;
  item: ImageProps;
};

function GridItem({
  delayPerPixel,
  i,
  originIndex,
  originOffset,
  item,
}: GridItemProps) {
  const delayRef = useRef(0);
  const offset = useRef({ top: 0, left: 0 });
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    offset.current = {
      top: element.offsetTop,
      left: element.offsetLeft,
    };

    if (i === originIndex) {
      originOffset.current = offset.current;
    }
  }, [delayPerPixel]);

  useEffect(() => {
    const dx = Math.abs(offset.current.left - originOffset.current.left);
    const dy = Math.abs(offset.current.top - originOffset.current.top);
    const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    delayRef.current = d * delayPerPixel;
  }, [delayPerPixel]);

  return (
    <Image
      urls={item.urls}
      alt_description={item.alt_description}
      description={item.description}
      ref={ref}
      variants={itemVariants}
      custom={delayRef}
    />
  );
}

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: (delayRef: any) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: delayRef.current },
  }),
};

export default GridImages;
