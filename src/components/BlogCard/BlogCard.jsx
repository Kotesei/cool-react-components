import "./blogCard.css";

// Example Use Case with Random Data (If using map)
// const cardsArray = [
//   {
//     categories: ["Tracking", "iPhone", "Something", "Test"],
//     title: "Dopamine Levels!",
//     description:
//       "Here we see poor old man who won't stop scrolling... send help man.",
//     imageSrc: img,
//     imagePos: `0 23%`,
//     date: "03/11/25",
//     author: "Kotesei",
//     authorImage: img,
//   },
// ];

//////////////////////////////////////
////////Inside App/////////////
////////////////////////////
// <BlogCard
//   date="03/11/25"
//   title="Something Title.."
//   author="Kotesei"
// ></BlogCard>
//
//
/////////////// OR //////////////
//
//
// {cardsArray.map(
//   (
//     {
//       categories,
//       title,
//       description,
//       imageSrc,
//       imagePos,
//       date,
//       author,
//       authorImage,
//     },
//     i
//   ) => {
//     return (
//       <BlogCard
//         image={imageSrc}
//         key={`${categories}${i}`}
//         categories={categories}
//         title={title}
//         imagePos={imagePos}
//         date={date}
//         author={author}
//         authorImage={authorImage}
//       >
//         {description}
//       </BlogCard>
//     );
//   }
// )}
//////////////////////////////////////
////////////////////////////////
////////////////////////////

export default function BlogCard({
  containerClass = "flex flex-col w-74 p-4 bg-linear-to-bl from-black to-fuchsia-700 rounded-xl border-1 shadow-lg shadow-black",
  categories,
  categoryClass = "text-black mb-2 text-sm font-figtree font-bold bg-white w-fit px-2 py-[2px] rounded tracking-tight",
  image,
  imageContainerClass = "h-38 rounded-t-xl mb-5 overflow-hidden shadow-lg border-white",
  imagePos = `0 25%`,
  title,
  titleClass = "mb-3 text-xl font-extrabold font-figtree text-white",
  children: description = "No Description!",
  childClass = "font-figtree text-white text-sm",
  date = "an unknown date!",
  dateClass = "tracking-tight text-xs mb-1 font-figtree text-white",
  author = "Unknown",
  authorImage,
}) {
  return (
    <div className={containerClass}>
      <div className={imageContainerClass}>
        {image && (
          <img
            style={{ objectPosition: imagePos }}
            className={`object-cover w-full h-39`}
            src={image}
          />
        )}
      </div>
      <div className="flex flex-wrap gap-x-2">
        {categories?.map((category, i) => {
          return (
            <h3 key={category[i]} className={categoryClass}>
              {category}
            </h3>
          );
        })}
      </div>
      <p className={dateClass}>Published on {date}</p>
      <h2 className={titleClass}>{title}</h2>
      <p className={childClass}>{description}</p>
      <div className="flex mt-4 gap-2 items-center">
        <img
          className="w-7 h-7 rounded-full bg-red-500 border-1"
          src={authorImage}
        />
        <p className="text-white text-xs font-medium">{author}</p>
      </div>
    </div>
  );
}
