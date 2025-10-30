"use client";

import { useState } from "react";
import { Column, Row, Media, IconButton } from "@once-ui-system/core";
import styles from "./ImageCarousel.module.scss";

interface ImageCarouselProps {
  images: string[];
  title: string;
}

export function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Show single image without carousel controls if only one image
  if (images.length === 1) {
    return (
      <Media
        priority
        aspectRatio="16 / 9"
        radius="m"
        alt={`${title} - Image 1`}
        src={images[0]}
      />
    );
  }

  return (
    <Column fillWidth gap="16" className={styles.carouselContainer}>
      {/* Main Image Display */}
      <div className={styles.imageWrapper}>
        <Media
          priority={currentIndex === 0}
          aspectRatio="16 / 9"
          radius="m"
          alt={`${title} - Image ${currentIndex + 1}`}
          src={images[currentIndex]}
        />

        {/* Navigation Arrows */}
        <div className={styles.leftArrow}>
          <IconButton
            icon="chevronLeft"
            size="l"
            tooltip="Previous"
            onClick={goToPrevious}
            variant="ghost"
          />
        </div>
        <div className={styles.rightArrow}>
          <IconButton
            icon="chevronRight"
            size="l"
            tooltip="Next"
            onClick={goToNext}
            variant="ghost"
          />
        </div>

        {/* Image Counter */}
        <div className={styles.counter}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <Row gap="8" horizontal="center" wrap>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`${styles.thumbnail} ${
              index === currentIndex ? styles.activeThumbnail : ""
            }`}
            aria-label={`Go to image ${index + 1}`}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </button>
        ))}
      </Row>
    </Column>
  );
}
