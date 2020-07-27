const IndexPage = () => (
  <div>
    {/* Header */}
    <div className="grid grid-cols-1 sm:grid-cols-2 p-4 shadow bg-blue-300">
      <div>
        <img
          src="/KUSHISCHOOLLOGO.png"
          alt="my image"
          className="w-full sm:w-64"
        />
      </div>
    </div>
    {/* WelcomeScreen */}
    <div className="flex justify-center bg-blue-300 welcome">
      <div className="grid grid-cols-1 sm:grid-cols-2 w-11/12 sm:w-3/4 bg-white p-2 shadow-md rounded relative z-3" style={{ marginBottom: '-80px' }}>
        <div className="shadow-md">
          <img
            src="/welcome.jpg"
            alt="my image"
            className="w-full h-full shadow-md rounded-l-md"
          />
        </div>
        <div className="bg-white hidden sm:block shadow-md rounded-l-md">
          <h1>Features</h1>
          <h1>Rhymes</h1>
          <h1>Stories</h1>
          <h1>Maths</h1>
          <h1>Literacy</h1>
          <h1>Drag and Drop</h1>
          <h1>Awareness</h1>
        </div>
      </div>
    </div>
    {/* Footer */}
    <div className="bg-blue-400 p-2">Footer</div>
  </div>
);

export default IndexPage;
