import React from "react";
const Card = (props) => {
  return (
    <div>
      <div class="w-[300px] rounded-md border bg-white">
        <img
          src={props.foodImage}
          alt="Laptop"
          class="h-[200px] w-full rounded-t-md object-cover"
        />
        <div class="p-4">
          <h1 class="inline-flex items-center text-lg font-semibold text-black-600">
            {props.foodName}  {" "}
          </h1>
          <p class="mt-3 text-sm text-gray-600">{props.Discription}</p>
          <div class="mt-4">
            <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              {props.tag1}
            </span>
            <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              {props.tag2}
            </span>
            <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              {props.tag3}
            </span>
          </div>
          <button
            type="button"
            class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
