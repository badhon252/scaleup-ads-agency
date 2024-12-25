// "use client";

// import { motion } from "framer-motion";
// import { ReactNode } from "react";

// interface FadeInUpProps {
//   children: ReactNode;
//   delay?: number;
// }

// export function FadeInUp({ children, delay = 0 }: FadeInUpProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate="visible" // Add the animate prop
//       whileInView="visible"
//       viewport={{ once: true, margin: "-100px" }}
//       transition={{
//         duration: 0.5,
//         delay,
//         ease: [0.21, 0.47, 0.32, 0.98],
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// }
