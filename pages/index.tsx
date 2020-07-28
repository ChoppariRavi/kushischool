import Link from "next/link";

export interface Props {
  data: {
    logo: string;
    welcome: {
      img: string;
      text: {
        heading: string;
        desc: string;
      };
    };
    features: any;
    footer: {
      copyRights: string;
    };
  };
}

const IndexPage = ({ data }: Props) => (
  <div>
    {/* Header */}
    <div className="grid grid-cols-1 shadow bg-blue-300">
      <div className="flex justify-center">
        <img src={data?.logo} alt="my image" className="w-full sm:w-64" />
      </div>
    </div>
    {/* WelcomeScreen */}
    <div className="flex justify-center bg-blue-300 welcome">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 w-11/12 sm:w-3/4 bg-white p-2 shadow-md rounded relative z-3"
        style={{ marginBottom: "-50px" }}
      >
        <div className="shadow-md">
          <img
            src={data?.welcome?.img}
            alt="my image"
            className="w-full h-full shadow-md rounded-l-md"
          />
        </div>
        <div className="hidden sm:flex flex-col justify-center shadow-md rounded-r-md p-6">
          <h1 className="s-h1 text-3xl">{data?.welcome?.text?.heading}</h1>
          <h5 className="py-2">{data?.welcome?.text?.desc}</h5>
        </div>
        <div className="flex sm:hidden flex-col justify-center shadow-md rounded-r-md p-2 bg-gray-200 text-center bg-opacity-50">
          <h1 className="s-h1 text-xl">{data?.welcome?.text?.heading}</h1>
        </div>
      </div>
    </div>
    {/* Features */}
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
    {/* Footer */}
    <div className="bg-blue-400 p-2 fixed bottom-0 w-full">
      {data?.footer?.copyRights}
    </div>
  </div>
);

export function getStaticProps() {
  return {
    props: {
      data: {
        logo: "/KUSHISCHOOLLOGO.png",
        welcome: {
          img: "/welcome.jpg",
          text: {
            heading: "Play, Explore and Learn.",
            desc:
              "Programs of Kushi School include world-class curriculum and knowledgeable child development professionals that meet the needs of children at every age and stage.",
          },
        },
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
        footer: {
          copyRights: "copyRights",
        },
      },
    },
  };
}

export default IndexPage;
