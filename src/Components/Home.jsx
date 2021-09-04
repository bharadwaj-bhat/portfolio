import { Content } from "./HomeInner/Content";
import { Nav } from "./HomeInner/Nav";
import { motion } from "framer-motion";
export const Home = () => {
  return (
    <motion.div id="Home">
      <Nav />
      <Content />
    </motion.div>
  );
};
