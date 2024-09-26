import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";
import { games, Platform } from "../hooks/useGames";
import PlatformsIcons from "./Platforms";
import Metacritic from "./Metacritic";
import cropImage from "../services/images-url";
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

interface Props {
  children: games;
  isLoading: boolean;
}

const GameCard = ({ children, isLoading }: Props) => {
  return (
    <Card 
      overflow="hidden"
      borderRadius={20}
      //variant='outline'
    >
      <Image
        objectFit="cover"
        src={cropImage(children.background_image)}
        alt="Caffe Latte"
      />

        <CardBody>
          <Heading size="sm" margin="5px" padding="5px">
            {children.name}
          </Heading>

          <HStack justifyContent="space-between">
            <HStack>
              <PlatformsIcons
                platforms={children.parent_platforms.map((p) => p.platform)}
              ></PlatformsIcons>
            </HStack>

            <Metacritic score={children.metacritic}></Metacritic>
          </HStack>
        </CardBody>
    </Card>
  );
};

export default GameCard;
