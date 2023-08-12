import useSelectePageStore from "@/hooks/useSelectedPageStore";
import { BenefitType, SelectedPage } from "@/components/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HText from "@/components/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/components/shared/ActionButton";
import BenefitPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="w-6 h-6" />,
    title: "State of the Art Facilities",
    description:
      "Sint in incididunt elit culpa cupidatat aliquip laboris minim sunt ullamco elit magna. Nulla quis sit sit quis laboris enim aliquip. Ad ad veniam culpa laboris et nulla et elit.",
  },
  {
    icon: <UserGroupIcon className="w-6 h-6" />,
    title: "100's of Diverse Classes",
    description:
      "Id in eu adipisicing laboris proident consectetur laborum.Ea reprehenderit qui nostrud laborum.Cupidatat incididunt tempor esse veniam eiusmod.",
  },
  {
    icon: <AcademicCapIcon className="w-6 h-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem id velit sint est enim aliquip dolor Lorem anim exercitation.Cupidatat labore consectetur dolor reprehenderit cillum qui laboris pariatur non magna enim laborum incididunt.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const Benefits = () => {
  const { setSelectedPage } = useSelectePageStore();

  return (
    <section
      id={SelectedPage.Benefits}
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText h1Style="uppercase">More than just a gym.</HText>
          <p className="my-5 text-sm">
            Get fit and have fun at our modern gym! We offer top-notch
            equipment, expert trainers, and a supportive community to help you
            reach your fitness goals. Join us today and start your journey to a
            healthier you!
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={container}
          className="grid md:grid-cols-3 grid-cols-1 gap-8"
        >
          {benefits.map((benefit) => (
            <Benefit key={benefit.title} {...benefit} />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHICS */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:-z-10 before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView={"visible"}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText h1Style="uppercase">
                    Millions of happy members getting{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView={"visible"}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Fugiat tempor amet id tempor occaecat mollit magna elit
                consequat officia. Occaecat laborum anim amet fugiat veniam
                irure amet cupidatat ullamco. Est quis non labore id occaecat
                excepteur elit aute tempor labore non nostrud. Mollit laborum
                dolor reprehenderit ullamco tempor id Lorem labore consequat
                minim nisi consequat Lorem veniam.
              </p>
              <p className="mb-5">
                Amet culpa qui anim est officia eiusmod culpa adipisicing mollit
                ad ipsum. Nulla nulla consequat ad ullamco aliquip quis
                adipisicing pariatur consectetur minim Lorem in tempor veniam.
                Lorem Lorem eu pariatur ea dolore ea tempor laboris ad aliquip
                consectetur.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:-z-10 before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  join now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
