import Link from "next/link";

const data = {
  features: [
    {
      name: "Rhymes",
      icon: "fa fa-music",
    },
    {
      name: "Stories",
      icon: "fa fa-book",
    },
    {
      name: "Videos",
      icon: "fa fa-youtube-play",
    },
  ],
};

const Fearures = () => (
  <div className="flex items-center justify-center pt-16 pb-8 border-t-4 border-b-8 border-orange-200 bg-orange-100">
    <div className="w-11/12 sm:w-9/12 grid grid-cols-1 sm:grid-cols-3">
      {data?.features.map(
        (item: { name: string | number | undefined; icon: any }) => (
          <div
            key={item?.name}
            className="flex justify-center border border-orange-300 p-4"
          >
            <div className="bg-yellow-600 rounded-full h-16 w-16 flex items-center justify-center my-4 mr-4">
              <i
                className={`${item?.icon} text-4xl text-white text-shadow`}
                aria-hidden="true"
              ></i>
            </div>
            <div>
              <h1 className="s-h1 text-shadow mb-2 text-yellow-900 text-3xl">
                {item?.name}
              </h1>
              <Link href="/rhymes">
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-xl">
                  Go{" "}
                  <i
                    className="fa fa-arrow-circle-o-right"
                    aria-hidden="true"
                  ></i>
                </button>
              </Link>
            </div>
          </div>
        )
      )}
    </div>
  </div>
);

export default Fearures;
