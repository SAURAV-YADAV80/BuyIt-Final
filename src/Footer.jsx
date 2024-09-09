import React, { memo } from "react";

function Footer() {
  return (
    <div className="w-full bg-gray-100 px-4 py-4 shadow-lg">
      <div className="flex max-w-6xl mx-auto items-center justify-between text-sm text-gray-800">
        <h1 className="text-center">
          Copyright © 2022 | Saurav
        </h1>
        <h1 className="text-center">
          Powered by Saurav Yadav
        </h1>
      </div>
    </div>
  );
}

const newFooter = memo(Footer);
export default newFooter;