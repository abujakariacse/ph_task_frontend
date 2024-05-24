const NotFound = () => {
  return (
    <div className="test">
      <div className="bg-gray-100 px-2 text-center">
        <div className="h-screen flex flex-col justify-center items-center">
          <h1 className="text-8xl font-extrabold text-red-500">404</h1>
          <p className="text-4xl font-medium text-gray-800">Page Not Found</p>
          <p className="text-lg text-gray-800 mt-4">
            The page you're looking for doesn't exist or an another error
            occured. <br />
            <a href="/">
              <b>Go back</b>
            </a>{" "}
            or head over to RannaBanna.com to choose a new direction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
