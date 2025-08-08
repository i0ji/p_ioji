import { useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { aboutData } from "data/data";

const postVariants: Variants = {
  initial: { y: 100, opacity: 0 },
  enter: { y: 0, opacity: 1 },
  exit: { y: -100, opacity: 0 },
};

type RouteParams = {
  id: string;
};

export default function AboutPost() {
  const { id } = useParams<RouteParams>();
  const navigate = useNavigate();

  const item = useMemo(
    () => aboutData.find((d) => String(d.id ?? d.slug ?? d.title) === id),
    [id],
  );

  if (!item) {
    navigate("/", { replace: true });
    return null;
  }

  const layoutId = `about-${String(item.id ?? item.slug ?? item.title)}`;

  return (
    <motion.div
      className="min-h-screen w-full bg-black text-white"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={postVariants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="p-4">
        <Link to="/" className="text-white/80 underline hover:text-white">
          ← Назад на главную
        </Link>
      </div>

      <div className="mx-auto max-w-5xl p-4 sm:p-8">
        <motion.div
          layoutId={layoutId}
          className="rounded-xl border border-white/30 bg-transparent p-6"
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
        >
          {item.imgSrc && (
            <img
              className="mb-6 w-full rounded-lg border border-white/30 object-cover"
              src={item.imgSrc}
              alt={item.title}
            />
          )}

          <h1 className="mb-4 text-3xl font-semibold">{item.title}</h1>

          {item.description && (
            <p className="mb-4 text-lg text-white/80">{item.description}</p>
          )}

          {item.text && (
            <div className="space-y-4 leading-relaxed text-white/70">
              <p>{item.text}</p>

              {/* Дополнительный контент для демонстрации */}
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-medium text-white">
                  Дополнительная информация
                </h3>
                <p>
                  Здесь можно разместить расширенное описание, изображения,
                  списки или любой другой контент.
                </p>

                <div className="mt-6 flex gap-3">
                  <button className="rounded border border-white/80 px-4 py-2 text-sm transition-colors hover:bg-white hover:text-black">
                    Действие 1
                  </button>
                  <button className="rounded border border-white/80 px-4 py-2 text-sm transition-colors hover:bg-white hover:text-black">
                    Действие 2
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
