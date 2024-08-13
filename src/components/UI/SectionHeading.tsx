type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <p className="text-white text-2xl lg:text-5xl text-center tracking-wider pb-12 lg:pb-16">
      {children}
    </p>
  );
};

export default SectionHeading;
