import Image from "next/image";
import Link from "next/link";

import { IconEyeFilled } from "@tabler/icons-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectCardType } from "@/types";

import { formatDate } from "../../lib/utils";
import { Badge } from "../ui/badge";

const ProjectCard = ({ post }: { post: ProjectCardType }) => {
  const {
    _id,
    _createdAt: createdAt,
    views,
    author,
    title,
    description,
    category,
    mainImage,
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
        <Link href={`/profile/${author?._id}`}>
          <p className="line-clamp-1 text-sm text-muted-foreground">
            {author?.name}
          </p>
        </Link>
        <Link href={`/project/${_id}`}>
          <CardTitle className="line-clamp-1 text-xl">{title}</CardTitle>
        </Link>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-square h-52 w-full md:aspect-video">
          <Image
            src={mainImage!}
            alt={title!}
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center justify-between gap-5">
          <Link href={`/?query=${category?.toLowerCase()}`}>
            <Badge variant={"secondary"}>{category}</Badge>
          </Link>
          {/* <Link href={`/project/${_id}`}>
            <Button variant={"primary"} size={"lg"}>
              Read More
              <IconArrowRight className="size-5" />
            </Button>
          </Link> */}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
