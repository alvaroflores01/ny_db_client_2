export default function Header() {
  return (
    <div className="container h-1/2 mx-auto px-8 flex flex-col justify-center align-center  ">
      <div className="text-center flex flex-col">
        <h1 className="text-7xl ">Welcome to New York City</h1>
        <p className="text-2xl italic font-light w-1/2 mx-auto">
          We have gathered over 10 MILLION data points, to help you learn about{" "}
          <span className="text-green-500">the good,</span>{" "}
          <span className="text-red-400">the bad,</span>and{" "}
          <span className="text-blue-400">the complex</span> about NYC!
        </p>
      </div>
    </div>
  );
}
