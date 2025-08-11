import Image from "next/image";

const Announcements = () => {
  return (
    <div className="bg-white rounded-md p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View all</span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025/01/01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            incidunt possimus quas in laborum cumque?
          </p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025/01/01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            incidunt possimus quas in laborum cumque?
          </p>
        </div>
        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025/01/01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            incidunt possimus quas in laborum cumque?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
