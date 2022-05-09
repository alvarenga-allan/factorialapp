export const ItemList = ({ title, subtitle, linkHref }) => {
  return (
    <>
      <dt>{title}</dt>
      <dd>
        {subtitle}
        <a href={linkHref}>Veja mais</a>
      </dd>
    </>
  );
};
