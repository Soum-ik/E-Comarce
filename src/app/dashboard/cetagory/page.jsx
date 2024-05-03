import DisplayCetagory from "@/components/Cetagory/DisplayCetagory";
// import { getCetagory, header_info } from "@/utility/getData";

async function page() {
  // const { data } = await getCetagory();
  // const user_id = await header_info();

  return (
    <div className=" bg-gray-100 rounded-md p-3 container">
      {/* <DisplayCetagory data={data} user_id={user_id} /> */}
    </div>
  );
}

export default page;
