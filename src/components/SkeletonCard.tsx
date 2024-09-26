import { Card, CardBody, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const SkeletonCard = () => {
  return (
    <Card >
      <Skeleton height="200px" width="300px"/>
      <CardBody>
        <SkeletonText/>
      </CardBody>
    </Card>
  );
};

export default SkeletonCard;
