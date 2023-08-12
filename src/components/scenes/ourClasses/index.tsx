import { ClassType, SelectedPage } from "@/components/shared/types";
import useSelectePageStore from "@/hooks/useSelectedPageStore";
import { motion } from "framer-motion";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import HText from "@/components/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "weight training classes",
    description:
      "Nulla nisi Lorem ut occaecat ea duis do ad do tempor excepteur. Magna commodo tempor dolore voluptate sint do adipisicing.",
    image: image1,
  },
  {
    name: "yoga classes",
    description:
      "Nulla nisi Lorem ut occaecat ea duis do ad do tempor excepteur. Magna commodo tempor dolore voluptate sint do adipisicing.",
    image: image2,
  },
  {
    name: "ab core classes",
    description:
      "Nulla nisi Lorem ut occaecat ea duis do ad do tempor excepteur. Magna commodo tempor dolore voluptate sint do adipisicing.",
    image: image3,
  },
  {
    name: "advanture classes",
    description:
      "Nulla nisi Lorem ut occaecat ea duis do ad do tempor excepteur. Magna commodo tempor dolore voluptate sint do adipisicing.",
    image: image4,
  },
  {
    name: "fitness classes",
    description:
      "Nulla nisi Lorem ut occaecat ea duis do ad do tempor excepteur. Magna commodo tempor dolore voluptate sint do adipisicing.",
    image: image5,
  },
  {
    name: "training classes",
    description:
      "Nulla nisi Lorem ut occaecat ea duis do ad do tempor excepteur. Magna commodo tempor dolore voluptate sint do adipisicing.",
    image: image6,
  },
];

const OurClasses = () => {
  const { setSelectedPage } = useSelectePageStore();

  return (
    <section
      id={SelectedPage.OurClasses}
      className="w-full bg-primary-100 py-40"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 50 },
          }}
          className="mx-auto w-5/6"
        >
          <div className="md:w-3/5">
            <HText h1Style="uppercase">our classes</HText>
            <p>
              In exercitation excepteur occaecat eu occaecat cupidatat duis
              laborum id cupidatat laborum in minim. Qui nostrud culpa ipsum
              labore commodo. Sunt dolor reprehenderit commodo commodo
              incididunt ipsum magna ipsum. Ut minim in incididunt deserunt
              exercitation et sint sint ea do aute. Et id velit in enim ipsum et
              ex occaecat veniam.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden snap-x">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class {...item} key={`${item.name}-${index}`} />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
