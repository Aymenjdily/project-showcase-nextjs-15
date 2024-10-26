import Image from "next/image";
import Link from "next/link";

import { IconArrowRight, IconEyeFilled } from "@tabler/icons-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { formatDate } from "../../lib/utils";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _id,
    _createdAt: createdAt,
    views,
    author: { id, name },
    title,
    description,
    category,
    image,
  } = post;
  return (
    <Card className="border-4">
      <CardHeader>
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {formatDate(createdAt)}
          </p>
          <div className="flex gap-1.5">
            <IconEyeFilled className="size-5 text-blue-600" />
            <span className="text-sm font-medium">{views}</span>
          </div>
        </div>
        <Link href={`/profile/${id}`}>
          <p className="line-clamp-1 text-sm text-muted-foreground">{name}</p>
        </Link>
        <Link href={`/project/${_id}`}>
          <CardTitle className="line-clamp-1 text-xl">{title}</CardTitle>
        </Link>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-video h-52 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center justify-between gap-5">
          <Link href={`/?query=${category.toLowerCase()}`}>
            <Badge variant={"secondary"}>{category}</Badge>
          </Link>
          <Link href={`/project/${_id}`}>
            <Button variant={"primary"} size={"lg"}>
              Read More
              <IconArrowRight className="size-5" />
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default StartupCard;
