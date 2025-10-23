const Heading = ({ title, subTitle }) => {
  return (
    <div className="text-center mb-12 space-y-4">
      <h1 className="text-3xl font-medium">{title}</h1>
      <p className="text-lg font-normal opacity-70">{subTitle}</p>
    </div>
  );
};

export default Heading;
