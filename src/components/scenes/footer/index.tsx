import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto gap-16 w-5/6 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Fugiat culpa exercitation officia irure ullamco incididunt ut.
            Cupidatat aute do mollit ex proident deserunt et. Commodo proident
            id adipisicing labore enim amet nisi sit culpa.
          </p>
          <p className="capitalize">© Evogym all rights reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Laborum cillum amet</p>
          <p className="my-5">Aute culpa voluptate</p>
          <p>Dolore fugiat id</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Mollit ea commodo eiusmod tempor.</p>
          <p>(111)222-3333</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
