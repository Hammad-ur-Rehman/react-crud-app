import React from "react";
import { Oval } from "react-loader-spinner";

const Loading = () => {
  
  // const [loading, setloading] = useState(true);


  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setloading(false);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);
  
  return (
    <>
      
      <div className="spinner">
        <Oval
          height={100}
          width={100}
          color="#4fa94d"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
        </div>
    </>
  );
};

export default Loading;
