const Section = ({ children, ...props }) => {
  return (
    <section {...props}>
      <h2>Examples</h2>
      {children}
    </section>
  );
};

export default Section;
