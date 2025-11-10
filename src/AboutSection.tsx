import React from "react";
import portfolioData from "./data.json";

interface aboutData {
  badge?: string;
  title?: string;
  imagePath?: string;
  paragraphs?: string[];
  quickBitsTitle?: string;
  quickBits?: string[];
  closingText?: string;
}
const AboutSection: React.FC = () => {
  const data = portfolioData?.about as aboutData;

  const renderText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <section
      id="about"
      className="container mx-auto px-4 py-16 md:py-24 lg:py-32 flex flex-col items-center"
    >
      <div className="mb-8">
        <span className="inline-block px-4 py-1 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full shadow-inner">
          About me
        </span>
      </div>
      <div className="flex flex-col md:flex-row max-w-6xl w-full gap-12">
        {data?.imagePath && (
          <div className="flex relative w-full max-w-sm mx-auto md:w-1/3 order-2 md:order-1">
            {/* <div className="absolute inset-0 bg-gray-200 rounded-lg transform translate-x-4 translate-y-4 -z-10 hidden lg:block"></div> */}
            <img
              src={data?.imagePath}
              alt="Profile"
              className="w-full h-auto rounded-lg relative z-10"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "https://placehold.co/400x500/374151/FFFFFF?text=Profile+Image";
              }}
            />
          </div>
        )}
        <div className="flex-1 order-1 md:order-2">
          {data.title && (
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
              {data.title}
            </h2>
          )}

          {data.paragraphs && data.paragraphs.length > 0 && (
            <>
              {data.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                  {renderText(paragraph)}
                </p>
              ))}
            </>
          )}

          {data.quickBitsTitle && (
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {renderText(data.quickBitsTitle)}
            </h3>
          )}
          {data.quickBits && data.quickBits.length > 0 && (
            <ul className="text-gray-700 list-disc list-inside space-y-1 ml-4 grid grid-cols-1 sm:grid-cols-2">
              {data.quickBits.map((bit, index) => (
                <li key={index}>{bit}</li>
              ))}
            </ul>
          )}

          {data.closingText && (
            <p className="text-gray-700 mt-6 leading-relaxed">
              {renderText(data.closingText)}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
