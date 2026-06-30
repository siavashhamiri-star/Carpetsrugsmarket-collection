export async function generateStaticParams() {
  return [{ vendorId: 'default' }];
}

export default function Page({ params }: { params: { vendorId: string } }) {
  return (
    <main style={{ padding: '20px' }}>
      <h1>Vendor Dashboard</h1>
      <p>Vendor ID: {params.vendorId}</p>
    </main>
  );
}

