import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarProfile({ src, name }: { src: string; name: string }) {
  return (
    <Avatar>
      <AvatarImage src={src} alt="profile" />
      <AvatarFallback>{name.charAt(0)}</AvatarFallback>
    </Avatar>
  );
}
