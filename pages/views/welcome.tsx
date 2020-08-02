const data = {
  welcome: {
    img: "/welcome.jpg",
    text: {
      heading: "Play, Explore and Learn.",
      desc:
        "Programs of Kushi School include world-class curriculum and knowledgeable child development professionals that meet the needs of children at every age and stage.",
    },
  },
}

const Welcome = () => (
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
);

export default Welcome;
