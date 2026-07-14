interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="text-center flex flex-col items-center justify-center">
      <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold">{title}</h2>
      <div className="border-b-3 border-foreground w-1/2 mt-6"></div>
    </div>
  );
};

export default SectionTitle;
