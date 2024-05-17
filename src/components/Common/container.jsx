const Container = ({ title, children }) => {
  
    return (
      <div className="flex flex-col p-4 gap-4 bg-white rounded w-full h-fit max-h-[calc(50vh - 4rem)]">
      {title && <div className="text-sm font-bold">{title}</div>}
      <div>{children}</div>
    </div>
      );
}

export default Container;