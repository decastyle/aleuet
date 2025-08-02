export type Image = {
    sources: {
        avif: string;
        webp: string;
        jpg?: string; // Adjust based on your format (jpg, png, etc.)
    };
    img: {
        src: string;
        w: number;
        h: number;
    };
};

const rawImages = import.meta.glob<Image>("$lib/images/*.{jpg,jpeg,png,webp}", {
    query: { enhanced: true },
    import: "default",
    eager: true,
});

export const images = Object.fromEntries(
    Object.entries(rawImages).map(([path, image]) => [
        path.split("/").pop(),
        image,
    ])
);
