import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

const Footer = () => {
  const customSize: SizeProp = "lg";
  return (
    <div className="bg-[#080808] py-[2%] grow bottom-0 w-full">
      <div className="max-w-screen text-gray-800 flex-wrap justify-center flex font-serif">
        <div className="p-5 basis-[25%] ps-[10%]">
          <div className=" text-xl  text-white font-extrabold">Treatments</div>
          <div className="text-[#748182] my-8 text-[15px] flex flex-col gap-2">
            <Link href="/abhyangam">Abhyangam</Link>

            <Link href="/shirodhara">Shirodhara</Link>

            <Link href="/kashayadhara">Kashayadhara</Link>

            <Link href="/greeva-basti">Greeva Basti</Link>

            <Link href="/janu-basti">Janu Basti</Link>

            <Link href="/kati-basti">Kati Basti</Link>

            <Link href="/spine-basti">Spine Basti</Link>

            <Link href="/kizhi">Kizhi</Link>

            <Link href="/mukha-lepam">Mukha Lepam</Link>

            <Link href="/netra-tarpanam">Netra Tarpanam</Link>

            <Link href="/panchakarma">Panchakarma</Link>

            <Link href="/private-bams-colleges">Private BAMS Colleges</Link>

            <Link href="/bams-fees">BAMS Fees</Link>
          </div>
        </div>
        <div className="p-5 basis-[25%]">
          <div className="text-xl  text-white font-extrabold">
            About Naiminath Ayurveda
          </div>
          <p className="text-[#748182] my-8 text-[15px] font-serif leading-8 tracking-wide">
            To provide world class education and treatment, this 100 bedded
            state of art Ayurvedic Hospital is functional since 2016 where more
            than 200 patients visit the Outdoor Department every day and around
            40 patients are present in the Indoor Department.
          </p>
        </div>
        <div className="p-5 basis-[25%]">
          <div className=" text-white font-extrabold flex flex-col">
            <div className="text-xl">Naiminath Ayurveda</div>
            <div className="mt-8 text-[14px]">ADDRESS</div>
            <div className="text-[15px] font-medium mt-2 font-serif leading-8 tracking-wide">
              N.H. 19, Nawalpur, Kuberpur, Behind Maruti TrueValue Showroom,
              Etmadpur, Agra – 283202, Uttar Pradesh, India.
            </div>
            <Link
              href="/hospPage/bams"
              className="text-[#50b9ce] text-[15px] font-sans font-semibold mt-10  hover:text-white"
            >
              🡪 UP BAMS Counselling
            </Link>
            <Link
              href="/doc/anti_rag.pdf"
              className="text-[#50b9ce] text-[15px] font-sans font-semibold mt-3  hover:text-white"
            >
              🡪 Anti Ragging Committee
            </Link>
          </div>
        </div>
        <div className="p-5 basis-[25%] ">
          <div className=" text-white font-extrabold flex flex-col">
            <div className="text-xl">Get In Touch</div>
            <div className="mt-8 text-[14px]">EMAIL</div>
            <div className="text-[14px] font-serif font-medium text-start mt-2">
              <div>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size={customSize}
                  className="pr-3"
                />
                <a href={'mailto:recipient@example.com?subject=Subject%20Text&body=Body%20Text'}>info@naiminathayurveda.org</a>
              </div>

              <div className="mt-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size={customSize}
                  className="pr-3"
                />
                <a href={'mailto:recipient@example.com?subject=Subject%20Text&body=Body%20Text'}> namcagra@gmail.com</a>
              </div>
            </div>
            <div className="mt-8 text-[14px]">MOBILE</div>
            <div className="text-[14px] font-serif font-medium text-start mt-2 text-[#50b9ce]">
              <div className=" cursor-pointer hover:text-white">
                <FontAwesomeIcon
                  icon={faPhone}
                  size={customSize}
                  className="pr-2"
                />
                <a href={`tel:${9522004573}`} >+91-9522004573</a>
              </div>

              <div className="mt-2  cursor-pointer hover:text-white">
                <FontAwesomeIcon
                  icon={faPhone}
                  size={customSize}
                  className="pr-2"
                />
              <a href={`tel:${9522004573}`} >+91-9522004573</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
