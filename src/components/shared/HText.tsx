type HTextProps = {
  children: React.ReactNode;
  h1Style?: string;
};

const HText = ({ children, h1Style }: HTextProps) => {
  return (
    <div>
      <h1 className={`basis-3/5 font-montserrat text-3xl font-bold ${h1Style}`}>
        {children}
      </h1>
    </div>
  );
};

export default HText;
