import img from "../../assets/img1.jpeg";
const ArticleSection = () => {
  return (
    <div className="w-full mx-auto px-4 py-10">
      <div className="md:flex md:items-center md:space-x-8 space-y-8 md:space-y-0">
        <div className="md:w-1/2">
          <img
            src={img}
            alt="Box Office"
            className=" object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Become a part of the world
          </h1>
          <p className="text-lg mb-6">
            It’s not a wonder that there are millions of children deprived of
            education. They are able to get proper education, even at the
            primary level. Their society is not able to arrange such facilities.
            Moreover, they are not able to get proper nutrition to live a
            healthy life. But these miseries can be dissolved easily by
            following some simple facts. Charity organizations are doing a great
            service for society by improving the condition of helpless
            children’s education and nutritional conditions.
          </p>
          <button className="text-red-500 font-semibold underline">
            See more...
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;
