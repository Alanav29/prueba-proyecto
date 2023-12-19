import "../../styles/gallery/galleryStyle.css";
import GalleryProduct from "../../components/gallery/GalleryProduct";
import { useSelector } from "react-redux";
import { selectProducts } from "../../features/productsFeature";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = () => {
  const products = useSelector(selectProducts);

  return (
    <main id="gallery" className="container-fluid mt-4">
      <h1>Galería</h1>
      <section className="mx-4">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 425: 1, 450: 2, 740: 3, 1024: 4 }}
        >
          <Masonry>
            {products.map((product) => {
              return <GalleryProduct product={product} key={product._id} />;
            })}
          </Masonry>
        </ResponsiveMasonry>
      </section>
    </main>
  );
};

export default Gallery;
