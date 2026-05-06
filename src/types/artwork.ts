export type PublicArtwork = {
  id: number;
  slug: string;
  title: string;
  year: string | null;
  medium: string | null;
  size: string | null;
  category: string | null;
  status: string;
  coverImageUrl: string | null;
  coverThumbUrl: string | null;
  description: string | null;
  descriptionTh: string | null;
  createdAt: string;
};

export type PublicArtworkDetail = PublicArtwork & {
  images: {
    id: number;
    imageUrl: string;
    thumbUrl: string | null;
    altText: string | null;
    sortOrder: number;
  }[];
};