const Middle = () => {
  return (
    <section className="bg-[#FF681B]">
      <div className="max-w-[1080px] mx-auto flex justify-between items-center p-7 pt-12 pb-12">
        <div className="flex flex-col">
          <h2 className="text-white mt-12 text-[45px] font-bold">
            공간에서 경험까지, <br />
            완전히 새롭게{" "}
          </h2>
          <h4 className="text-white mb-12  text-[40px] ">
            Beyond Home, Zigbang
          </h4>
        </div>
        <div className="">
          <img
            className="m-12 flex items-center h-[200px] "
            src="/images/slideimages/slide.gif"
            alt="slide_image"
          />
        </div>
      </div>
    </section>
  );
};

export default Middle;
