const PageTitle = ({ title, className = '' }) => {
  // Combine default classes with the provided className
  const combinedClassName = `text-4xl font-semibold ${className}`;

  return (
    <h2 className={combinedClassName}>{title}</h2>
  );
};

export default PageTitle;