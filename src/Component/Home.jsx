import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className='back-img px-[20px] py-[1px] md:py-[0px] md:flex md:px-[40px] items-center justify-between'>

      <div className='relative md:w-[40%] md:ml-[3rem] mt-[1rem] md:mt-[-3rem]'> {/* Add 'relative' here */}

        {/* Background Images Carousel */}
        <Slider {...settings}>
          <div className="tool"></div>
          <div className="tool1"></div>
          <div className="tool2"></div>
          <div className="tool3 "></div>
        </Slider>

        {/* FIXED TEXT OVERLAY */}
        <div className='absolute inset-0 flex items-center justify-center z-10'>
          <div className='text-center text-white bg-opacity-50 p-6 rounded-lg'>
            <h1 className='text-4xl font-bold mb-4'>BestGate Heritage</h1>
            <p className='text-xl'>Secondary School</p>
          </div>
        </div>

      </div>

      <div className="text-left">
        <div className='flex gap-[3rem] mt-[2rem] ml-[1rem] md:mt-[-6rem] md:ml-[0.6rem]'>
          <button className='px-[20px] py-[4px] bg-[blue] rounded-[3px] hover:scale-110 transition duration-200 cursor-pointer text-white'>
            Parent Login
          </button>
          <button className='px-[20px] py-[4px] bg-[blue] rounded-[3px] hover:scale-110 transition duration-200 cursor-pointer text-white'>
            Staff Login
          </button>
        </div>

        <div className=' px-[10px]  leading-[70px]'>
          <h1 className="text-gray-400 text-[30px] font-[600]">Our Special Features</h1>
          <div className="md:flex md:gap-[2rem] ">
            <div className="leading-[35px]">
              <p className="text-gray-300 md:text-[15px]font-[500]">Highly Qualified and Experienced Staff</p>
              <p className=" text-[15px] md:text-[15px] font-[500] text-gray-300">Produce confident and Cultured Pupils</p>
              <p className="text-[15px] md:text-[15px] font-[500] text-gray-300">School Buses</p>
            </div>
            
            <div className="leading-[35px]">
              <p className="md:text-[15px] font-[500] text-gray-300">Spacious and Conducive Classroom</p>
              <p className="md:text-[15px] font-[500] text-gray-300">Affordable and Moderate School Fees</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}