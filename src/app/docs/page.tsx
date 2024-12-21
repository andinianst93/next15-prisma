import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default function DocsPage() {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="max-w-7xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
        voluptatum. Eos laudantium sint suscipit id iste, esse eum
        necessitatibus aut deserunt consequuntur inventore fugit excepturi
        itaque. Laboriosam doloremque aliquam sed optio ea cum eum. Eligendi
        voluptates eveniet voluptate saepe odio ratione dolorum amet ipsa
        quibusdam. Non accusamus magni hic laudantium!
      </div>
    </HydrationBoundary>
  );
}
