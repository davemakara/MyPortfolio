type ResumeButtonProps = {
  children: React.ReactNode;
};

const ResumeButton = ({ children }: ResumeButtonProps) => {
  const onButtonClick = () => {
    const pdfUrl = "Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={onButtonClick}
      className="w-32 h-12 rounded-lg bg-[#C21010] text-white text-lg tracking-wider shadow-lg shadow-black hover:bg-[#AC0D0D] hover:-translate-y-[2px]"
    >
      {children}
    </button>
  );
};

export default ResumeButton;
