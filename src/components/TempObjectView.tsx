import SimpleTable from "./SimpleTable";

export function TempObjectView(props: { data: object }) {
  return (
    <SimpleTable
      columns={[
        {
          header: "Feltnavn",
          renderer: (r) => r.id,
        },
        {
          header: "Feltverdi",
          renderer: (r) => {
            if (r.value && typeof r.value === "object")
              return <TempObjectView data={r.value} />;
            return r.value;
          },
        },
      ]}
      rows={Array.from(Object.entries(props.data), ([id, value]) => ({
        id,
        value,
      }))}
    />
  );
}
