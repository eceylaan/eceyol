"use client";
import React from "react";
import { Card, Skeleton } from "@heroui/react";

export default function Loading() {
  const products = new Array(20).fill(0);

  return (
    <>
      <div className="product-page">
        {products.length > 0 &&
          products.map((product, index) => (
            <Card key={index} className="w-[%100] h-80 space-y-5 p-4" radius="lg">
              <Skeleton className="rounded-lg h-60">
                <div className="h-24 rounded-lg bg-default-300" />
              </Skeleton>
              <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-3 w-3/5 rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                  <div className="h-3 w-4/5 rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                  <div className="h-3 w-2/5 rounded-lg bg-default-300" />
                </Skeleton>
              </div>
            </Card>
          ))}
      </div>
    </>
  );
}

{
  /* <Card key={index} className="skeletonCard">
<Skeleton>
  <div className="skeleton skeleton-image"></div>
</Skeleton>
<div className="skeleton-group">
  <Skeleton>
    <div className="skeleton skeleton-text skeleton-text-2"></div>{" "}
  </Skeleton>
  <Skeleton>
    <div className="skeleton skeleton-text skeleton-text-3"></div>
  </Skeleton>
  <Skeleton>
    <div className="skeleton skeleton-text"></div>
  </Skeleton>
</div>
</Card> */
}
