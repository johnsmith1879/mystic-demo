'use client';

import { useState } from 'react';
import { Gallery as GalleryWithLightbox, LightboxImage } from '@/components/ui/Lightbox';

// ============================================
// CLIENT GALLERY WRAPPER
// ============================================

interface ProjectGalleryProps {
  images: LightboxImage[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  return <GalleryWithLightbox images={images} columns={2} />;
}
