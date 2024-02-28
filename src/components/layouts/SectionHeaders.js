export default function SectionHeaders({ subHeader, mainHeader }) {
  return (
    <>
      <h3 className="leading-4 uppercase text-xl font-semibold text-gray-500">
        {subHeader}
      </h3>
      <h2 className="text-4xl font-bold text-primary italic">{mainHeader}</h2>
    </>
  );
}
