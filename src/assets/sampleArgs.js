// Examples for each component

export const qrCode = {
  // Set the size of the QR code container & code
  size: "w-50 h-50",
  // Input can be dynamic, but here is an example that isn't dynamic:
  input: "https://www.youtube.com/watch?v=AXTWi6ADfxw",
};

export const blogCard = {
  title: "This is a Blog Card!",
  authorImage: "./authorimg.jpg",
  author: "Kotesei",
  // Could be useful when sorting by categories
  categories: ["Sample", "Tutorial"],
  date: "03/11/25",
  image:
    "https://images.unsplash.com/photo-1741526798351-50eeb46b2a06?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  imagealt: "photo in subway",
  // For moving the image up or down, only change the 2nd value unless you know what you're doing
  imagePos: "0 55%",
};

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
