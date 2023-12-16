const StatusDisplay = ({ status }) => {
  const getColor = () => {
    let color = "bg-red-200";
    if (status.toLowerCase() === "done") color = "bg-green-200";
    if (status.toLowerCase() === "started") color = "bg-yellow-200";
    return color;
  };
  return (
    <span
      className={`inline-block rounded-full px-2 text-xs font-semibold text-gray-700 ${getColor()}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
