import image from "../assets/news.jpg";
export default function MyPreference({ title, description, src, url }) {
  return (
    <>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div style={{ maxWidth: "345px", maxHeight: "500px" }}>
          <div className="mt-6 mb-6 border border-gray-300 bg-gray-900 text-white px-7 py-3">
            <img
              src={src ? src : image}
              alt="..."
              className="rounded mt-3 mb-3"
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
            <div>
              <h5 className="font-bold text-xl mb-3 mt-3">
                {title
                  ? title.slice(0, 30)
                  : "Title is not provided by the author!"}
              </h5>
              <p>
                {description
                  ? description.slice(0, 50)
                  : "News Description is not provided by the Author!"}
              </p>
              <button className="mt-3 mb-3 bg-blue-600 px-7 py-3 uppercase rounded text-center">
                Read More
              </button>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
