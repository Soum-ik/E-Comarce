import { getOrder, header_info } from "@/utility/getData";

async function page() {
  const data = await header_info();

  const { order } = await getOrder(data);
  console.log(order, "data dashboard");
  return (
    <div className=" w-full border p-3 rounded-md">
      <h1 className=" text-center text-2xl">Order List </h1>

      <div className="   grid grid-cols-2   md:grid-cols-1 gap-5 ">
        {order?.map((data, index) => (
          <div key={index} className=" rounded-md border p-3">
            <div>
              <div className=" flex justify-between">
                <h1 className=" text-xl  font-medium text-black">
                  Trans :{" "}
                  <span className="   text-lg text-black/6">
                    {" "}
                    {data.tranjection_id}
                  </span>
                </h1>
                <h1 className=" text-xl  font-medium text-black">
                  Paid Status :{" "}
                  <span className="  text-lg text-black/6">
                    {" "}
                    {data.paidStatus ? "True" : "False"}
                  </span>
                </h1>
              </div>
              <div className=" flex mt-5 items-start justify-between gap-3">
                <div>
                  <h1 className=" text-xl  font-medium text-black ">
                    Email :{" "}
                    <span className=" text-lg text-black/6">
                      {" "}
                      {data?.extraInformation.email}{" "}
                    </span>
                  </h1>
                  <h1 className=" text-xl  font-medium text-black ">
                    FirstName :{" "}
                    <span className=" text-lg text-black/6">
                      {" "}
                      {data?.extraInformation.firstName}{" "}
                    </span>
                  </h1>
                  <h1 className=" text-xl  font-medium text-black ">
                    LastName :{" "}
                    <span className=" text-lg text-black/6">
                      {" "}
                      {data?.extraInformation.lastName}{" "}
                    </span>
                  </h1>
                </div>
                <div>
                  <h1 className=" text-xl  font-medium text-black ">
                    Total :{" "}
                    <span className=" text-lg text-black/6">
                      {" "}
                      {data?.extraInformation.total}{" "}
                    </span>
                  </h1>
                  <h1 className=" text-xl  font-medium text-black ">
                    PostCode :{" "}
                    <span className=" text-lg text-black/6">
                      {" "}
                      {data?.extraInformation.postCode}{" "}
                    </span>
                  </h1>
                  <h1 className=" text-xl  font-medium text-black ">
                    Road :{" "}
                    <span className=" text-lg text-black/6">
                      {" "}
                      {data?.extraInformation.road}{" "}
                    </span>
                  </h1>
                </div>
                <div>
                  <h1 className=" text-xl  font-medium text-black ">
                    City :{" "}
                    <span className=" text-lg text-black/6">
                      {" "}
                      {data?.extraInformation.city}{" "}
                    </span>
                  </h1>
                  <h1 className=" text-xl  font-medium text-black ">
                    Country :{" "}
                    <span className=" text-lg text-black/6">
                      {" "}
                      {data?.extraInformation.country}{" "}
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
