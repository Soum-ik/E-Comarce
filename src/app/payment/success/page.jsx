 
import Order from "@/components/checkout/order"; 

function page({ searchParams }) {
  const { tran_id } = searchParams;

  return (
    <div className=" text-center text-5xl">
      <Order data={tran_id} />
    </div>
  );
}
export default page;
