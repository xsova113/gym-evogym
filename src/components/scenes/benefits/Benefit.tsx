import { BenefitType, SelectedPage } from "@/components/shared/types";
import useSelectePageStore from "@/hooks/useSelectedPageStore";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Benefit = ({ description, icon, title }: BenefitType) => {
  const { setSelectedPage } = useSelectePageStore();

  return (
    <motion.div
      variants={childVariant}
      transition={{duration: 0.3}}
      className="border-2 border-gray-100 px-5 py-16 text-center rounded-lg mt-5"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;