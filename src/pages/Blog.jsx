import { useState, useEffect } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const DiaryBlog = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDays, setFilteredDays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Create dates from June 23 to July 21 (28 days total)
  const startDate = new Date(2025, 5, 23); // June is month 5 in JavaScript
  const totalDays = 28;

  // Days to skip: 25, 2, 9, 16
  const skippedDays = [26, 3, 10, 17];

  const days = Array.from({ length: totalDays }, (_, i) => {
    const dayNumber = i + 1;

    // Skip the specified days
    if (skippedDays.includes(dayNumber)) return null;

    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = currentDate.getDate();
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    return {
      id: dayNumber,
      title: `Day ${dayNumber}`,
      date: `${month} ${day}, ${year}`,
      pdfUrl: `/daily_blogs/Day_${dayNumber}.pdf`,
      excerpt: `This is a summary of activities and learnings from Day ${dayNumber} of my training...`,
      tags: ["React", "Next.js", "AI", "Training"],
      fullDate: currentDate,
    };
  }).filter((day) => day !== null); // Remove skipped days

  // Filter days based on search term
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredDays(days);
    } else {
      const filtered = days.filter(
        (day) =>
          day.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          day.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          day.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
      setFilteredDays(filtered);
    }
  }, [searchTerm]);

  const handleDayClick = (day) => {
    setIsLoading(true);
    setSelectedDay(day);

    // Simulate loading delay for better UX
    setTimeout(() => {
      setIsModalOpen(true);
      setIsLoading(false);
    }, 500);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDay(null);
  };

  const navigateDay = (direction) => {
    if (!selectedDay) return;

    const currentIndex = days.findIndex((day) => day.id === selectedDay.id);
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex - 1;
      if (newIndex < 0) newIndex = days.length - 1;
    } else {
      newIndex = currentIndex + 1;
      if (newIndex >= days.length) newIndex = 0;
    }

    setSelectedDay(days[newIndex]);
  };

  // PDF plugin
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto mt-10">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            My Training Journey
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A day-by-day account of my learning experience at Ablore
            <br />
            <span className="text-sm text-blue-600 font-medium">
              June 23, 2025 - July 21, 2025
            </span>
          </p>

          {/* Note about skipped days */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-auto mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <i className="fas fa-info-circle text-yellow-500 mt-1 mr-3"></i>
              </div>
              <div>
                <h4 className="text-sm font-medium text-yellow-800">Note</h4>
                <p className="text-sm text-yellow-700 mt-1">
                  Days 2, 9, 16, and 25 are not included as there were no
                  training sessions on these days.
                </p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search days, topics, or technologies..."
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute left-4 top-3.5 text-gray-400">
              <i className="fas fa-search"></i>
            </div>
          </div>

          {/* Results count */}
          {searchTerm && (
            <div className="mt-4 text-sm text-gray-600">
              Found {filteredDays.length} day
              {filteredDays.length !== 1 ? "s" : ""} matching "{searchTerm}"
            </div>
          )}
        </header>

        {/* Calendar Navigation */}
        <div className="mb-8 bg-white rounded-xl p-4 shadow-sm">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">
              Training Calendar
            </h3>
            <div className="flex items-center space-x-2 text-sm">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
                June 23
              </span>
              <span className="text-gray-400">to</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
                July 21
              </span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-7 gap-2 text-center">
            {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
              <div
                key={index}
                className="text-xs font-semibold text-gray-500 py-1"
              >
                {day}
              </div>
            ))}
            {/* Empty days before June 23 */}
            {Array.from({ length: 4 }, (_, i) => (
              <div key={`empty-${i}`} className="h-8"></div>
            ))}
            {/* Days from June 23 to July 21 */}
            {Array.from({ length: totalDays }, (_, i) => {
              const dayNumber = i + 1;
              const currentDate = new Date(startDate);
              currentDate.setDate(startDate.getDate() + i);

              // Check if this day should be skipped
              const isSkipped = skippedDays.includes(dayNumber);

              return (
                <div
                  key={dayNumber}
                  className={`h-8 flex items-center justify-center rounded-full text-sm
                    ${
                      isSkipped
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed line-through"
                        : currentDate.getDay() === 0 ||
                          currentDate.getDay() === 6
                        ? "bg-gray-100 text-gray-600 cursor-pointer"
                        : "bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer"
                    }`}
                  onClick={
                    isSkipped
                      ? undefined
                      : () =>
                          handleDayClick(days.find((d) => d.id === dayNumber))
                  }
                  title={
                    isSkipped
                      ? `Day ${dayNumber} - No session`
                      : `Day ${dayNumber}`
                  }
                >
                  {currentDate.getDate()}
                  {isSkipped && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full"></span>
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex items-center justify-center text-xs text-gray-500">
            <span className="w-3 h-3 bg-red-400 rounded-full mr-1"></span>
            <span>No training session</span>
          </div>
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDays.map((day) => (
            <div
              key={day.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
              onClick={() => handleDayClick(day)}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                    Day {day.id}
                  </span>
                  <span className="text-xs text-gray-500">{day.date}</span>
                </div>

                <div className="text-center py-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all">
                    <span className="text-2xl font-bold text-blue-700">
                      {day.id}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {day.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {day.excerpt}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-1 justify-center">
                  {day.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {day.tags.length > 2 && (
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                      +{day.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredDays.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <div className="text-5xl text-gray-300 mb-4">
              <i className="fas fa-search"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No results found
            </h3>
            <p className="text-gray-500">
              Try different keywords or browse all days
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View All Days
            </button>
          </div>
        )}

        {/* Loading Overlay */}
        {isLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-gray-700">Loading diary entry...</p>
            </div>
          </div>
        )}

        {/* PDF Modal */}
        {isModalOpen && selectedDay && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
              <div className="flex justify-between items-center p-4 border-b">
                <div className="flex items-center">
                  <button
                    onClick={() => navigateDay("prev")}
                    className="p-2 mr-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100"
                    aria-label="Previous day"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {selectedDay.title} - {selectedDay.date}
                  </h3>
                  <button
                    onClick={() => navigateDay("next")}
                    className="p-2 ml-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100"
                    aria-label="Next day"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
                  aria-label="Close"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div className="flex-grow overflow-y-hidden">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                  <div className="h-[75vh]">
                    <Viewer
                      fileUrl={selectedDay.pdfUrl}
                      plugins={[defaultLayoutPluginInstance]}
                    />
                  </div>
                </Worker>
              </div>

              <div className="p-4 border-t flex justify-between items-center">
                <div className="text-sm text-gray-600 flex items-center">
                  <i className="fas fa-file-pdf text-red-500 mr-2"></i>
                  Day_{selectedDay.id}.pdf
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => navigateDay("prev")}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 flex items-center"
                    disabled={selectedDay.id === 1}
                  >
                    <i className="fas fa-chevron-left mr-1 text-xs"></i>{" "}
                    Previous
                  </button>
                  <a
                    href={selectedDay.pdfUrl}
                    download={`day_${selectedDay.id}.pdf`}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center"
                  >
                    <i className="fas fa-download mr-2"></i> Download
                  </a>
                  <button
                    onClick={() => navigateDay("next")}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 flex items-center"
                    disabled={selectedDay.id === days[days.length - 1].id}
                  >
                    Next <i className="fas fa-chevron-right ml-1 text-xs"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default DiaryBlog;
