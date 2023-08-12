import { SelectedPage } from "@/components/shared/types";
import useSelectePageStore from "@/hooks/useSelectedPageStore";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactusPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/components/shared/HText";
import { FormEvent } from "react";

const ContactUs = () => {
  const { setSelectedPage } = useSelectePageStore();
  const inputStyles = `w-full mb-5 rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
  const {
    register,
    formState: { errors },
    trigger,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id={SelectedPage.ContactUs} className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView={"visible"}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText h1Style="uppercase">
            <span className="text-primary-500">join now</span> to get in shape
          </HText>
          <p className="my-5">
            Non aliqua duis deserunt officia officia pariatur ut. Velit sunt
            duis nisi fugiat esse do cupidatat velit esse esse dolor consequat
            cupidatat. Elit elit velit enim voluptate sit est id sint eu
            occaecat. Amet occaecat magna reprehenderit irure culpa ut.
          </p>
        </motion.div>

        {/* CONTACT FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView={"visible"}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              action="https://formsubmit.co/40c9d263fc4c3248c64078d7cf630232"
              method="POST"
              target="_blank"
              onSubmit={onSubmit}
            >
              <input
                type="text"
                placeholder="NAME"
                className={inputStyles}
                {...register("name", {
                  required: "This field is required.",
                  maxLength: { value: 100, message: "Max length is 100 char." },
                })}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-primary-500">
                  {errors.name.message}
                </p>
              )}

              <input
                type="email"
                placeholder="EMAIL"
                className={inputStyles}
                {...register("email", {
                  required: "This field is required.",
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Invalid email address.",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-primary-500">
                  {errors.email.message}
                </p>
              )}

              <textarea
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                className={inputStyles}
                {...register("message", {
                  required: "This field is required.",
                  maxLength: {
                    value: 2000,
                    message: "Max length is 2000 char.",
                  },
                })}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-primary-500">
                  {errors.message.message}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 bg-secondary-500 rounded-lg px-20 py-3 transition duration-500 hover:text-white uppercase"
              >
                Submit
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView={"visible"}
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="before:absolute md:before:content-evolvetext w-full before:-bottom-20 before:-right-10 before:-z-10">
              <img
                src={ContactusPageGraphic}
                alt="contact-us-page-graphic"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
