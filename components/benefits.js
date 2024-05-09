import Image from "next/image";
import React from "react";
import Container from "./container";

const Benefits = (props) => {
  const { data } = props;
  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}
          id={props.imgPos}
        >
          <div>
            {props.imgPos === "right" ? (
              mapsWidget()
            ) : (
              <Image
                src={data.image}
                width="521"
                height="auto"
                alt="Benefits"
                className={"object-cover"}
                placeholder="blur"
                blurDataURL={data.image.src}
              />
            )}
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {data.desc}
              </p>
            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

function mapsWidget() {
  return (
    <>
      <iframe
        width="382"
        height="421"
        className="lg: pt-12"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=382&amp;height=421&amp;hl=en&amp;q=R.%20Cidade%20de%20Pinhel%2012A%20Barreiro+(Gabinete)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>{" "}
      <a href="https://www.pferdeversicherung.at/pferdekrankenversicherung/">
        Pferde Krankenversicherung
      </a>{" "}
      <script
        type="text/javascript"
        src="https://embedmaps.com/google-maps-authorization/script.js?id=0faf5e45075fd534e489a207a89fad125cc62438"
      ></script>
    </>
  );
}

function Benefit(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-3 bg-cyanBlue rounded-md w-8 h-1 "></div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400 whitespace-pre-line">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}

export default Benefits;
