import React from "react";
interface Props {
  children: React.ReactNode;
}

const Fixlayout = (props: Props) => {
  return (
    <main className="min-h-[100vh] flex justify-center flex-auto">
      <div className="w-full flex flex-col text-gray-600">{props.children}</div>
    </main>
  );
};

export default Fixlayout;
