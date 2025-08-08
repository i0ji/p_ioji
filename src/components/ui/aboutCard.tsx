import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function AboutCard({ data, to, className, id }: aboutCardModel) {
  return (
    <motion.div
      layoutId={id}
      layout
      className={clsx(
        "h-[40vh] w-[full]",
        "md:h-[30vh] md:w-[60vh]",
        "cursor-pointer rounded-lg border bg-transparent p-4 text-white",
        "transition-all duration-300 hover:shadow-lg",
        className,
      )}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {data.imgSrc && (
        <img
          className="mb-3 h-32 w-full rounded border border-white/30 object-cover"
          src={data.imgSrc}
          alt={data.title}
        />
      )}

      <h3 className="mb-2 text-lg font-semibold">{data.title}</h3>

      {(data.description || data.description) && (
        <p className="text-sm leading-relaxed text-white/80">
          {data.description || data.description}
        </p>
      )}

      <Link to={to} className="mt-3 text-xs text-white/60">
        Нажмите для подробностей →
      </Link>
    </motion.div>
  );
}
